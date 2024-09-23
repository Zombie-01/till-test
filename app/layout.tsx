import type { Metadata } from "next";
import "./globals.css";
import {
	RootProvider,
	SessionProvider,
	TanstackQueryProvider,
} from "@/providers";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const metadata: Metadata = {
	title: "CRM",
	description: "KCH CRM",
	icons: {
		icon: "/favicon.webp",
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<body>
				<TanstackQueryProvider>
					<SessionProvider>
						<NextIntlClientProvider locale={locale} messages={messages}>
							<RootProvider>{children}</RootProvider>
						</NextIntlClientProvider>
					</SessionProvider>
				</TanstackQueryProvider>
			</body>
		</html>
	);
}
