import { Link } from "react-router";
import { PageContainer } from "@/components/page/PageContainer";
import { PageHeader } from "@/components/page/PageHeader";
import { useCampaigns } from "../hooks/queries/useCampaigns";
import { CampaignCard } from "../components/CampaignCard";
import { Campaign } from "../interfaces/campaign";

export default function CampaignBuilder() {
  const { data: campaigns, isLoading, error } = useCampaigns();

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar las historias</div>;

  return (
    <PageContainer>
      <PageHeader title="Creador de historias">
        <Link
          to="crear"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Nueva historia
        </Link>
      </PageHeader>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {campaigns?.data?.map((campaign: Campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </PageContainer>
  );
}
