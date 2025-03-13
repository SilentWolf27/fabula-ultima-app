import { z } from "zod";

const characterCreationEnum = z.enum(["default_points", "roll"], {
  message:
    "El método de creación de personajes debe ser 'puntos por defecto' o 'lanzar dados'",
});

const settingsSchema = z.object({
  initialLevel: z
    .number()
    .min(1)
    .max(10, "El nivel inicial debe ser menor que 10")
    .default(3),
  maxLevel: z
    .number()
    .min(10, "El nivel máximo debe ser mayor que 10")
    .max(1000, "El nivel máximo debe ser menor que 1000")
    .default(100),
  maxPlayers: z.number().min(1).max(10).default(6),
  xpInitial: z.number().min(0, "El XP inicial debe ser mayor que 0").default(0),
  characterCreation: characterCreationEnum.default("default_points"),
  initialZenit: z
    .number()
    .min(0, "Los zenit iniciales deben ser mayor que 0")
    .default(500),
  initialFabulaPoints: z
    .number()
    .min(0, "Los fabula points iniciales deben ser mayor que 0")
    .max(10)
    .default(2),
});

export const createCampaignSchema = z.object({
  // Basic Info
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  description: z.string().optional(),

  // Settings
  settings: settingsSchema,
});

export type CreateCampaignValues = z.infer<typeof createCampaignSchema>;
