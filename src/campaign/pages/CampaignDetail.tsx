import { useParams, Navigate } from "react-router";
import { PageContainer } from "@/components/page/PageContainer";
import { useCampaign } from "../hooks/queries/useCampaign";
import { Loading } from "@/components/Loading";
import { CampaignBasicInfo } from "../components/CampaignBasicInfo";
import { CampaignSettings } from "../components/CampaignSettings";
import { CampaignPlayers } from "../components/CampaignPlayers";

export default function CampaignDetail() {
  const { id } = useParams<{ id: string }>();

  if (!id) return <Navigate to="/creador-historias" />;

  const { data: campaign, isLoading, error } = useCampaign(id);

  if (isLoading) return <Loading fullScreen />;

  if (!campaign || error) return null; //TODO: Replace with 404 page

  return (
    <PageContainer>
      <div className="mt-6 grid grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="col-span-3">
          <CampaignBasicInfo campaign={campaign} />
        </div>
        <div className="col-span-2">
          <CampaignSettings campaign={campaign} />
        </div>
        <div className="col-span-1">
          <CampaignPlayers campaign={campaign} />
        </div>
      </div>
    </PageContainer>
  );
}
