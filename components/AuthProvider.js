"use client";

import { SessionProvider } from "next-auth/react";

export const AuthProvider = async ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
