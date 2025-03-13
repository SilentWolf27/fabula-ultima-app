import { Link } from "react-router";
import { PageContainer } from "@/components/page/PageContainer";
import { PageHeader } from "@/components/page/PageHeader";
import { useCampaigns } from "../hooks/queries/useCampaigns";

export default function CampaignBuilder() {
  const { data: campaigns, isLoading, error } = useCampaigns();

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar las campañas</div>;

  return (
    <PageContainer>
      <PageHeader title="Creador de campañas">
        <Link
          to="crear"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Nueva campaña
        </Link>
      </PageHeader>
    </PageContainer>
  );
}
