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

export interface GeminiImagePart {
  inlineData: {
    data: string;
    mimeType: string;
  };
}

export interface GeminiConfig {
  apiKey: string;
  model: string;
  maxRetries: number;
  retryDelay: number;
  timeout: number;
}