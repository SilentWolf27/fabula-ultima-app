import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCampaign } from "../../services/campaign";
import { campaignKeys } from "../keys/campaignKeys";
import { Campaign } from "../../interfaces/campaign";
import { CreateCampaignValues } from "../../schemas/create";

interface Params {
  onSuccess?: (data: Campaign) => void;
  onError?: (error: Error) => void;
}

export function useCreateCampaign({
  onSuccess: onSuccessCallback,
  onError: onErrorCallback,
}: Params = {}) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: CreateCampaignValues) => createCampaign(values),
    //Before mutation
    onMutate: async (_newCampaign: CreateCampaignValues) => {
      await queryClient.cancelQueries({
        queryKey: campaignKeys.lists(),
      });
    },

    onError: (error: Error, _newCampaign, _context) => {
      onErrorCallback?.(error);
    },
    onSuccess: (response) => {
      if (response.error) {
        onErrorCallback?.(response.error);
        return;
      }

      onSuccessCallback?.(response.data!);
    },
    onSettled: () => {
      //Refetch
      queryClient.invalidateQueries({
        queryKey: campaignKeys.lists(),
      });
    },
  });
}
