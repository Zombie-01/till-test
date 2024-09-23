import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

/**
 * Auth router
 */
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "KCH CRM",
      credentials: {
        name: { label: "Name", type: "text", placeholder: "name" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(`${process.env.NEXTAUTH_URL}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          });

          if (!res.ok) {
            console.error("Login failed to fetch:", res.status, res.statusText);
            return null;
          }

          const { data, errors } = await res.json();

          if (errors) {
            console.error("Login errors:", errors);
            return null;
          }

          const user = data?.user;

          if (user) {
            console.log("Login user logged in:", user);
            return {
              id: user.id,
              name: user.firstName,
              email: user.email,
              accessToken: data.accessToken,
            };
          } else {
            console.error("Login no user data returned:", data);
            return null;
          }
        } catch (error) {
          console.error("Login error in authorize function:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      // console.log(session, token);
      if (token) {
        session.id = token.id as string;
        session.accessToken = token.accessToken as string;
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
