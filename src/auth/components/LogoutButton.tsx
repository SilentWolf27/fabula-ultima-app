import { useNavigate } from "react-router";
import { createClient } from "../../supabase/clients/browser";
import { useState } from "react";

export default function LogoutButton() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      const supabase = createClient();
      await supabase.auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      disabled={isLoading}
      className="w-full flex items-center gap-2 px-2 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer text-left group disabled:opacity-50 rounded-md">
      {isLoading ? "Saliendo..." : "Cerrar sesión"}
      <svg
        className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    </button>
  );
}
