import React from 'react';
import { X, FileText } from 'lucide-react';

interface SummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: {
    title: string;
    summary: string;
    learningObjectives: string[];
  };
}

export function SummaryModal({ isOpen, onClose, video }: SummaryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <FileText className="w-6 h-6 text-green-600" />
            Video Summary
          </h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-2">{video.title}</h4>
            <p className="text-gray-700 leading-relaxed">{video.summary}</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">Key Learning Points</h4>
            <ul className="space-y-2">
              {video.learningObjectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">AI-Generated Notes:</h4>
            <p className="text-sm text-gray-700">
              This video primarily focuses on geographical concepts and their practical applications. 
              The instructor effectively explains complex topics using clear examples and visual aids. 
              Consider reviewing the key learning points above and testing your knowledge with the quiz feature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}