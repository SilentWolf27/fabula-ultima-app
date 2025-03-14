import { Step } from "@/components/multi-step/types";

export const steps: Step[] = [
  {
    id: "basic",
    title: "Información Básica",
    fields: ["name", "description", "cover"],
  },
  {
    id: "settings",
    title: "Opciones",
    fields: [
      "settings.initialLevel",
      "settings.maxLevel",
      "settings.maxPlayers",
      "settings.xpInitial",
      "settings.initialZenit",
      "settings.initialFabulaPoints",
    ],
  },
];
