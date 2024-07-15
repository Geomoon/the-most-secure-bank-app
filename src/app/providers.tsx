"use client";

import { AuthProvider } from "@/providers/authProvider";

export function Providers({ children }: any) {
  return <AuthProvider>{children}</AuthProvider>;
}
