import { MouseEventHandler } from "react";
import { NavItem } from "./NavItem";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  userEmail?: string | null;
}

export function MobileMenu({ isOpen, onClose, userEmail }: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 bg-opacity-50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-dvh w-64 bg-white shadow-lg transition-translate duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="p-6">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="p-2 text-gray-600 hover:text-gray-900">
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="mt-8">
            <ul className="flex flex-col gap-6">
              <NavItem to="/personajes">Personajes</NavItem>
              <NavItem to="/historias">Historias</NavItem>
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <span className="text-xs text-gray-600 font-fantasy">
                {userEmail}
              </span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
