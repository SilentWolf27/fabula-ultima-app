import { NavItem } from "./NavItem";
import { UserMenu } from "./UserMenu";
import { useNavbar } from "@/hooks/useNavbar";
import { UserWithProfile } from "@/session/interfaces/session";

interface Props {
  user: UserWithProfile;
}

export function DesktopNav({ user }: Props) {
  const { items } = useNavbar({ user });

  return (
    <nav className="hidden lg:flex items-center gap-8">
      <ul className="flex gap-6">
        {items.map((item) => (
          <NavItem key={item.to} to={item.to}>
            {item.label}
          </NavItem>
        ))}
      </ul>

      <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
        <UserMenu userEmail={user.email} />
      </div>
    </nav>
  );
}
