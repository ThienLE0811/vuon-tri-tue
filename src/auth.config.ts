import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    // The whole site is browsable by both guests and logged-in users
    // (lessons, exercises, leaderboard). Pages and server actions decide
    // individually what requires a session (saving progress/scores),
    // so the proxy no longer redirects unauthenticated visitors.
    authorized() {
      return true;
    },
  },
} satisfies NextAuthConfig;
