import type { Session, User } from "@supabase/supabase-js";

export interface ProfileClaims {
  role: 'player' | 'master';
  display_name: string | null;
  avatar_url: string | null;
  language: string;
  profile_id: number;
}

export interface UserWithProfile extends User {
  profile: ProfileClaims | null;
}

export interface SessionContextValue {
  session: Session | null;
  user: UserWithProfile | null;
  loading: boolean;
  isAuthenticated: boolean;
} 