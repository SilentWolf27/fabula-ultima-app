import { PageContainer } from "@/components/page/PageContainer";
import { PageHeader } from "@/components/page/PageHeader";
import { useSession } from "@/session/context/SessionContext";
import { ProfileCard } from "../components/ProfileCard";

export function ProfilePage() {
  const { user } = useSession();

  return (
    <PageContainer>
      <PageHeader title="Tu Perfil" />
      <ProfileCard user={user!} />
    </PageContainer>
  );
}
