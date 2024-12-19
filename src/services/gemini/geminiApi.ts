import { BaseApi } from '../api/baseApi';
import { API_CONSTANTS } from '../../config/constants';
import { ENV } from '../../config/env';

export class GeminiApi extends BaseApi {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    super();
    this.baseUrl = API_CONSTANTS.GEMINI.BASE_URL;
    this.apiKey = ENV.GEMINI_API_KEY;
  }

  async generateContent(prompt: string, imageData?: string) {
    const url = `${this.baseUrl}/models/${API_CONSTANTS.GEMINI.MODEL}:${API_CONSTANTS.GEMINI.ENDPOINTS.GENERATE_CONTENT}?key=${this.apiKey}`;
    
    const contents = imageData 
      ? [{
          parts: [
            { text: prompt },
            {
              inlineData: {
                data: imageData.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''),
                mimeType: 'image/png'
              }
            }
          ]
        }]
      : [{
          parts: [{ text: prompt }]
        }];

    const response = await this.fetchWithRetry(url, {
      method: 'POST',
      headers: API_CONSTANTS.GEMINI.HEADERS,
      body: JSON.stringify({ contents })
    });

    return response.json();
  }
}