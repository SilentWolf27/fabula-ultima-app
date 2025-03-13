export const campaignKeys = {
  all: ["campaigns"] as const,
  lists: () => [...campaignKeys.all, "list"] as const,
  details: () => [...campaignKeys.all, "detail"] as const,
  detail: (id: string) => [...campaignKeys.details(), id] as const,
} as const;
