import { NavLink } from "react-router";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

export function NavItem({ to, children }: NavItemProps) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `text-xs md:text-sm font-serif relative px-2 py-1.5 md:py-1 w-full md:w-auto inline-block transition-colors duration-200 ease-in-out
        after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[2px] after:transition-opacity after:duration-200
        ${
          isActive
            ? "text-gray-900 font-medium after:bg-indigo-600 after:opacity-100"
            : "text-gray-500 hover:text-gray-800 after:opacity-0"
        }`
        }>
        {children}
      </NavLink>
    </li>
  );
}
