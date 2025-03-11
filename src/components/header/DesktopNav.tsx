import { NavItem } from "./NavItem";
import { UserMenu } from "./UserMenu";

interface Props {
  userEmail?: string | null;
}

export function DesktopNav({ userEmail }: Props) {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      <ul className="flex gap-6">
        <NavItem to="/personajes">Personajes</NavItem>
        <NavItem to="/historias">Historias</NavItem>
      </ul>

      <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
        <UserMenu userEmail={userEmail} />
      </div>
    </nav>
  );
}
