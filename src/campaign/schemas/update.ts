import { z } from "zod";
import { createCampaignSchema } from "./create";

export const updateCampaignSchema = createCampaignSchema.extend({
  id: z.string(),
});

export type UpdateCampaignValues = z.infer<typeof updateCampaignSchema>;
