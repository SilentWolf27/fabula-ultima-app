import { createClient } from "../../supabase/clients/browser";
import { useNavigate } from "react-router";
import { LoginFormData } from "../schemas/login";

export function useAuth() {
  const supabase = createClient();
  const navigate = useNavigate();

  const login = async ({ email, password }: LoginFormData) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    navigate("/");
  };

  return { login };
}
