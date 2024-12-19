import React from 'react';
import { CalculateButton } from '../CalculateButton/CalculateButton';
import { StrokeWidthControl } from '../StrokeWidthControl/StrokeWidthControl';

interface DrawingToolsProps {
  strokeWidth: number;
  onStrokeWidthChange: (width: number) => void;
  onClear: () => void;
  onCalculate: () => void;
}

export const DrawingTools: React.FC<DrawingToolsProps> = ({
  strokeWidth,
  onStrokeWidthChange,
  onClear,
  onCalculate,
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg mb-4">
      <div className="flex items-center gap-4">
        <StrokeWidthControl
          strokeWidth={strokeWidth}
          onStrokeWidthChange={onStrokeWidthChange}
        />
        <button
          onClick={onClear}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Clear Canvas
        </button>
      </div>
      <CalculateButton onClick={onCalculate} />
    </div>
  );
};