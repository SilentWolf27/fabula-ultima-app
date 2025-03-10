import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useState } from "react";

interface LoginFormData {
  email: string;
  password: string;
}

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      console.log("Login data:", data);
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
      <fieldset>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              aria-required="true"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 border border-indigo-200 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-900 placeholder-gray-400"
              placeholder="aventurero@ejemplo.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              aria-required="true"
              {...register("password", { required: true })}
              className="w-full px-4 py-2 border border-indigo-200 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-900 placeholder-gray-400"
              placeholder="••••••••"
            />
          </div>
        </div>
      </fieldset>

      <nav className="flex items-center justify-end">
        <Link
          to="/forgot-password"
          className="text-sm text-gray-600 hover:text-gray-900 underline decoration-gray-300 underline-offset-2">
          ¿Olvidaste tu contraseña?
        </Link>
      </nav>

      <button
        type="submit"
        disabled={isLoading}
        aria-busy={isLoading}
        className="w-full py-3 px-4 border border-transparent rounded-md text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-sm cursor-pointer">
        {isLoading ? "Ingresando al reino..." : "Comenzar Aventura"}
      </button>

      <nav className="mt-6 text-center text-sm text-gray-600">
        <p>
          ¿Aún no tienes una cuenta?{" "}
          <Link
            to="/register"
            className="text-gray-900 hover:text-gray-700 underline decoration-gray-300 underline-offset-2 font-medium">
            Únete a la aventura
          </Link>
        </p>
      </nav>
    </form>
  );
}
