import type { Metadata } from "next";
import "./globals.css";
import {
  RootProvider,
  SessionProvider,
  TanstackQueryProvider,
} from "@/providers";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ValidateProvider } from "@/providers/ValidateProvider";

export const metadata: Metadata = {
  title: "TILL",
  description: "TILL",
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/apple-touch-icon.png",
      },
    ],
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
