import { LoginForm } from "../components/LoginForm";

export default function Login() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-serif">
      <div className="w-full max-w-md">
        <section className="bg-white rounded-lg p-8 shadow-lg border border-indigo-200">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-medieval font-semibold text-gray-900 mb-2 text-balance">
              Fabula Ultima DnD App
            </h1>
            <p className="mt-2 text-gray-700 font-fantasy text-sm">
              Ingresa tus credenciales para acceder a tu cuenta
            </p>
          </header>

          <LoginForm />
        </section>

        <footer className="mt-8 text-center text-gray-700 text-sm font-fantasy">
          ✨ Impulsado por magia antigua y tecnología moderna 🌟
        </footer>
      </div>
    </main>
  );
}
