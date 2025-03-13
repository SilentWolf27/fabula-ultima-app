import {
  Campaign,
  StoryStatusColors,
  StatusLabel,
} from "../interfaces/campaign";
import { Link, useNavigate } from "react-router";
import { useDeleteCampaign } from "../hooks/mutations/useDeleteCampaign";

interface Props {
  campaign: Campaign;
}

export function CampaignBasicInfo({ campaign }: Props) {
  const statusColors = StoryStatusColors[campaign.status];
  const navigate = useNavigate();

  const { mutateAsync: deleteCampaign, isPending: isDeleting } =
    useDeleteCampaign({
      onSuccess: () => {
        navigate("/creador-historias");
      },
      onError: (error) => {},
    });

  const handleDelete = async () => {
    try {
      await deleteCampaign(campaign.id);
    } catch (error) {}
  };

  const ActionButtons = ({ isOverlay = false }: { isOverlay?: boolean }) => (
    <div className="flex items-center gap-2">
      <Link
        to={`/creador-historias/${campaign.id}/editar`}
        className={`p-1.5 rounded-lg transition-colors ${
          isOverlay
            ? "bg-white/10 hover:bg-white/20"
            : "bg-gray-100 hover:bg-gray-200"
        }`}>
        <svg
          className={`w-4 h-4 ${isOverlay ? "text-white" : "text-gray-600"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </Link>
      <button
        onClick={handleDelete}
        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
          isOverlay
            ? "bg-white/10 hover:bg-white/20"
            : "bg-gray-100 hover:bg-gray-200"
        }`}>
        <svg
          className={`w-4 h-4 ${isOverlay ? "text-white" : "text-gray-600"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );

  const StatusBadge = ({ isOverlay = false }: { isOverlay?: boolean }) => (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        statusColors.bg
      } ${statusColors.text} shadow-sm ${isOverlay ? "mt-1.5" : ""}`}>
      {StatusLabel[campaign.status]}
    </span>
  );

  return (
    <>
      <div className="bg-white shadow-sm rounded-xl overflow-hidden">
        {campaign.cover_url ? (
          <div className="relative h-40">
            <img
              src={campaign.cover_url}
              alt={campaign.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medieval text-white">
                  {campaign.name}
                </h2>
                <ActionButtons isOverlay />
              </div>
              <StatusBadge isOverlay />
            </div>
          </div>
        ) : (
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-medieval text-gray-900">
                {campaign.name}
              </h2>
              <ActionButtons />
            </div>
            <StatusBadge />
          </div>
        )}

        {campaign.description && (
          <div className="p-4 bg-indigo-50/50">
            <p className="text-gray-600 whitespace-pre-wrap font-body text-sm">
              {campaign.description}
            </p>
          </div>
        )}

        <div className="p-4 flex items-center justify-between text-xs text-gray-500 font-body">
          <span>
            Creada el {new Date(campaign.created_at).toLocaleDateString()}
          </span>
          {campaign.is_public ? (
            <span className="inline-flex items-center text-green-600 bg-green-50/80 px-2.5 py-0.5 rounded-full text-xs">
              <svg
                className="w-3 h-3 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              Pública
            </span>
          ) : (
            <span className="inline-flex items-center text-red-600 bg-red-50/80 px-2.5 py-0.5 rounded-full text-xs">
              <svg
                className="w-3 h-3 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Privada
            </span>
          )}
        </div>
      </div>
    </>
  );
}
