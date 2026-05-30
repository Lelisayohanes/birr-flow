import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { Proof, Prisma, ProofStatus } from "@prisma/client";

export const proofKeys = {
  all: ["proofs"] as const,
  lists: () => [...proofKeys.all, "list"] as const,
  list: (filters: { status?: ProofStatus; milestoneId?: string; uploadedById?: string }) => [...proofKeys.lists(), filters] as const,
  details: () => [...proofKeys.all, "detail"] as const,
  detail: (id: string) => [...proofKeys.details(), id] as const,
};

export const useProofs = (filters?: { status?: ProofStatus; milestoneId?: string; uploadedById?: string }) => {
  return useQuery({
    queryKey: proofKeys.list(filters || {}),
    queryFn: () => {
      const params = new URLSearchParams();
      if (filters?.status) params.append("status", filters.status);
      if (filters?.milestoneId) params.append("milestoneId", filters.milestoneId);
      if (filters?.uploadedById) params.append("uploadedById", filters.uploadedById);
      
      const queryString = params.toString();
      return apiClient<Proof[]>(`/api/proofs${queryString ? `?${queryString}` : ""}`);
    },
  });
};

export const useProof = (id: string) => {
  return useQuery({
    queryKey: proofKeys.detail(id),
    queryFn: () => apiClient<Proof>(`/api/proofs/${id}`),
    enabled: !!id,
  });
};

export const useSubmitProof = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: Prisma.ProofCreateInput) => 
      apiClient<Proof>("/api/proofs", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: proofKeys.lists() });
    },
  });
};

export const useReviewProof = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Prisma.ProofUpdateInput }) => 
      apiClient<Proof>(`/api/proofs/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: proofKeys.detail(variables.id) });
      queryClient.invalidateQueries({ queryKey: proofKeys.lists() });
    },
  });
};
