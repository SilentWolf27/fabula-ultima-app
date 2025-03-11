import { useState, ReactNode } from "react";

interface Props {
  trigger: (props: {
    onClick: () => void;
    isOpen: boolean;
    "aria-expanded": boolean;
    "aria-haspopup": boolean;
  }) => ReactNode;
  children: ReactNode;
}

export function ContextMenu({ trigger, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative">
      {trigger({
        onClick: toggleMenu,
        isOpen,
        "aria-expanded": isOpen,
        "aria-haspopup": true,
      })}

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-20"
          onClick={closeMenu}>
          {children}
        </div>
      )}
    </div>
  );
}
