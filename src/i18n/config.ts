export type Locale = (typeof locales)[number];

export const locales = ["ko"] as const;

export const defaultLocale: Locale = "ko";
