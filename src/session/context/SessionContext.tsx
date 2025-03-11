import { createContext, useContext, useEffect, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { createClient } from "../../supabase/clients/browser";

interface SessionContextValue {
  session: Session | null;
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
}

const defaultValue: SessionContextValue = {
  session: null,
  user: null,
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
      console.log(session);
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
    user: session?.user ?? null,
    loading,
    isAuthenticated: !!session,
  };

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}
