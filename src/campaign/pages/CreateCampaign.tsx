import { PageContainer } from "@/components/page/PageContainer";
import { PageHeader } from "@/components/page/PageHeader";
import { CampaignForm } from "../components/CampaignForm";
import { useNavigate } from "react-router";
import { useCreateCampaign } from "../hooks/mutations/useCreateCampaign";
import { CampaignFormValues } from "../schemas/form";

export default function CreateCampaign() {
  const navigate = useNavigate();
  const {
    mutate: createCampaign,
    isPending,
    error,
  } = useCreateCampaign({
    onSuccess: () => navigate("/creador-historias"),
  });

  const handleSubmit = (data: CampaignFormValues) => {
    createCampaign(data);
  };

  return (
    <PageContainer>
      <PageHeader title="Crear Historia" backTo="/creador-historias" />
      <CampaignForm
        onSubmit={handleSubmit}
        isSubmitting={isPending}
        error={error?.message}
        submitLabel="Crear"
      />
    </PageContainer>
  );
}
