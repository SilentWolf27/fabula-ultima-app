import { createClient } from "@/supabase/clients/browser";
import { CreateCampaignValues } from "../schemas/create";
import { buildErrorFromSupabase } from "@/supabase/errors/supabase";
import { Campaign } from "../interfaces/campaign";

const supabase = createClient();

type GetAllCampaignsResponse = {
  data: Campaign[];
  error: Error | null;
};

type CreateCampaignResponse = {
  data: Campaign | null;
  error: Error | null;
};

export async function createCampaign(
  campaign: CreateCampaignValues
): Promise<CreateCampaignResponse> {
  const { data, error } = await supabase
    .from("campaigns")
    .insert({
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
    })
    .select("id, name, description, status, cover_url")
    .single()
    .overrideTypes<Campaign>();

  if (error) return { error: buildErrorFromSupabase(error.code), data: null };

  return { error: null, data };
}

export async function getCampaigns(): Promise<GetAllCampaignsResponse> {
  const { data, error } = await supabase
    .from("campaigns")
    .select("id, name, description, status, cover_url")
    .overrideTypes<Campaign[]>();

  if (error) {
    return {
      data: [],
      error: buildErrorFromSupabase(error),
    };
  }

  return { data, error: null };
}

export async function getCampaign(id: string): Promise<unknown> {
  return;
}

export async function updateCampaign(
  id: string,
  campaign: Campaign
): Promise<unknown> {
  return;
}
