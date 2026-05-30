import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { Grant, Prisma, GrantStatus } from "@prisma/client";

export const grantKeys = {
  all: ["grants"] as const,
  lists: () => [...grantKeys.all, "list"] as const,
  list: (filters: { status?: GrantStatus; startupId?: string; donorId?: string }) => [...grantKeys.lists(), filters] as const,
  details: () => [...grantKeys.all, "detail"] as const,
  detail: (id: string) => [...grantKeys.details(), id] as const,
};

export const useGrants = (filters?: { status?: GrantStatus; startupId?: string; donorId?: string }) => {
  return useQuery({
    queryKey: grantKeys.list(filters || {}),
    queryFn: () => {
      const params = new URLSearchParams();
      if (filters?.status) params.append("status", filters.status);
      if (filters?.startupId) params.append("startupId", filters.startupId);
      if (filters?.donorId) params.append("donorId", filters.donorId);
      
      const queryString = params.toString();
      return apiClient<Grant[]>(`/api/grants${queryString ? `?${queryString}` : ""}`);
    },
  });
};

export const useGrant = (id: string) => {
  return useQuery({
    queryKey: grantKeys.detail(id),
    queryFn: () => apiClient<Grant>(`/api/grants/${id}`),
    enabled: !!id,
  });
};

export const useCreateGrant = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: Prisma.GrantCreateInput) => 
      apiClient<Grant>("/api/grants", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: grantKeys.lists() });
    },
  });
};

export const useUpdateGrant = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Prisma.GrantUpdateInput }) => 
      apiClient<Grant>(`/api/grants/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: grantKeys.detail(variables.id) });
      queryClient.invalidateQueries({ queryKey: grantKeys.lists() });
    },
  });
};
