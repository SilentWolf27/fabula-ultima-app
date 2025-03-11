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
        `text-xs font-fantasy relative px-2 py-1 transition-colors duration-300 ease-in-out underline decoration-indigo-700 decoration-2 underline-offset-4
        ${
          isActive
            ? "text-indigo-700 font-medium after:bg-indigo-700 after:opacity-100"
            : "text-gray-700 hover:text-indigo-600 after:bg-indigo-400 after:opacity-0 hover:after:opacity-50"
        }`
      }>
      {children}
    </NavLink>
  );
}
