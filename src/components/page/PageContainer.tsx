interface Props {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className = "" }: Props) {
  return (
    <main className={`container mx-auto px-5 py-14 ${className}`}>
      {children}
    </main>
  );
}
