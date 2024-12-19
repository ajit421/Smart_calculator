export const API_CONSTANTS = {
  GEMINI: {
    BASE_URL: 'https://generativelanguage.googleapis.com/v1beta',
    MODEL: 'gemini-1.5-flash',
    ENDPOINTS: {
      GENERATE_CONTENT: 'generateContent'
    },
    HEADERS: {
      'Content-Type': 'application/json'
    }
  }
} as const;

export const REQUEST_CONFIG = {
  MAX_RETRIES: 3,
  RETRY_DELAY: 1000,
  TIMEOUT: 30000
} as const;