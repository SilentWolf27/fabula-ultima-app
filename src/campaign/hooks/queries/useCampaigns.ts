import { useQuery } from "@tanstack/react-query";
import { getCampaigns } from "../../services/campaign";
import { campaignKeys } from "../keys/campaignKeys";

export function useCampaigns() {
  return useQuery({
    queryKey: campaignKeys.list(),
    queryFn: getCampaigns,
  });
}
