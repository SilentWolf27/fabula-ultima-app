import type { UseFormRegister, FieldErrors } from "react-hook-form";
import { CreateCampaignValues } from "../../schemas/create";

interface Props {
  register: UseFormRegister<CreateCampaignValues>;
  errors: FieldErrors<CreateCampaignValues>;
}

export function BasicInfo({ register, errors }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
      <h3 className="text-lg font-medium">Información Básica</h3>

      <div className="space-y-4">
        {/* Nombre */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Descripción */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700">
            Descripción
          </label>
          <textarea
            id="description"
            rows={3}
            {...register("description")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">
              {errors.description.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
