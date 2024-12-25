// useUndoRedo.tsx
import { useState } from 'react';

export function useUndoRedo<T>(initialState: T) {
  const [history, setHistory] = useState<T[]>([initialState]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateState = (newState: T) => {
    const updatedHistory = history.slice(0, currentIndex + 1);
    setHistory([...updatedHistory, newState]);
    setCurrentIndex(updatedHistory.length);
  };

  const undo = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const redo = () => {
    if (currentIndex < history.length - 1) setCurrentIndex((prev) => prev + 1);
  };

  return {
    history,
    currentIndex,
    currentState: history[currentIndex],
    updateState,
    undo,
    redo,
    canUndo: currentIndex > 0,
    canRedo: currentIndex < history.length - 1,
  };
}
