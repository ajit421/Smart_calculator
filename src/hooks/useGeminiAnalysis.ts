import { useState, useCallback } from 'react';
import { geminiService } from '../services/gemini/geminiService';
import { formatErrorMessage, isNetworkError } from '../utils/errorUtils';

export const useGeminiAnalysis = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyzeImage = useCallback(async (imageData: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const result = await geminiService.analyzeImage(imageData);
      
      if (result.error) {
        setError(result.error);
        setResponse(null);
      } else {
        setResponse(result.text);
        setError(null);
      }
    } catch (err) {
      const errorMessage = isNetworkError(err)
        ? 'Network error. Please check your connection and try again.'
        : formatErrorMessage(err);
      
      setError(errorMessage);
      setResponse(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    response,
    isLoading,
    error,
    analyzeImage
  };
};