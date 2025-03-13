import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCampaign } from "../../services/campaign";

interface Params {
  onSuccess: () => void;
  onError: (error: Error) => void;
}

export function useDeleteCampaign({
  onSuccess: onSuccessCallback,
  onError: onErrorCallback,
}: Params) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (campaignId: string) => {
      const response = await deleteCampaign(campaignId);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["campaigns"] });
      onSuccessCallback?.();
    },
    onError: (error) => {
      onErrorCallback?.(error);
    },
  });
}
