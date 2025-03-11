import { createContext, useContext, useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { createClient } from "../../supabase/clients/browser";
import type { SessionContextValue, UserWithProfile } from "../interfaces/session";
import { getProfileFromSession } from "../utils/claims";

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
  const [user, setUser] = useState<UserWithProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const updateUser = (session: Session | null) => {
    if (!session) {
      setUser(null);
      return;
    }

    const profile = getProfileFromSession(session);
    setUser({
      ...session.user,
      profile,
    });
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      updateUser(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      updateUser(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const value: SessionContextValue = {
    session,
    user,
    loading,
    isAuthenticated: !!session,
  };

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}
