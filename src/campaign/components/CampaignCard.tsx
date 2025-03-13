import { Link } from "react-router";
import {
  Campaign,
  StoryStatus,
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

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-medium text-gray-900">
            {campaign.name}
          </h3>
          <div
            className={`px-2 py-0.5 rounded-full text-xs font-medium ${
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

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          {campaign.is_public && (
            <div className="flex items-center text-xs text-gray-500">
              <svg
                className="w-3.5 h-3.5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              Pública
            </div>
          )}
          <Link
            to={`/campaigns/${campaign.id}`}
            className="text-xs font-medium text-indigo-600 hover:text-indigo-700">
            Ver detalles →
          </Link>
        </div>
      </div>
    </div>
  );
}
