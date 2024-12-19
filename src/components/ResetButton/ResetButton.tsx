import React from 'react';

interface ResetButtonProps {
  onClick: () => void;
}

export const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
  return (
    <button 
      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
      onClick={onClick}
    >
      Reset
    </button>
  );
};