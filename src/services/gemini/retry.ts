import { GEMINI_CONFIG } from './config';

export class RetryHandler {
  private retryCount: number = 0;

  async execute<T>(operation: () => Promise<T>): Promise<T> {
    try {
      return await operation();
    } catch (error) {
      if (this.retryCount < GEMINI_CONFIG.MAX_RETRIES) {
        this.retryCount++;
        const delay = Math.pow(2, this.retryCount) * GEMINI_CONFIG.RETRY_DELAY;
        await new Promise(resolve => setTimeout(resolve, delay));
        return this.execute(operation);
      }
      throw error;
    }
  }

  reset(): void {
    this.retryCount = 0;
  }
}