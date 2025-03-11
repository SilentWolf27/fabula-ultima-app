import { NavLink } from "react-router";
import { ContextMenu } from "../context-menu/ContextMenu";
import { MenuItem } from "../context-menu/MenuItem";

interface Props {
  userEmail?: string | null;
}

export function UserMenu({ userEmail }: Props) {
  const firstLetter = userEmail?.charAt(0).toUpperCase() || "?";

  return (
    <ContextMenu
      trigger={({
        onClick,
        isOpen,
        "aria-expanded": ariaExpanded,
        "aria-haspopup": ariaHasPopup,
      }) => (
        <button
          onClick={onClick}
          className="flex items-center gap-2 group"
          aria-expanded={ariaExpanded}
          aria-haspopup={ariaHasPopup}>
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium text-sm ring-2 ring-indigo-100 group-hover:ring-indigo-200 transition-all">
            {firstLetter}
          </div>

          <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
            {userEmail}
          </span>

          <svg
            className={`w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}>
      <MenuItem>
        <NavLink to="/perfil">Tu Perfil</NavLink>
      </MenuItem>
    </ContextMenu>
  );
}
