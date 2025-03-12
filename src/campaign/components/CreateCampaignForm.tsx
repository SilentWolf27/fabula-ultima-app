import { useState } from "react";
import { MultiStepFormHeader } from "../../components/multi-step/MultiStepFormHeader";

const steps = [
  {
    id: "basic",
    title: "Información Básica",
  },
  {
    id: "settings",
    title: "Configuración",
  },
  {
    id: "media",
    title: "Multimedia",
  },
];

export function CreateCampaignForm() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="max-w-2xl mx-auto">
      <MultiStepFormHeader steps={steps} currentStep={currentStep} />

      {/* TODO: Step content */}
      <div className="mb-8">
        <p className="text-gray-500 text-center">
          Contenido del paso {currentStep + 1}
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-8 border-t border-gray-200">
        <button
          type="button"
          onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed">
          Anterior
        </button>

        <button
          type="button"
          onClick={() =>
            setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))
          }
          disabled={currentStep === steps.length - 1}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed">
          Siguiente
        </button>
      </div>
    </div>
  );
}
