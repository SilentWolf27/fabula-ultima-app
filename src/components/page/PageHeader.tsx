import { Link } from "react-router";

interface Props {
  title: string;
  children?: React.ReactNode;
  backTo?: string;
}

export function PageHeader({ title, children, backTo }: Props) {
  return (
    <div className="flex items-center gap-4 mb-8">
      {backTo && (
        <Link
          to={backTo}
          className="text-gray-500 hover:text-gray-700 transition-colors">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </Link>
      )}

      <div className="flex-1 flex justify-between items-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        {children}
      </div>
    </div>
  );
}
