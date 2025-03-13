import { createClient } from "@/supabase/clients/browser";
import { CreateCampaignValues } from "../schemas/create";
import { buildErrorFromSupabase } from "@/supabase/errors/supabase";
import { Campaign } from "../interfaces/campaign";

const supabase = createClient();

type Response<T> = {
  data: T;
  error: Error | null;
};

type GetAllCampaignsResponse = Response<Campaign[]>;

type CreateCampaignResponse = Response<Campaign | null>;

type GetCampaignResponse = Response<Campaign | null>;

type DeleteCampaignResponse = Response<Partial<Campaign> | null>;

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
    .is("deleted_at", null)
    .overrideTypes<Campaign[]>();

  if (error) {
    return {
      data: [],
      error: buildErrorFromSupabase(error),
    };
  }

  return { data, error: null };
}

export async function getCampaign(id: string): Promise<GetCampaignResponse> {
  const { data, error } = await supabase
    .from("campaigns")
    .select(
      "id, name, description, status, cover_url, map_url, is_public, created_at, settings"
    )
    .eq("id", id)
    .is("deleted_at", null)
    .single()
    .overrideTypes<Campaign>();

  if (error) return { error: buildErrorFromSupabase(error), data: null };

  return { error: null, data };
}

export async function updateCampaign(
  id: string,
  campaign: Campaign
): Promise<unknown> {
  return;
}

export async function deleteCampaign(
  id: string
): Promise<DeleteCampaignResponse> {
  const { error } = await supabase
    .from("campaigns")
    .update({ deleted_at: new Date() })
    .eq("id", id);

  if (error) return { error: buildErrorFromSupabase(error), data: null };

  return { error: null, data: { id } };
}
