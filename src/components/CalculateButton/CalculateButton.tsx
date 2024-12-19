import React from 'react';

interface CalculateButtonProps {
  onClick: () => void;
}

export const CalculateButton: React.FC<CalculateButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors font-medium"
    >
      Calculate
    </button>
  );
};