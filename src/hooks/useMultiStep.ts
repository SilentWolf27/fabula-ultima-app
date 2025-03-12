import { useState } from "react";
import { Step } from "../components/multi-step/types";
import { useForm, FieldValues, DefaultValues, Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ZodSchema } from "zod";

interface UseMultiStepProps<T extends FieldValues> {
  steps: Step[];
  defaultValues?: DefaultValues<T>;
  schema: ZodSchema;
}

export function useMultiStep<T extends FieldValues>({
  steps,
  defaultValues = {} as DefaultValues<T>,
  schema,
}: UseMultiStepProps<T>) {
  const [currentStep, setCurrentStep] = useState(0);
  const { handleSubmit, register, formState, trigger, setError } = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  const validateStep = async () => {
    const currentStepFields = steps[currentStep].fields as Path<T>[];
    const isValid = await trigger(currentStepFields);
    return isValid;
  };

  const next = async () => {
    if (isLastStep) return;

    const isValid = await validateStep();
    if (!isValid) return;

    setCurrentStep((prev) => prev + 1);
  };

  const back = () => {
    if (isFirstStep) return;

    setCurrentStep((prev) => prev - 1);
  };

  const goTo = (stepIndex: number) => {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      setCurrentStep(stepIndex);
    }
  };

  return {
    currentStep,
    currentStepId: steps[currentStep].id,
    steps,
    isFirstStep,
    isLastStep,
    next,
    back,
    goTo,
    handleSubmit,
    register,
    setError,
    formState,
  };
}
