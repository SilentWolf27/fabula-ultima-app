import { z } from "zod";

export const createCampaignSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  description: z.string().optional(),
  cover: z
    .instanceof(FileList)
    .optional()
    .transform((files) => files?.[0])
    .refine(
      (file) => !file || (file instanceof File && file.size <= 3 * 1024 * 1024),
      "La imagen debe ser menor a 3MB"
    ),
});

export type CreateCampaignValues = z.infer<typeof createCampaignSchema>;
