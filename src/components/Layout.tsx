import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4 h-16 items-center">
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
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </>
  );
}
