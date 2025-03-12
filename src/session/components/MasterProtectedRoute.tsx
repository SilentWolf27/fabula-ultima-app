import { useSession } from "../context/SessionContext";
import { Navigate, Outlet } from "react-router";
import { Loading } from "@/components/Loading";

export function MasterProtectedRoute() {
  const { isAuthenticated, loading, user } = useSession();
  const profile = user?.profile;

  if (loading) return <Loading fullScreen />;

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (profile?.role !== "master") return <Navigate to="/" replace />;

  return <Outlet />;
}
