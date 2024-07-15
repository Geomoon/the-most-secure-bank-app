"use client";

import { isLogged } from "@/service/authService";
import { redirect } from "next/navigation";

export default function Layout({ children }: any) {
  const authenticated = isLogged();

  if (!authenticated) {
    redirect("/auth");
  }

  return <>{children}</>;
}
