import { createContext, useContext, useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { createClient } from "../../supabase/clients/browser";

interface SessionContextValue {
  session: Session | null;
  loading: boolean;
  isAuthenticated: boolean;
}

const defaultValue: SessionContextValue = {
  session: null,
  loading: true,
  isAuthenticated: false,
};

export const SessionContext = createContext<SessionContextValue>(defaultValue);

export function useSession() {
  const context = useContext(SessionContext);
  if (!context)
    throw new Error("useSession must be used within a SessionProvider");

  return context;
}

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const value: SessionContextValue = {
    session,
    loading,
    isAuthenticated: !!session,
  };

  console.log(value);

  return <SessionContext value={value}>{children}</SessionContext>;
}
