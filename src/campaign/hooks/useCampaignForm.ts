import { useMultiStep } from "../../hooks/useMultiStep";
import { steps } from "../components/steps/steps";
import {
  CampaignFormValues,
  campaignFormSchema,
  defaultValues,
} from "../schemas/form";

interface Params {
  initialValues?: CampaignFormValues;
}

export function useCampaignForm({ initialValues }: Params) {
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
  } = useMultiStep<CampaignFormValues>({
    steps,
    schema: campaignFormSchema,
    defaultValues: initialValues || defaultValues,
  });

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    next();
  };

  return {
    currentStep,
    currentStepId,
    formSteps,
    isFirstStep,
    isLastStep,
    back,
    handleNext,
    handleSubmit,
    register,
    setError,
    formState,
  };
}
