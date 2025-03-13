import { Campaign } from "../interfaces/campaign";

interface Props {
  campaign: Campaign;
}

export function CampaignPlayers({ campaign }: Props) {
  return (
    <div className="bg-white shadow-sm rounded-xl overflow-hidden h-full">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-8">Jugadores</h3>
        <div className="text-sm text-gray-500">Próximamente...</div>
      </div>
    </div>
  );
}
