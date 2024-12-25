import React from 'react';

interface ResponseDisplayProps {
  response: string | null;
  error: string | null;
  isLoading: boolean;
}

export const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ 
  response, 
  error, 
  isLoading 
}) => {
  if (isLoading) {
    return (
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
  <div className="flex flex-col items-center space-y-4">
    {/* Spinner Animation */}
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-600"></div>
    <p className="text-gray-800">
      <span style={{ color: "green" }}>Analyzing... Please wait</span>
    </p>
  </div>
</div>

      // <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
       //   <div className="flex items-center space-x-2">
       //     <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-gray-600"></div>
    );
  }

  if (error) {
    return (
      <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
        <h2 className="text-lg font-semibold mb-2 text-red-700">Error</h2>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!response) {
    return null;
  }

  return (
    <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Analysis Result:</h2>
      <p className="text-gray-700">{response}</p>
    </div>
  );
};
