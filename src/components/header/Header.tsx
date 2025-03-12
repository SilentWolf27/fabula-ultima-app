import { Link } from "react-router";
import { useSession } from "@/session/context/SessionContext";
import { useState, MouseEventHandler } from "react";
import { MobileMenu } from "./MobileMenu";
import { DesktopNav } from "./DesktopNav";

export function Header() {
  const { user } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu: MouseEventHandler<HTMLButtonElement> = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white shadow-sm px-4 lg:px-12 py-4 fixed top-0 left-0 right-0 z-10">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-xl lg:text-2xl font-medieval text-indigo-900 font-semibold">
              Fábula Última DnD App
            </h1>
          </Link>

          <DesktopNav user={user!} />

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Abrir menú">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} user={user!} />
    </>
  );
}
