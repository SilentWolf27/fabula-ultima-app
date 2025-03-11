import { NavItem } from "./NavItem";

interface DesktopNavProps {
  userEmail?: string | null;
}

export function DesktopNav({ userEmail }: DesktopNavProps) {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      <ul className="flex gap-6">
        <NavItem to="/personajes">Personajes</NavItem>
        <NavItem to="/historias">Historias</NavItem>
      </ul>

      <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
        <span className="text-sm text-gray-600">{userEmail}</span>
      </div>
    </nav>
  );
} 