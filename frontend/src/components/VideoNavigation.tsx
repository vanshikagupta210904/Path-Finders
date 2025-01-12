import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface VideoNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export function VideoNavigation({ onPrevious, onNext, hasPrevious, hasNext }: VideoNavigationProps) {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <button
        onClick={onPrevious}
        disabled={!hasPrevious}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          hasPrevious
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
        <span>Previous</span>
      </button>
      
      <button
        onClick={onNext}
        disabled={!hasNext}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          hasNext
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        <span>Next</span>
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}