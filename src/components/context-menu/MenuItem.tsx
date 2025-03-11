import { ReactNode } from "react";

interface Props {
  children: ReactNode;

  className?: string;
}

const baseClasses = "block w-full text-left px-4 py-2 text-sm";

export function MenuItem({ children, className = "" }: Props) {
  const classes = `${baseClasses} ${className}`;

  return <button className={classes}>{children}</button>;
}
