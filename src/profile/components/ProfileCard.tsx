import type { UserWithProfile } from "../../session/interfaces/session";

interface Props {
  user: UserWithProfile;
}

export function ProfileCard({ user }: Props) {
  const { profile } = user;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="rounded-3xl border-2 border-indigo-200 bg-white shadow-md">
        {/* Header con Avatar y Nombre */}

        <div className="flex flex-col items-center mt-8">
          <div className="relative mb-4">
            {profile?.avatar_url ? (
              <img
                className="h-28 w-28 rounded-full object-contain ring-2 ring-indigo-50 shadow-lg"
                src={profile.avatar_url}
                alt={profile.display_name || "Avatar"}
              />
            ) : (
              <div className="h-28 w-28 rounded-full bg-indigo-50 ring-2 ring-indigo-200 shadow-lg flex items-center justify-center">
                <span className="text-4xl text-indigo-400 font-light">
                  {user.email?.[0].toUpperCase()}
                </span>
              </div>
            )}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-indigo-600 ring-2 ring-indigo-500 text-white capitalize shadow-lg">
                {profile?.role || "Sin rol"}
              </span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-1 text-balance">
            {profile?.display_name || "Sin nombre"}
          </h2>
          <p className="text-gray-600 text-pretty text-base">{user.email}</p>
        </div>

        {/* Detalles del Perfil */}
        <div className="px-8 py-8 mt-4 flex flex-col gap-4">
          <div className="group p-4 rounded-2xl border border-indigo-200 transition-all duration-200 hover:border-indigo-400 hover:bg-indigo-50">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-indigo-600 uppercase tracking-wider mb-1">
                Idioma preferido
              </span>
              <span className="text-lg font-semibold text-gray-900 uppercase">
                {profile?.language || "No definido"}
              </span>
            </div>
          </div>

          <div className="group p-4 rounded-2xl border border-indigo-200 transition-all duration-200 hover:border-indigo-400 hover:bg-indigo-50">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-indigo-600 uppercase tracking-wider mb-1">
                ID del Perfil
              </span>
              <span className="text-base font-semibold text-gray-900">
                {user.id || "---"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
