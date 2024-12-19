import { ImageProcessingError } from './errors';
import type { GeminiImagePart } from './types';

export class ImageProcessor {
  static process(imageData: string): GeminiImagePart {
    try {
      const base64Data = imageData.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
      
      return {
        inlineData: {
          data: base64Data,
          mimeType: 'image/png'
        }
      };
    } catch (error) {
      throw new ImageProcessingError('Failed to process image data');
    }
  }
}