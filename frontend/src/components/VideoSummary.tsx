import React, { useState } from 'react';
import { Video } from '../types';
import { BookOpen, Clock, GraduationCap } from 'lucide-react';
import { QuizModal } from './QuizModal';
import { VideoControls } from './VideoControls';
import { AIChat } from './AIChat';
import { SummaryModal } from './SummaryModal';
import { InterviewModal } from './InterviewModal';

interface VideoSummaryProps {
  video: Video;
  onQuizPass: () => void;
}

export function VideoSummary({ video, onQuizPass }: VideoSummaryProps) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showInterview, setShowInterview] = useState(false);

  const handleQuizClose = () => {
    setShowQuiz(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold">{video.title}</h2>
          <button
            onClick={() => setShowQuiz(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Take Quiz
          </button>
        </div>

        <VideoControls 
          onChatToggle={() => setShowChat(!showChat)}
          onSummaryClick={() => setShowSummary(true)}
          onInterviewClick={() => setShowInterview(true)}
        />

        <div className="flex gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{video.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{video.category}</span>
          </div>
          <div className="flex items-center gap-1">
            <GraduationCap className="w-4 h-4" />
            <span>{video.instructor}</span>
          </div>
        </div>

        <div className="prose">
          <p className="text-gray-700 leading-relaxed mb-6">{video.summary}</p>
          
          <h3 className="text-lg font-semibold mb-2">Learning Objectives</h3>
          <ul className="space-y-2">
            {video.learningObjectives.map((objective, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {showQuiz && (
        <QuizModal 
          video={video} 
          onClose={handleQuizClose}
          onPass={() => {
            onQuizPass();
            setTimeout(handleQuizClose, 2000); // Close after showing success animation
          }}
        />
      )}

      <AIChat isOpen={showChat} onClose={() => setShowChat(false)} />

      {showSummary && (
        <SummaryModal 
          isOpen={showSummary}
          onClose={() => setShowSummary(false)}
          video={video}
        />
      )}

      {showInterview && (
        <InterviewModal
          isOpen={showInterview}
          onClose={() => setShowInterview(false)}
        />
      )}
    </div>
  );
}