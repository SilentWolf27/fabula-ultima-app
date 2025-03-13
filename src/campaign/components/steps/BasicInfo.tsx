import type { UseFormRegister, FieldErrors } from "react-hook-form";
import { CreateCampaignValues } from "../../schemas/create";

interface Props {
  register: UseFormRegister<CreateCampaignValues>;
  errors: FieldErrors<CreateCampaignValues>;
}

export function BasicInfo({ register, errors }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="relative">
          <input
            type="text"
            {...register("name")}
            placeholder="Escribe el nombre de la campaña"
            className="peer w-full appearance-none border-0 border-b-2 border-gray-300 placeholder:text-transparent px-0 py-2 text-gray-900 focus:border-indigo-600 outline-none"
            autoComplete="off"
          />
          <label
            htmlFor="name"
            className="absolute left-0 top-3 -z-10 origin-[0] -translate-y-6 scale-85 transform text-gray-800 duration-300 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-85 peer-focus:text-indigo-600">
            Nombre de la campaña
          </label>
        </div>
        {errors.name && (
          <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <div className="relative">
          <textarea
            {...register("description")}
            placeholder="Describe tu campaña"
            className="peer w-full appearance-none border-0 border-b-2 border-gray-300 placeholder:text-transparent px-0 py-2 text-gray-900 focus:border-indigo-600 outline-none resize-none field-sizing-content"
          />
          <label
            htmlFor="description"
            className="absolute left-0 top-3 -z-10 origin-[0] -translate-y-6 scale-85 transform text-gray-800 duration-300 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-85 peer-focus:text-indigo-600">
            Describe tu campaña
          </label>
        </div>
        {errors.description && (
          <p className="mt-2 text-sm text-red-500">
            {errors.description.message}
          </p>
        )}
      </div>
    </div>
  );
}
