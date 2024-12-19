import React from 'react';
import { colorPalette } from '../constants/colors';
import type { ColorType } from '../constants/colors';

interface ColorPickerProps {
  selectedColor: ColorType;
  onColorSelect: (color: ColorType) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ selectedColor, onColorSelect }) => {
  return (
    <div className="flex gap-2 p-4 bg-gray-100 rounded-lg">
      <button 
        className="px-4 py-2 bg-red-500 text-white rounded-md"
        onClick={() => onColorSelect('#000000')}
      >
        Reset
      </button>
      
      <div className="flex gap-2">
        {colorPalette.map((color) => (
          <button
            key={color}
            className={`w-8 h-8 rounded-full border-2 ${
              selectedColor === color ? 'border-gray-400' : 'border-transparent'
            }`}
            style={{ backgroundColor: color }}
            onClick={() => onColorSelect(color)}
            aria-label={`Select ${color} color`}
          />
        ))}
      </div>
    </div>
  );
};