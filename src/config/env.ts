export const ENV = {
  GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY,
  IS_DEVELOPMENT: import.meta.env.DEV
} as const;