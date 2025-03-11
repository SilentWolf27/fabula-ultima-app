import { Navigate } from "react-router";
import { useSession } from "../../session/context/SessionContext";
import { ProfileCard } from "../components/ProfileCard";

export function ProfilePage() {
  const { user, loading } = useSession();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary" />
      </div>
    );
  }

  if (!user) return <Navigate to="/login" />;

  return (
    <main className="container mx-auto px-5 py-14">
      <h2 className="text-2xl font-bold mb-6">Mi Perfil</h2>
      <ProfileCard user={user} />
    </main>
  );
}
