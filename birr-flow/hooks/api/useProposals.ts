import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { Proposal, Prisma } from "@prisma/client";

export const proposalKeys = {
  all: ["proposals"] as const,
  lists: () => [...proposalKeys.all, "list"] as const,
  list: (filters: { challengeId?: string; startupId?: string }) => [...proposalKeys.lists(), filters] as const,
  details: () => [...proposalKeys.all, "detail"] as const,
  detail: (id: string) => [...proposalKeys.details(), id] as const,
};

export const useProposals = (filters?: { challengeId?: string; startupId?: string }) => {
  return useQuery({
    queryKey: proposalKeys.list(filters || {}),
    queryFn: () => {
      const params = new URLSearchParams();
      if (filters?.challengeId) params.append("challengeId", filters.challengeId);
      if (filters?.startupId) params.append("startupId", filters.startupId);
      
      const queryString = params.toString();
      return apiClient<Proposal[]>(`/api/proposals${queryString ? `?${queryString}` : ""}`);
    },
  });
};

export const useProposal = (id: string) => {
  return useQuery({
    queryKey: proposalKeys.detail(id),
    queryFn: () => apiClient<Proposal>(`/api/proposals/${id}`),
    enabled: !!id,
  });
};

export const useCreateProposal = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: Prisma.ProposalCreateInput) => 
      apiClient<Proposal>("/api/proposals", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: proposalKeys.lists() });
    },
  });
};

export const useUpdateProposal = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Prisma.ProposalUpdateInput }) => 
      apiClient<Proposal>(`/api/proposals/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: proposalKeys.detail(variables.id) });
      queryClient.invalidateQueries({ queryKey: proposalKeys.lists() });
    },
  });
};
