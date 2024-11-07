import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

/**
 * Auth router
 */
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "TILL",
      credentials: {
        username: { label: "Name", type: "text", placeholder: "name" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const staticUsers = [
          {
            id: "1",
            username: "managerUser",
            password: "password",
            role: "manager",
          },
          {
            id: "2",
            username: "kasirUser",
            password: "password",
            role: "kasir",
          },
          {
            id: "3",
            username: "financeUser",
            password: "password",
            role: "finance",
          },
          {
            id: "4",
            username: "adminUser",
            password: "password",
            role: "admin",
          },
        ];

        // Find the user by name and password
        const user = staticUsers.find(
          (u) =>
            u.username === credentials?.username &&
            u.password === credentials?.password
        );

        if (user) {
          // Return the user object with role if found
          console.log("Static user logged in:", user);
          return {
            id: user.id,
            name: user.username,
            role: user.role,
          };
        } else {
          console.error("Invalid credentials");
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.id = token.id;
        session.user.id = token.id;
        session.user.role = token.role;
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
