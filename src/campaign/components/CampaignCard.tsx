import { Link } from "react-router";
import {
  Campaign,
  StoryStatusColors,
  StatusLabel,
} from "../interfaces/campaign";

interface CampaignCardProps {
  campaign: Campaign;
}

export function CampaignCard({ campaign }: CampaignCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg overflow-hidden transform transition-all duration-200 hover:scale-[1.02]">
      <div className="relative h-40 bg-gray-50">
        {campaign.cover_url ? (
          <img
            src={campaign.cover_url}
            alt={campaign.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="p-4 font-body">
        <div className="flex items-start justify-between mb-2 min-h-[40px]">
          <p className="text-sm text-gray-900 font-fantasy line-clamp-2 pr-2">
            {campaign.name}
          </p>
          <div
            className={`px-2 py-0.5 rounded-full text-xs font-medium shrink-0 ${
              StoryStatusColors[campaign.status].bg
            } ${StoryStatusColors[campaign.status].text} border ${
              StoryStatusColors[campaign.status].border
            }`}>
            {StatusLabel[campaign.status]}
          </div>
        </div>

        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
          {campaign.description || "Sin descripción"}
        </p>

        <div className="flex items-center justify-end pt-3 border-t border-gray-100">
          <Link
            to={`/creador-historias/${campaign.id}`}
            className="text-xs font-medium text-indigo-600 hover:text-indigo-700">
            Ver detalles →
          </Link>
        </div>
      </div>
    </div>
  );
}
