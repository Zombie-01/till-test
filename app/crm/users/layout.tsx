"use client";

import { ListProvider } from "@/components";

/**
 * Users layout
 */
export default function UsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ListProvider>{children}</ListProvider>;
}
