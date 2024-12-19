import { ENV } from './env';
import { API_DEFAULTS } from './constants';

export const API_CONFIG = {
  GEMINI: {
    ...API_DEFAULTS.GEMINI,
    API_KEY: ENV.GEMINI_API_KEY,
  }
} as const;