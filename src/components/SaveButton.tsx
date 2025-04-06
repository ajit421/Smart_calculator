import React from 'react';

interface SaveButtonProps {
  onSave: () => void;
}

export const SaveButton: React.FC<SaveButtonProps> = ({ onSave }) => {
  return (
    <div className="text-center mt-4">
      <button
        onClick={onSave}
        className="px-4 py-2 bg-green-800 text-white rounded hover:bg-green-600"
      >
        Save
      </button>
    </div>
  );
};
