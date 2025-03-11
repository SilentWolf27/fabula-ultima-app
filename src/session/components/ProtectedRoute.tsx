import { Navigate } from "react-router";
import { useSession } from "../context/SessionContext";
import { Outlet } from "react-router";
import { Loading } from "../../components/Loading";

export function ProtectedRoute() {
  const { isAuthenticated, loading } = useSession();

  if (loading) return <Loading fullScreen />;

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
}
