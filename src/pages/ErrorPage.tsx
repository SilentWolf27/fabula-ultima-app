import { useRouteError, isRouteErrorResponse } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Oops!</h1>
        <p className="mt-2 text-lg text-gray-600">
          {isRouteErrorResponse(error)
            ? `${error.status} - ${error.statusText}`
            : "Sorry, an unexpected error has occurred."}
        </p>
      </div>
    </div>
  );
}
