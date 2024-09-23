// types/next-auth.d.ts
import { DefaultSession } from "next-auth";

declare module "next-auth" {
	interface Session {
		id: string;
		accessToken?: string;
		user: {
			id: string;
		} & DefaultSession["user"];
	}

	interface User {
		id: string;
		accessToken?: string; // If you are storing accessToken on the user object
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		id: string;
		accessToken?: string;
	}
}
