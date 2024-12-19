import { REQUEST_CONFIG } from '../../config/constants';

export class BaseApi {
  protected async fetchWithRetry(
    url: string,
    options: RequestInit,
    retries = REQUEST_CONFIG.MAX_RETRIES
  ): Promise<Response> {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
    } catch (error) {
      if (retries > 0) {
        await new Promise(resolve => 
          setTimeout(resolve, REQUEST_CONFIG.RETRY_DELAY)
        );
        return this.fetchWithRetry(url, options, retries - 1);
      }
      throw error;
    }
  }
}