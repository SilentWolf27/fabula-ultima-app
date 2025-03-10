import { LoginForm } from "../components/LoginForm";

export default function Login() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <section className="bg-white rounded-lg p-8 shadow-lg border border-indigo-200">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 font-serif">
              Fabula Ultima
            </h1>
            <p className="mt-2 text-gray-600">
              Ingresa tus credenciales para acceder a tu cuenta
            </p>
          </div>

          <LoginForm />
        </section>

        <article className="mt-8 text-center text-gray-500 text-xs font-medium">
          ✨ Impulsado por magia antigua y tecnología moderna ⚔️
        </article>
      </div>
    </main>
  );
}
