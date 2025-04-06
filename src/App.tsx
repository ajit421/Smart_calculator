import React, { useRef, useState, useEffect } from 'react'; // Added useEffect
import confetti from 'canvas-confetti';
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

  const [isModalOpen, setIsModalOpen] = useState(true); // State for modal visibility
  const [currentStep, setCurrentStep] = useState(0); // Track the current step

  const instructions = [
    <span><span style={{ color: "red" }}>Welcome</span> to the Smart Calculator!   click 'Next' to start....</span>,
    <span> Use the '
      <span style={{ color: "red" }}>C</span>
      <span style={{ color: "pink" }}>o</span>
      <span style={{ color: "purple" }}>l</span>
      <span style={{ color: "brown" }}>o</span>
      <span style={{ color: "blue" }}>r</span>
      <span style={{ color: "turquoise" }}>  P</span>
      <span style={{ color: "green" }}>i</span>
      <span style={{ color: "lite green" }}>c</span>
      <span style={{ color: "yelow" }}>k</span>
      <span style={{ color: "orange" }}>e</span>
      <span style={{ color: "mango" }}>r</span>
      ' to select your drawing color.
    </span>,
    "Adjust the 'stroke width' using the slider below the colors.",
    "Draw a mathematical expression on the canvas (2 + 2)",
    <div>
      Click the <span style={{ color: "green" }}> 'Calculate' </span> button to analyze your result.
    </div>,
    <div>
      Click <span style={{ color: "Blue" }}> 'Save' </span> to save your drawing as an image.
    </div>,
    <div>
      Use <span style={{ color: "Orange" }}> 'Clear Canvas' </span> to erase your drawing and start fresh.
    </div>,
    <div>
      Click <span style={{ color: "Red" }}> 'Reset' </span> to restore the default settings.
    </div>,
  ];

  const handleNextStep = () => {
    if (currentStep < instructions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsModalOpen(false); // Close the modal when all steps are done
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

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

  const handleSaveCanvas = () => {
    const canvas = canvasRef.current?.getCanvas();
    if (!canvas) return;

    const imageData = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = imageData;
    link.download = 'canvas-screenshot.png';
    link.click();
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.5 }, // Center of the screen
    });
  };

  // Trigger confetti on component load
  useEffect(() => {
    triggerConfetti();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      {/* Step-by-Step Instructional Pop-Up */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Step {currentStep + 1}</h2>
            <p className="text-gray-700 mb-6">{instructions[currentStep]}</p>
            <div className="flex justify-between space-x-2">
              {/* Back Button */}
              {currentStep > 0 && (
                <button
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  onClick={handlePreviousStep}
                >
                  Back
                </button>
              )}
              {/* Next Button */}
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleNextStep}
              >
                {currentStep < instructions.length - 1 ? "Next" : "Done"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center">
            Smart Calculator
          </h1>

          <div className="flex-1">
            {/* Color Palette and Save Button */}
            <div className="flex items-center space-x-4">
              <ColorPicker
                colors={colorPalette}
                selectedColor={selectedColor}
                onColorSelect={setSelectedColor}
                onReset={handleReset}
              />
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                onClick={handleSaveCanvas}

              >

                Save
              </button>


            </div>

            {/* Drawing Tools */}
            <DrawingTools
              strokeWidth={strokeWidth}
              onStrokeWidthChange={setStrokeWidth}
              onClear={handleClearCanvas}
              onCalculate={handleCalculate}
            />

            {/* Canvas */}
            <Canvas
              ref={canvasRef}
              color={selectedColor}
              strokeWidth={strokeWidth}
            />
          </div>
        </div>

        {/* Response Display */}
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
        This is a Smart Calculator App built with a modern tech stack and an easy-to-use design for a smooth and effortless calculation experience. perfect for daily and academic use.
        </p>
        <p className="text-sm text-gray-600">
          Developed by{' '}
          <a
            href="https://www.github.com/ajit421"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Ajit kumar
          </a>
        </p>
      </footer>


    </div>
  );
}
