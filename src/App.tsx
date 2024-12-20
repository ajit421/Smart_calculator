import React, { useRef } from 'react';
import { ColorPicker } from './components/ColorPicker/ColorPicker';
import { Canvas, type CanvasRef } from './components/Canvas/Canvas';
import { DrawingTools } from './components/DrawingTools/DrawingTools';
import { ResponseDisplay } from './components/ResponseDisplay/ResponseDisplay';
import { useGeminiAnalysis } from './hooks/useGeminiAnalysis';
import { colorPalette } from './types/colors';
import type { ColorType } from './types/colors';

function App() {
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Smart calculator</h1>
        
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
        
        <ResponseDisplay 
          response={response} 
          error={error}
          isLoading={isLoading} 
        />
        
        <div className="mt-3">
          <p className="text-gray-400">This is a simple smart calculator application built with React, TypeScript, and Tailwind CSS.</p>
          <p className="text-gray-900">Developed by <a href="https://github.com/ajit421" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Ajit kumar</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;