"use client"

import { SessionProvider } from "next-auth/react"

export const AuthProvider = async ({ children}) => {
    <SessionProvider>
        {children}
    </SessionProvider>
}
    