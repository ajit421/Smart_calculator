import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyAJuH2twbTuWHsK39qFGVeMRDNHuvDu1zA';
const genAI = new GoogleGenerativeAI(API_KEY);

export async function getGeminiResponse(imageBase64: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro-vision' });
    
    // Remove the data URL prefix
    const base64WithoutPrefix = imageBase64.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
    
    const imageParts = {
      inlineData: {
        data: base64WithoutPrefix,
        mimeType: 'image/png'
      }
    };

    const prompt = "Analyze this drawing and provide a brief, clear description of what you see. Keep the response concise and focused.";
    
    const result = await model.generateContent([prompt, imageParts]);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting Gemini response:', error);
    return 'Unable to analyze the image at this time. Please try again.';
  }
}