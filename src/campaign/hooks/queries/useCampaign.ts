import { getCampaign } from "@/campaign/services/campaign";
import { campaignKeys } from "../keys/campaignKeys";
import { useQuery } from "@tanstack/react-query";

export function useCampaign(id: string) {
  return useQuery({
    queryKey: campaignKeys.detail(id),
    queryFn: () => getCampaign(id),
    select: (response) => {
      if (response.error) throw response.error;

      return response.data;
    },
  });
}
