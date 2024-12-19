export interface GeminiResponse {
  text: string;
  error?: string;
}

export interface GeminiError {
  message: string;
  code?: number;
}

export interface GeminiResult {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
  error?: GeminiError;
}