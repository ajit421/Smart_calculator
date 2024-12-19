/**
 * Formats error messages for user display
 */
export const formatErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
};

/**
 * Checks if an error is a network error
 */
export const isNetworkError = (error: unknown): boolean => {
  return error instanceof Error && 
    (error.message.includes('network') || 
     error.message.includes('Network') ||
     error.message.includes('Failed to fetch'));
};