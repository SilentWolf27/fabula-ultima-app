import { Navigate } from "react-router";
import { useSession } from "../context/SessionContext";
import { Outlet } from "react-router";
import { Loading } from "../../components/Loading";

export function PlayerProtectedRoute() {
  const { isAuthenticated, loading, user } = useSession();
  const profile = user?.profile;

  if (loading) return <Loading fullScreen />;

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (profile?.role !== "player") return <Navigate to="/" replace />;

  return <Outlet />;
}
