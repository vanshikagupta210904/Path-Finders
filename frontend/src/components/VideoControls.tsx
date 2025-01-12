import React from 'react';
import { MessageSquare, FileText, Video } from 'lucide-react';

interface VideoControlsProps {
  onChatToggle: () => void;
  onSummaryClick: () => void;
  onInterviewClick: () => void;
}

export function VideoControls({ onChatToggle, onSummaryClick, onInterviewClick }: VideoControlsProps) {
  return (
    <div className="flex gap-4 mb-6">
      <button
        onClick={onChatToggle}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <MessageSquare className="w-5 h-5" />
        <span>AI Chat</span>
      </button>

      <button
        onClick={onSummaryClick}
        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        <FileText className="w-5 h-5" />
        <span>Get Summary</span>
      </button>

      <button
        onClick={onInterviewClick}
        className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        <Video className="w-5 h-5" />
        <span>AI Interview</span>
      </button>
    </div>
  );
}