import { Navigate } from "react-router";
import { useSession } from "../context/SessionContext";
import { Outlet } from "react-router";

export function AuthRoute() {
  const { isAuthenticated, loading } = useSession();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500" />
      </div>
    );
  }

  if (isAuthenticated) return <Navigate to="/" replace />;

  return <Outlet />;
}
