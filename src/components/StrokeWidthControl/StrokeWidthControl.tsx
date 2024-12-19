import React from 'react';

interface StrokeWidthControlProps {
  strokeWidth: number;
  onStrokeWidthChange: (width: number) => void;
}

export const StrokeWidthControl: React.FC<StrokeWidthControlProps> = ({
  strokeWidth,
  onStrokeWidthChange,
}) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">Stroke Width:</span>
      <input
        type="range"
        min="1"
        max="20"
        value={strokeWidth}
        onChange={(e) => onStrokeWidthChange(Number(e.target.value))}
        className="w-32"
      />
      <span className="text-sm text-gray-600">{strokeWidth}px</span>
    </div>
  );
};