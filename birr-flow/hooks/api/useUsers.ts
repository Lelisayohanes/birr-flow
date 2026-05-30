import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { User, Prisma, Role } from "@prisma/client";

export const userKeys = {
  all: ["users"] as const,
  lists: () => [...userKeys.all, "list"] as const,
  list: (filters: { role?: Role }) => [...userKeys.lists(), filters] as const,
  details: () => [...userKeys.all, "detail"] as const,
  detail: (id: string) => [...userKeys.details(), id] as const,
};

export const useUsers = (role?: Role) => {
  return useQuery({
    queryKey: userKeys.list({ role }),
    queryFn: () => apiClient<User[]>(`/api/users${role ? `?roles=${role}` : ""}`),
  });
};

export const useUser = (id: string) => {
  return useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => apiClient<User>(`/api/users/${id}`),
    enabled: !!id,
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: Prisma.UserCreateInput) => 
      apiClient<User>("/api/users", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Prisma.UserUpdateInput }) => 
      apiClient<User>(`/api/users/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: userKeys.detail(variables.id) });
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
    },
  });
};
