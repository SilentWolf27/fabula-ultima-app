interface Step {
  id: string;
  title: string;
}

interface Props {
  steps: Step[];
  currentStep: number;
}

export function MultiStepFormHeader({ steps, currentStep }: Props) {
  return (
    <nav aria-label="Progress" className="w-full font-body">
      <ol className="flex items-start justify-between gap-3">
        {steps.map((step, index) => (
          <>
            <li key={step.id} className="flex items-center flex-col gap-2">
              <span
                className={`
                  flex h-10 w-10 items-center justify-center rounded-full
                  transition-colors duration-200
                  ${
                    index < currentStep
                      ? "bg-indigo-600 ring-3 ring-indigo-100"
                      : index === currentStep
                      ? "bg-white border-2 border-indigo-600"
                      : "bg-white border-2 border-gray-300"
                  }
                `}>
                {index < currentStep ? (
                  <svg
                    className="h-6 w-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <span
                    className={`text-sm font-semibold ${
                      index === currentStep
                        ? "text-indigo-600"
                        : "text-gray-500"
                    }`}>
                    {index + 1}
                  </span>
                )}
              </span>
              <p
                className={`
                    text-sm font-medium text-center max-w-20
                    text-pretty
                    transition-colors duration-200
                    ${
                      index <= currentStep ? "text-indigo-600" : "text-gray-500"
                    }
                  `}>
                {step.title}
              </p>
            </li>
            {index < steps.length - 1 && (
              <div
                className={`w-full h-[2px] mt-5 bg-gray-200 transition-colors duration-200 ${
                  index < currentStep ? "bg-indigo-600" : "bg-gray-200"
                }`}></div>
            )}
          </>
        ))}
      </ol>
    </nav>
  );
}
