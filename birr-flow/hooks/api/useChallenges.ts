import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { Challenge, Prisma, ChallengeStatus } from "@prisma/client";

export const challengeKeys = {
  all: ["challenges"] as const,
  lists: () => [...challengeKeys.all, "list"] as const,
  list: (filters: { status?: ChallengeStatus }) => [...challengeKeys.lists(), filters] as const,
  details: () => [...challengeKeys.all, "detail"] as const,
  detail: (id: string) => [...challengeKeys.details(), id] as const,
};

export const useChallenges = (status?: ChallengeStatus) => {
  return useQuery({
    queryKey: challengeKeys.list({ status }),
    queryFn: () => apiClient<Challenge[]>(`/api/challenges${status ? `?status=${status}` : ""}`),
  });
};

export const useChallenge = (id: string) => {
  return useQuery({
    queryKey: challengeKeys.detail(id),
    queryFn: () => apiClient<Challenge>(`/api/challenges/${id}`),
    enabled: !!id,
  });
};

export const useCreateChallenge = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: Prisma.ChallengeCreateInput) => 
      apiClient<Challenge>("/api/challenges", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: challengeKeys.lists() });
    },
  });
};

export const useUpdateChallenge = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Prisma.ChallengeUpdateInput }) => 
      apiClient<Challenge>(`/api/challenges/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: challengeKeys.detail(variables.id) });
      queryClient.invalidateQueries({ queryKey: challengeKeys.lists() });
    },
  });
};
