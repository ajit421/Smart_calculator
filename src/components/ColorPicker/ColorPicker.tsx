import React from 'react';
import { ResetButton } from '../ResetButton/ResetButton';
import { ColorPalette } from '../ColorPalette/ColorPalette';
import type { ColorType } from '../../types/colors';

interface ColorPickerProps {
  colors: readonly ColorType[];
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
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-100 rounded-lg">
      <ResetButton onClick={onReset} />
      <div className="flex-1 overflow-x-auto">
        <ColorPalette
          colors={colors}
          selectedColor={selectedColor}
          onColorSelect={onColorSelect}
        />
      </div>
    </div>
  );
};