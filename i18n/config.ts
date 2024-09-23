export type Locale = (typeof locales)[number];

export const locales = ["mn", "en", "kr"] as const;
export const defaultLocale: Locale = "mn";
