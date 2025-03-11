import { Link } from "react-router";
import { useSession } from "../session/context/SessionContext";
import { NavItem } from "./NavItem";

export function Header() {
  const { user } = useSession();

  return (
    <header className="bg-white shadow-sm px-12 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <h1 className="text-2xl font-medieval text-indigo-900 font-semibold">
          Fábula Última DnD App
        </h1>
      </Link>

      <nav className="flex items-center gap-8">
        <div className="flex gap-4">
          <NavItem to="/characters">Characters</NavItem>
        </div>

        <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
          <span className="text-sm text-gray-600">{user?.email}</span>
        </div>
      </nav>
    </header>
  );
}
