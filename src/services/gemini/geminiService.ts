import { GeminiApi } from './geminiApi';
import { ANALYSIS_PROMPTS } from './prompts';
import type { GeminiResponse } from './types';

export class GeminiService {
  private api: GeminiApi;

  constructor() {
    this.api = new GeminiApi();
  }

  async analyzeImage(imageData: string): Promise<GeminiResponse> {
    try {
      const result = await this.api.generateContent(ANALYSIS_PROMPTS.DEFAULT, imageData);
      
      if (result.error) {
        throw new Error(result.error.message);
      }

      return {
        text: result.candidates[0].content.parts[0].text
      };
    } catch (error) {
      return {
        text: 'Analysis failed. Please try again.',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}

export const geminiService = new GeminiService();