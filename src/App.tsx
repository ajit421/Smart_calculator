import React, { useRef } from 'react';
import { ColorPicker } from './components/ColorPicker/ColorPicker';
import { Canvas, type CanvasRef } from './components/Canvas/Canvas';
import { DrawingTools } from './components/DrawingTools/DrawingTools';
import { ResponseDisplay } from './components/ResponseDisplay/ResponseDisplay';
import { useGeminiAnalysis } from './hooks/useGeminiAnalysis';
import { colorPalette } from './types/colors';
import type { ColorType } from './types/colors';

export default function App() {
  const [selectedColor, setSelectedColor] = React.useState<ColorType>(colorPalette[0]);
  const [strokeWidth, setStrokeWidth] = React.useState(3);
  const canvasRef = useRef<CanvasRef>(null);
  const { response, isLoading, error, analyzeImage } = useGeminiAnalysis();

  const handleReset = () => {
    setSelectedColor(colorPalette[0]);
    setStrokeWidth(3);
    canvasRef.current?.reset();
  };

  const handleClearCanvas = () => {
    canvasRef.current?.clear();
  };

  const handleCalculate = async () => {
    const canvas = canvasRef.current?.getCanvas();
    if (!canvas) return;

    const imageData = canvas.toDataURL('image/png');
    await analyzeImage(imageData);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center">
            Smart Calculator
          </h1>

          <div className="flex-1">


            <ColorPicker
              colors={colorPalette}
              selectedColor={selectedColor}
              onColorSelect={setSelectedColor}
              onReset={handleReset}
            />

            <DrawingTools
              strokeWidth={strokeWidth}
              onStrokeWidthChange={setStrokeWidth}
              onClear={handleClearCanvas}
              onCalculate={handleCalculate}

            />

            

            <Canvas
              ref={canvasRef}
              color={selectedColor}
              strokeWidth={strokeWidth}
            />
          </div>
        </div>

        <div className="mt-6">
          <ResponseDisplay
            response={response}
            error={error}
            isLoading={isLoading}
          />
        </div>
      </div>

      <footer className="mt-8 text-center space-y-2">
        <p className="text-sm text-gray-500">
          This is a simple smart calculator application built with React, TypeScript, and Tailwind CSS.
        </p>
        <p className="text-sm text-gray-600">
          Developed by{' '}
          <a
            href="https://github.com/ajit421"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Ajit Kumar
          </a>
        </p>
      </footer>
    </div>
  );
}
