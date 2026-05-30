"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { authClient } from "@/lib/auth-client"; // Your client config
import type { Session } from "@/lib/auth"; // Import inferred type from server

// 1. Define the Context interface shape
interface SessionContextType {
  session: Session | null;
  isPending: boolean;
  refetch: () => Promise<void>;
}

interface ProviderProps {
  children: React.ReactNode;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({ children }: ProviderProps) {
  const [session, setSession] = useState<Session | null>(null);
  const [isPending, setIsPending] = useState(true);

  const fetchSession = async () => {
    setIsPending(true);
    try {
      const { data } = await authClient.getSession();
      setSession(data);
    } catch (error) {
      console.error("Failed to fetch session", error);
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    fetchSession();
  }, []);

  return (
    <SessionContext.Provider
      value={{ session, isPending, refetch: fetchSession }}
    >
      {children}
    </SessionContext.Provider>
  );
}

// 2. Custom hook with strong safety checks
export function useSessionContext() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSessionContext must be used within a SessionProvider");
  }
  return context;
}
