"use client";

import { ListProvider } from "@/components";

/**
 * Customer error history layout
 */
export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ListProvider>{children}</ListProvider>;
}
