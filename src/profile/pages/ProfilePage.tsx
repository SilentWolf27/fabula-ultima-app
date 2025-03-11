import { useSession } from "../../session/context/SessionContext";
import { ProfileCard } from "../components/ProfileCard";

export function ProfilePage() {
  const { user } = useSession();

  return (
    <main className="container mx-auto px-5 py-14">
      <h2 className="text-2xl font-bold mb-6">Tu Perfil</h2>
      <ProfileCard user={user!} />
    </main>
  );
}
