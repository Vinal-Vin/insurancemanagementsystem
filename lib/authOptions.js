import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import db from "@/lib/db";

export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize({ email, password }, req) {
        const res = await fetch("http://localhost:3000/api/localauth", {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
          const { user } = await res.json();
          return user;
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    //maxAge: 1 * 24 * 60 * 60,
    maxAge: 1 * 60,
  },
  callbacks: {
    async signIn(props) {
      //   console.log("SIGNIN CALLBACK", props);
      return true;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};
