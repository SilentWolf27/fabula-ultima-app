import { useMultiStep } from "../../hooks/useMultiStep";
import { Step } from "../../components/multi-step/types";
import { MultiStepFormHeader } from "../../components/multi-step/MultiStepFormHeader";
import { createCampaignSchema, CreateCampaignValues } from "../schemas/create";
import { BasicInfo } from "./steps/BasicInfo";

const steps: Step[] = [
  {
    id: "basic",
    title: "Información Básica",
    fields: ["name", "description", "cover"],
  },
  {
    id: "settings",
    title: "Configuración",
    fields: ["target", "budget"],
  },
];

export function CreateCampaignForm() {
  const {
    currentStep,
    steps: formSteps,
    isFirstStep,
    isLastStep,
    next,
    back,
    handleSubmit,
    register,
    formState,
  } = useMultiStep<CreateCampaignValues>({
    steps,
    schema: createCampaignSchema,
  });

  const onSubmit = (data: CreateCampaignValues) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <MultiStepFormHeader steps={formSteps} currentStep={currentStep} />

      {/* Step Content */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-8">
        <BasicInfo register={register} errors={formState.errors} />
      </form>

      {/* Navigation */}
      <div className="flex justify-between pt-8 border-t border-gray-200">
        <button
          type="button"
          onClick={back}
          disabled={isFirstStep}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed">
          Anterior
        </button>

        <button
          type="button"
          onClick={next}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed">
          {isLastStep ? "Completar" : "Siguiente"}
        </button>
      </div>
    </div>
  );
}
