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
    <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-gray-100 rounded-lg">
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <StrokeWidthControl
          strokeWidth={strokeWidth}
          onStrokeWidthChange={onStrokeWidthChange}
        />
        <button
          onClick={onClear}
          className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Clear Canvas
        </button>
      </div>
      <div className="w-full sm:w-auto">
        <CalculateButton onClick={onCalculate} />
      </div>
    </div>
  );
};