import { useParams, useNavigate } from "react-router";
import { useCampaign } from "../hooks/queries/useCampaign";
import { CampaignForm } from "../components/CampaignForm";
import { Loading } from "@/components/Loading";
import { useUpdateCampaign } from "../hooks/mutations/useUpdateCampaign";
import { CampaignFormValues } from "../schemas/form";
import { PageContainer } from "@/components/page/PageContainer";
import { PageHeader } from "@/components/page/PageHeader";

export default function EditCampaign() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: campaign, isLoading } = useCampaign(id!);

  const {
    mutate: updateCampaign,
    isPending,
    error,
  } = useUpdateCampaign({
    onSuccess: () => navigate("/creador-historias"),
  });

  const handleSubmit = (data: CampaignFormValues) => {
    if (!campaign) return;

    updateCampaign({
      ...campaign,
      name: data.name,
      description: data.description || null,
      settings: {
        initial_level: data.settings.initialLevel,
        max_level: data.settings.maxLevel,
        max_players: data.settings.maxPlayers,
        xp_initial: data.settings.xpInitial,
        initial_zenit: data.settings.initialZenit,
        initial_fabula_points: data.settings.initialFabulaPoints,
        character_creation: data.settings.characterCreation,
      },
    });
  };

  if (isLoading) return <Loading />;

  if (!campaign) return null;

  const initialValues: CampaignFormValues = {
    name: campaign.name,
    description: campaign.description || "",
    settings: {
      initialLevel: campaign.settings.initial_level,
      maxLevel: campaign.settings.max_level,
      maxPlayers: campaign.settings.max_players,
      xpInitial: campaign.settings.xp_initial,
      initialZenit: campaign.settings.initial_zenit,
      initialFabulaPoints: campaign.settings.initial_fabula_points,
      characterCreation: campaign.settings.character_creation,
    },
  };

  return (
    <PageContainer>
      <PageHeader title="Editar Historia" backTo="/creador-historias" />
      <CampaignForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        isSubmitting={isPending}
        error={error?.message}
        submitLabel="Guardar"
      />
    </PageContainer>
  );
}
