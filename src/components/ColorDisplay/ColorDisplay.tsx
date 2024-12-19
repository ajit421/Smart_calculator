import React from 'react';
import type { ColorType } from '../../types/colors';

interface ColorDisplayProps {
  color: ColorType;
}

export const ColorDisplay: React.FC<ColorDisplayProps> = ({ color }) => {
  return (
    <div className="mt-8">
      <p className="text-lg">
        Selected Color: {' '}
        <code className="bg-gray-100 px-2 py-1 rounded font-mono">
          {color}
        </code>
      </p>
      <div 
        className="mt-4 w-32 h-32 rounded-lg shadow-md border border-gray-200"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};