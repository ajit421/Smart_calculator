import React from 'react';
import { ResetButton } from '../ResetButton/ResetButton';
import { ColorPalette } from '../ColorPalette/ColorPalette';
import type { ColorType } from '../../types/colors';

interface ColorPickerProps {
  colors: ColorType[];
  selectedColor: ColorType;
  onColorSelect: (color: ColorType) => void;
  onReset: () => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  colors,
  selectedColor,
  onColorSelect,
  onReset
}) => {
  return (
    <div className="flex gap-4 p-4 bg-gray-100 rounded-lg items-center">
      <ResetButton onClick={onReset} />
      <ColorPalette
        colors={colors}
        selectedColor={selectedColor}
        onColorSelect={onColorSelect}
      />
    </div>
  );
};