import { MouseEventHandler } from "react";
import { NavItem } from "./NavItem";
import { NavLink } from "react-router";
import LogoutButton from "../../auth/components/LogoutButton";
import { useNavbar } from "../../hooks/useNavbar";
import { UserWithProfile } from "../../session/interfaces/session";

interface Props {
  isOpen: boolean;
  onClose: MouseEventHandler<any>;
  user: UserWithProfile;
}

export function MobileMenu({ isOpen, onClose, user }: Props) {
  const firstLetter = user.email?.charAt(0).toUpperCase() || "?";
  const { items } = useNavbar({ user });

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 bg-opacity-50 transition-opacity duration-300 lg:hidden z-40 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-dvh w-64 bg-white shadow-lg transition-translate duration-300 ease-in-out lg:hidden z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="p-6">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="p-2 text-gray-600 hover:text-gray-900"
              aria-label="Cerrar menú">
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

          <nav>
            {/* User section */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium text-sm ring-2 ring-indigo-100">
                {firstLetter}
              </div>
              <span className="text-sm text-gray-600">{user.email}</span>
            </div>

            <ul className="flex flex-col gap-6" onClick={onClose}>
              {items.map((item) => (
                <NavItem key={item.to} to={item.to}>
                  {item.label}
                </NavItem>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col gap-4">
              <NavLink
                to="/perfil"
                className="text-sm text-gray-700 hover:text-indigo-600"
                onClick={onClose}>
                Tu Perfil
              </NavLink>
              <LogoutButton />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
