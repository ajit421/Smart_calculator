import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_CONFIG } from './config';
import { GeminiAPIError } from './errors';

export class GeminiClient {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor() {
    try {
      this.genAI = new GoogleGenerativeAI(GEMINI_CONFIG.API_KEY);
      this.model = this.genAI.getGenerativeModel({ model: GEMINI_CONFIG.MODEL });
    } catch (error) {
      throw new GeminiAPIError('Failed to initialize Gemini API', error);
    }
  }

  async generateContent(prompt: string, imagePart: any) {
    return this.model.generateContent([prompt, imagePart]);
  }
}