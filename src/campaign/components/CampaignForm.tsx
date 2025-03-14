import { MultiStepFormHeader } from "../../components/multi-step/MultiStepFormHeader";
import { BasicInfo } from "./steps/BasicInfo";
import { Settings } from "./steps/Settings";
import { useCampaignForm } from "../hooks/useCampaignForm";
import { CampaignFormValues } from "../schemas/form";

interface Props {
  initialValues?: CampaignFormValues;
  onSubmit: (data: CampaignFormValues) => void;
  isSubmitting?: boolean;
  submitLabel?: string;
  error?: string;
}

export function CampaignForm({
  initialValues,
  onSubmit,
  isSubmitting,
  submitLabel = "Completar",
  error,
}: Props) {
  const {
    currentStep,
    currentStepId,
    formSteps,
    isFirstStep,
    isLastStep,
    back,
    handleNext,
    handleSubmit,
    register,
    formState,
  } = useCampaignForm({
    initialValues,
  });

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
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
            Anterior
          </button>

          {isLastStep ? (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
              {isSubmitting ? "Guardando..." : submitLabel}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
              Siguiente
            </button>
          )}
        </div>

        {(error || formState.errors.root?.serverError) && (
          <p className="mt-2 text-sm text-red-500 bg-red-100 p-2 rounded-md border border-red-200">
            {error || formState.errors.root?.serverError?.message}
          </p>
        )}
      </form>
    </div>
  );
}
