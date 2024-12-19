import { ENV } from '../../config/env';

export const GEMINI_CONFIG = {
  API_KEY: ENV.GEMINI_API_KEY,
  MODEL: 'gemini-pro-vision',
  MAX_RETRIES: 3,
  RETRY_DELAY: 1000,
  TIMEOUT: 30000,
} as const;