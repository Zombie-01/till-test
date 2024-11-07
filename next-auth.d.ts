// next-auth.d.ts
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      email: string;
      image: string;
      role: string; // Add role to Session
    };
  }

  interface User {
    id: string;
    username: string;
    email: string;
    image: string;
    role: string; // Add role to User
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string; // Add role to JWT
  }
}
