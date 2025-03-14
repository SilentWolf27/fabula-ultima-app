import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CampaignFormValues } from "../../schemas/form";

interface Props {
  register: UseFormRegister<CampaignFormValues>;
  errors: FieldErrors<CampaignFormValues>;
}

export function Settings({ register, errors }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="relative">
            <input
              type="number"
              {...register("settings.initialLevel", { valueAsNumber: true })}
              placeholder="3"
              className="peer w-full appearance-none border-0 border-b-2 border-gray-300 placeholder:text-transparent px-0 py-2 text-gray-900 focus:border-indigo-600 outline-none"
            />
            <label className="absolute left-0 top-3 -z-10 origin-[0] -translate-y-6 scale-85 transform text-gray-800 duration-300 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-85 peer-focus:text-indigo-600">
              Nivel Inicial
            </label>
          </div>
          {errors.settings?.initialLevel && (
            <p className="mt-2 text-sm text-red-500">
              {errors.settings.initialLevel.message}
            </p>
          )}
        </div>

        <div>
          <div className="relative">
            <input
              type="number"
              {...register("settings.maxLevel", { valueAsNumber: true })}
              placeholder="100"
              className="peer w-full appearance-none border-0 border-b-2 border-gray-300 placeholder:text-transparent px-0 py-2 text-gray-900 focus:border-indigo-600 outline-none"
            />
            <label className="absolute left-0 top-3 -z-10 origin-[0] -translate-y-6 scale-85 transform text-gray-800 duration-300 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-85 peer-focus:text-indigo-600">
              Nivel Máximo
            </label>
          </div>
          {errors.settings?.maxLevel && (
            <p className="mt-2 text-sm text-red-500">
              {errors.settings.maxLevel.message}
            </p>
          )}
        </div>

        <div>
          <div className="relative">
            <input
              type="number"
              {...register("settings.maxPlayers", { valueAsNumber: true })}
              placeholder="10"
              className="peer w-full appearance-none border-0 border-b-2 border-gray-300 placeholder:text-transparent px-0 py-2 text-gray-900 focus:border-indigo-600 outline-none"
            />
            <label className="absolute left-0 top-3 -z-10 origin-[0] -translate-y-6 scale-85 transform text-gray-800 duration-300 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-85 peer-focus:text-indigo-600">
              Máximo de Jugadores
            </label>
          </div>
          {errors.settings?.maxPlayers && (
            <p className="mt-2 text-sm text-red-500">
              {errors.settings.maxPlayers.message}
            </p>
          )}
        </div>

        <div>
          <div className="relative">
            <input
              type="number"
              {...register("settings.xpInitial", { valueAsNumber: true })}
              placeholder="0"
              className="peer w-full appearance-none border-0 border-b-2 border-gray-300 placeholder:text-transparent px-0 py-2 text-gray-900 focus:border-indigo-600 outline-none"
            />
            <label className="absolute left-0 top-3 -z-10 origin-[0] -translate-y-6 scale-85 transform text-gray-800 duration-300 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-85 peer-focus:text-indigo-600">
              XP Inicial
            </label>
          </div>
          {errors.settings?.xpInitial && (
            <p className="mt-2 text-sm text-red-500">
              {errors.settings.xpInitial.message}
            </p>
          )}
        </div>

        <div>
          <div className="relative">
            <input
              type="number"
              {...register("settings.initialZenit", { valueAsNumber: true })}
              placeholder="500"
              className="peer w-full appearance-none border-0 border-b-2 border-gray-300 placeholder:text-transparent px-0 py-2 text-gray-900 focus:border-indigo-600 outline-none"
            />
            <label className="absolute left-0 top-3 -z-10 origin-[0] -translate-y-6 scale-85 transform text-gray-800 duration-300 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-85 peer-focus:text-indigo-600">
              Zenit Inicial
            </label>
          </div>
          {errors.settings?.initialZenit && (
            <p className="mt-2 text-sm text-red-500">
              {errors.settings.initialZenit.message}
            </p>
          )}
        </div>

        <div>
          <div className="relative">
            <input
              type="number"
              {...register("settings.initialFabulaPoints", {
                valueAsNumber: true,
              })}
              placeholder="2"
              className="peer w-full appearance-none border-0 border-b-2 border-gray-300 placeholder:text-transparent px-0 py-2 text-gray-900 focus:border-indigo-600 outline-none"
            />
            <label className="absolute left-0 top-3 -z-10 origin-[0] -translate-y-6 scale-85 transform text-gray-800 duration-300 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-85 peer-focus:text-indigo-600">
              Puntos de Fábula Iniciales
            </label>
          </div>
          {errors.settings?.initialFabulaPoints && (
            <p className="mt-2 text-sm text-red-500">
              {errors.settings.initialFabulaPoints.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
