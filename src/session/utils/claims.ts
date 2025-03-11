import { Session } from "@supabase/supabase-js";
import { jwtDecode } from "jwt-decode";
import type { ProfileClaims } from "../interfaces/session";

export function getProfileFromSession(session: Session | null): ProfileClaims | null {
  if (!session) return null;

  try {
    const jwt = jwtDecode(session.access_token);
    return (jwt as any).profile || null;
  } catch (error) {
    console.error('Error decoding JWT:', error);
    return null;
  }
} 