import React, { useState } from 'react';
import { X, CheckCircle, XCircle } from 'lucide-react';
import { Video } from '../types';
import confetti from 'canvas-confetti';

interface QuizModalProps {
  video: Video;
  onClose: () => void;
  onPass: () => void;
}

export function QuizModal({ video, onClose, onPass }: QuizModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean | null>(null);

  const questions = [
    {
      question: `What category does "${video.title}" belong to?`,
      options: ['Physical Geography', 'Human Geography', 'Climate Geography', 'Economic Geography'],
      correct: video.category
    },
    {
      question: 'Which of the following is a key learning objective from this video?',
      options: video.learningObjectives.concat(['None of the above']),
      correct: video.learningObjectives[0]
    }
  ];

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === questions[currentQuestion].correct;
    setLastAnswerCorrect(isCorrect);
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setLastAnswerCorrect(null);
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
        if ((score + (isCorrect ? 1 : 0)) / questions.length >= 0.7) {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
          onPass();
        }
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-lg w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Quick Quiz</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {!showScore ? (
          <div className="space-y-4">
            <div className="h-2 bg-gray-200 rounded">
              <div 
                className="h-2 bg-blue-600 rounded transition-all duration-500"
                style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
              />
            </div>
            
            <p className="text-lg mb-4">{questions[currentQuestion].question}</p>
            <div className="space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`w-full p-3 text-left rounded-lg border transition-all duration-300 ${
                    lastAnswerCorrect !== null
                      ? option === questions[currentQuestion].correct
                        ? 'bg-green-100 border-green-500'
                        : 'bg-red-100 border-red-500'
                      : 'hover:bg-blue-50 hover:border-blue-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="mb-4">
              {score / questions.length >= 0.7 ? (
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              ) : (
                <XCircle className="w-16 h-16 text-red-500 mx-auto" />
              )}
            </div>
            <h4 className="text-xl mb-4">Quiz Complete!</h4>
            <p className="text-lg mb-4">
              You scored {score} out of {questions.length}
            </p>
            {score / questions.length >= 0.7 ? (
              <p className="text-green-600 mb-4">Congratulations! You can proceed to the next video!</p>
            ) : (
              <p className="text-red-600 mb-4">Please review the content and try again.</p>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}