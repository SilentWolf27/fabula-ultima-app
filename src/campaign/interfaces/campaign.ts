export type StoryStatus =
  | "draft"
  | "active"
  | "in_progress"
  | "on_hold"
  | "cancelled"
  | "completed"
  | "archived";

export const StoryStatusColors: Record<StoryStatus, string> = {
  draft: "gray",
  active: "green",
  in_progress: "blue",
  on_hold: "yellow",
  cancelled: "red",
  completed: "green",
  archived: "gray",
};

export type CharacterCreationMethod = "default_points" | "roll";

export interface CampaignSettings {
  initial_level: number;
  max_level: number;
  max_players: number;
  xp_initial: number;
  character_creation: CharacterCreationMethod;
  initial_zenit: number;
  initial_fabula_points: number;
}

export interface Campaign {
  id: number;
  master_id: string;
  name: string;
  description: string | null;
  created_at: string;
  status: StoryStatus;
  cover_url: string | null;
  map_url: string | null;
  is_public: boolean;
  settings: CampaignSettings;
}
