import React from 'react';
import { ColorButton } from '../ColorButton/ColorButton';
import type { ColorType } from '../../types/colors';

interface ColorPaletteProps {
  colors: readonly ColorType[];
  selectedColor: ColorType;
  onColorSelect: (color: ColorType) => void;
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({ 
  colors, 
  selectedColor, 
  onColorSelect 
}) => {
  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <ColorButton
          key={color}
          color={color}
          isSelected={selectedColor === color}
          onClick={() => onColorSelect(color)}
        />
      ))}
    </div>
  );
};