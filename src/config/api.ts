import { ENV } from './env';
import { API_CONSTANTS } from './constants';

export const API_CONFIG = {
  GEMINI: {
    ...API_CONSTANTS.GEMINI,
    API_KEY: ENV.GEMINI_API_KEY,
  }
} as const;