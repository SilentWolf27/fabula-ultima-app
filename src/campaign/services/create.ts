import { createClient } from "@/supabase/clients/browser";
import { CreateCampaignValues } from "../schemas/create";
import { buildErrorFromSupabase } from "@/supabase/errors/supabase";

type CreateCampaignResponse = {
  error: Error | null;
  success: boolean;
};

export async function createCampaign(
  campaign: CreateCampaignValues
): Promise<CreateCampaignResponse> {
  const supabase = createClient();

  const { error } = await supabase.from("campaigns").insert({
    name: campaign.name,
    description: campaign.description,
    settings: {
      initial_level: campaign.settings.initialLevel,
      max_level: campaign.settings.maxLevel,
      max_players: campaign.settings.maxPlayers,
      xp_initial: campaign.settings.xpInitial,
      initial_zenit: campaign.settings.initialZenit,
      initial_fabula_points: campaign.settings.initialFabulaPoints,
      character_creation: campaign.settings.characterCreation,
    },
  });

  if (error)
    return { error: buildErrorFromSupabase(error.code), success: false };

  return { error: null, success: true };
}
