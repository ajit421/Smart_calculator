import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import type { ColorType } from '../../types/colors';

export interface CanvasRef {
  clear: () => void;
  reset: () => void;
  getCanvas: () => HTMLCanvasElement | null;
  getDrawingData: () => any; // Add your logic to retrieve drawing data
}

interface CanvasProps {
  color: ColorType;
  strokeWidth: number;
}

export const Canvas = forwardRef<CanvasRef, CanvasProps>(({ color, strokeWidth }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const resetCanvas = () => {
    clearCanvas();
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 3;
      }
    }
  };

  const getDrawingData = () => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Example of extracting drawing data as a base64 string
    return canvas.toDataURL(); 
  };

  useImperativeHandle(ref, () => ({
    clear: clearCanvas,
    reset: resetCanvas,
    getCanvas: () => canvasRef.current,
    getDrawingData: getDrawingData,
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvasSize = () => {
      const container = canvas.parentElement;
      if (!container) return;

      const { width } = container.getBoundingClientRect();
      canvas.width = width;
      canvas.height = Math.min(400, window.innerHeight * 0.5);
      clearCanvas();
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  const getCoordinates = (e: React.TouchEvent | React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const startDrawing = (e: React.TouchEvent | React.MouseEvent) => {
    const coords = getCoordinates(e);
    if (!coords) return;

    setIsDrawing(true);
    setLastX(coords.x);
    setLastY(coords.y);
  };

  const draw = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDrawing) return;
    e.preventDefault();

    const coords = getCoordinates(e);
    if (!coords) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = strokeWidth;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();

    setLastX(coords.x);
    setLastY(coords.y);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <canvas
      ref={canvasRef}
      className="w-full bg-white rounded-lg shadow-md border border-gray-400 touch-none"
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseOut={stopDrawing}
      onTouchStart={startDrawing}
      onTouchMove={draw}
      onTouchEnd={stopDrawing}
    />
  );
});

Canvas.displayName = 'Canvas';
