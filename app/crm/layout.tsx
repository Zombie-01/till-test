"use client";

import { Layout } from "@/components/layout";

/**
 * Authenticated pages layout
 */
export default function AuthPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}
