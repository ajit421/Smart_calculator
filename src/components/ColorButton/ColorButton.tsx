import React from 'react';
import type { ColorType } from '../../types/colors';

interface ColorButtonProps {
  color: ColorType;
  isSelected: boolean;
  onClick: () => void;
}

export const ColorButton: React.FC<ColorButtonProps> = ({ color, isSelected, onClick }) => {
  return (
    <button
      className={`w-8 h-8 rounded-full border-2 transition-all ${
        isSelected ? 'border-gray-400 scale-110' : 'border-transparent'
      }`}
      style={{ backgroundColor: color }}
      onClick={onClick}
      aria-label={`Select ${color} color`}
    />
  );
};