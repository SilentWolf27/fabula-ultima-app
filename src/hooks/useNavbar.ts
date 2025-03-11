import { useMemo } from "react";
import { UserWithProfile } from "../session/interfaces/session";

interface NavItem {
  to: string;
  label: string;
}

interface Props {
  user: UserWithProfile;
}

export function useNavbar({ user }: Props) {
  const role = user?.profile?.role || "player";

  const navItems = useMemo(() => {
    const items: Record<string, NavItem[]> = {
      master: [{ to: "/creador-historias", label: "Creador de Historias" }],
      player: [
        { to: "/personajes", label: "Personajes" },
        { to: "/historias", label: "Historias" },
      ],
    };

    return items[role] || [];
  }, [role]);

  return {
    items: navItems,
  };
}
