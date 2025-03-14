import { z } from "zod";

export const campaignFormSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  description: z.string().optional(),
  settings: z.object({
    initialLevel: z.number().min(1).max(100),
    maxLevel: z.number().min(1).max(100),
    maxPlayers: z.number().min(1).max(10),
    xpInitial: z.number().min(0),
    initialZenit: z.number().min(0),
    initialFabulaPoints: z.number().min(0),
    characterCreation: z.enum(["default_points", "roll"]),
  }),
});

export type CampaignFormValues = z.infer<typeof campaignFormSchema>;

export const defaultValues: CampaignFormValues = {
  name: "",
  description: "",
  settings: {
    initialLevel: 3,
    maxLevel: 100,
    maxPlayers: 6,
    xpInitial: 0,
    initialZenit: 500,
    initialFabulaPoints: 2,
    characterCreation: "default_points",
  },
};
