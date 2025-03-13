export type StoryStatus =
  | "draft"
  | "active"
  | "in_progress"
  | "on_hold"
  | "cancelled"
  | "completed"
  | "archived";

interface StatusColors {
  text: string;
  bg: string;
  border: string;
}

export const StoryStatusColors: Record<StoryStatus, StatusColors> = {
  draft: {
    text: "text-gray-700",
    bg: "bg-gray-50",
    border: "border-gray-200",
  },
  active: {
    text: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  in_progress: {
    text: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  on_hold: {
    text: "text-yellow-700",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
  },
  cancelled: {
    text: "text-red-700",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  completed: {
    text: "text-purple-700",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  archived: {
    text: "text-gray-700",
    bg: "bg-gray-50",
    border: "border-gray-200",
  },
};

export const StatusLabel: Record<StoryStatus, string> = {
  draft: "Borrador",
  active: "Activa",
  in_progress: "En curso",
  on_hold: "Pausada",
  cancelled: "Cancelada",
  completed: "Completada",
  archived: "Archivada",
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
  id: string;
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
