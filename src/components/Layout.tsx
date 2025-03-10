import { Link, Outlet } from "react-router";
import { useSession } from "../session/context/SessionContext";
import { createClient } from "../supabase/clients/browser";

export default function Layout() {
  const { user } = useSession();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex gap-4">
              <Link
                to="/"
                className="text-gray-900 hover:text-gray-600 transition-colors">
                Home
              </Link>
              <Link
                to="/characters"
                className="text-gray-900 hover:text-gray-600 transition-colors">
                Characters
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                {user?.email}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Cerrar sesión
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </>
  );
}
