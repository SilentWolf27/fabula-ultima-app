import { useMultiStep } from "../../hooks/useMultiStep";
import { Step } from "../../components/multi-step/types";
import { MultiStepFormHeader } from "../../components/multi-step/MultiStepFormHeader";
import { createCampaignSchema, CreateCampaignValues } from "../schemas/create";
import { BasicInfo } from "./steps/BasicInfo";
import { Settings } from "./steps/Settings";
import { createCampaign } from "../api/create";
import { useNavigate } from "react-router";

const steps: Step[] = [
  {
    id: "basic",
    title: "Información Básica",
    fields: ["name", "description", "cover"],
  },
  {
    id: "settings",
    title: "Opciones",
    fields: [
      "settings.initialLevel",
      "settings.maxLevel",
      "settings.maxPlayers",
      "settings.xpInitial",
      "settings.initialZenit",
      "settings.initialFabulaPoints",
    ],
  },
];

const defaultValues: CreateCampaignValues = {
  name: "",
  description: "",
  settings: {
    initialLevel: 3,
    maxLevel: 100,
    maxPlayers: 6,
    xpInitial: 0,
    initialZenit: 500,
    initialFabulaPoints: 2,
    characterCreation: "default_points",
  },
};

export function CreateCampaignForm() {
  const navigate = useNavigate();

  const {
    currentStep,
    currentStepId,
    steps: formSteps,
    isFirstStep,
    isLastStep,
    next,
    back,
    handleSubmit,
    register,
    setError,
    formState,
  } = useMultiStep<CreateCampaignValues>({
    steps,
    schema: createCampaignSchema,
    defaultValues,
  });

  const onSubmit = async (data: CreateCampaignValues) => {
    const { error, success } = await createCampaign(data);

    if (error) {
      setError("root.serverError", { message: error.message });
      return;
    }

    if (success) navigate("/creador-historias");
  };

  const handleNext = async (e: React.MouseEvent) => {
    e.preventDefault();
    next();
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <MultiStepFormHeader steps={formSteps} currentStep={currentStep} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 mt-8">
        {currentStepId === "basic" && (
          <BasicInfo register={register} errors={formState.errors} />
        )}
        {currentStepId === "settings" && (
          <Settings register={register} errors={formState.errors} />
        )}

        <div className="flex justify-between pt-8 border-t border-gray-200">
          <button
            type="button"
            onClick={back}
            disabled={isFirstStep}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed">
            Anterior
          </button>

          {isLastStep ? (
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Completar
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Siguiente
            </button>
          )}
        </div>

        {formState.errors.root?.serverError && (
          <p className="mt-2 text-sm text-red-500 bg-red-100 p-2 rounded-md border border-red-200">
            {formState.errors.root.serverError.message}
          </p>
        )}
      </form>
    </div>
  );
}
