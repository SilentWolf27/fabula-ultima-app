import { PageContainer } from "@/components/page/PageContainer";
import { PageHeader } from "@/components/page/PageHeader";
import { CreateCampaignForm } from "../components/CreateCampaignForm";

export default function CreateCampaign() {
  return (
    <PageContainer>
      <PageHeader title="Crear Historia" />
      <CreateCampaignForm />
    </PageContainer>
  );
}
