import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCampaign } from "../../services/campaign";
import { Campaign } from "../../interfaces/campaign";

interface Params {
  onSuccess: () => void;
  onError: (error: Error) => void;
}

export function useUpdateCampaign({
  onSuccess: onSuccessCallback,
  onError: onErrorCallback,
}: Params) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (campaign: Campaign) => {
      const response = await updateCampaign(campaign);
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
