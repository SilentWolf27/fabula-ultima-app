interface Props {
  fullScreen?: boolean;
}

export function Loading({ fullScreen = false }: Props) {
  const containerClasses = fullScreen 
    ? "flex items-center justify-center min-h-screen"
    : "flex items-center justify-center p-4";

  return (
    <div className={containerClasses}>
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600" />
    </div>
  );
} 