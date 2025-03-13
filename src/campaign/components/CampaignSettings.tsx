import { Campaign } from "../interfaces/campaign";

interface Props {
  campaign: Campaign;
}

export function CampaignSettings({ campaign }: Props) {
  const { settings } = campaign;

  return (
    <div className="bg-white shadow-sm rounded-xl overflow-hidden h-full">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-8">
          Configuración
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <div className="bg-indigo-50/50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-indigo-900 mb-2">
                Niveles
              </h4>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Nivel inicial</span>
                  <span className="font-medium text-gray-900">
                    {settings.initial_level}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Nivel máximo</span>
                  <span className="font-medium text-gray-900">
                    {settings.max_level}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50/50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-indigo-900 mb-2">
                Jugadores
              </h4>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  Máximo de jugadores
                </span>
                <span className="font-medium text-gray-900">
                  {settings.max_players}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-indigo-50/50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-indigo-900 mb-2">
                Recursos Iniciales
              </h4>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">XP inicial</span>
                  <span className="font-medium text-gray-900">
                    {settings.xp_initial}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Zenit inicial</span>
                  <span className="font-medium text-gray-900">
                    {settings.initial_zenit}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Fábula inicial</span>
                  <span className="font-medium text-gray-900">
                    {settings.initial_fabula_points}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50/50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-indigo-900 mb-2">
                Creación de Personajes
              </h4>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Método</span>
                <span className="font-medium text-gray-900">
                  {settings.character_creation === "default_points"
                    ? "Puntos por defecto"
                    : "Tirar dados"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
