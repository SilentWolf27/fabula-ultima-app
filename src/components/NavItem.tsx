import { NavLink } from "react-router";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

export function NavItem({ to, children }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-xs font-fantasy relative px-2 py-1 transition-colors duration-200 ease-in-out
        after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[2px] after:transition-opacity after:duration-200
        ${
          isActive
            ? "text-gray-900 font-medium after:bg-indigo-600 after:opacity-100"
            : "text-gray-500 hover:text-gray-800 after:opacity-0"
        }`
      }>
      {children}
    </NavLink>
  );
}
