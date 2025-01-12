import React, { useState } from 'react';
import { X, Video, Mic, MicOff, Camera, CameraOff } from 'lucide-react';

interface InterviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InterviewModal({ isOpen, onClose }: InterviewModalProps) {
  const [hasPermissions, setHasPermissions] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);

  const requestPermissions = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setHasPermissions(true);
      setIsCameraOn(true);
      setIsMicOn(true);
    } catch (err) {
      console.error('Error accessing media devices:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Video className="w-6 h-6 text-purple-600" />
            AI Interview Session
          </h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
              {hasPermissions ? (
                <video
                  id="userVideo"
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <button
                    onClick={requestPermissions}
                    className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700"
                  >
                    Enable Camera & Microphone
                  </button>
                </div>
              )}
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setIsCameraOn(!isCameraOn)}
                className={`p-3 rounded-full ${
                  isCameraOn ? 'bg-purple-100 text-purple-600' : 'bg-red-100 text-red-600'
                }`}
              >
                {isCameraOn ? <Camera size={24} /> : <CameraOff size={24} />}
              </button>
              <button
                onClick={() => setIsMicOn(!isMicOn)}
                className={`p-3 rounded-full ${
                  isMicOn ? 'bg-purple-100 text-purple-600' : 'bg-red-100 text-red-600'
                }`}
              >
                {isMicOn ? <Mic size={24} /> : <MicOff size={24} />}
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=500"
                alt="AI Interviewer"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">AI Interviewer</h4>
              <p className="text-sm text-gray-700">
                Your AI interviewer will ask questions based on the video content and assess your understanding.
                Speak clearly and take your time with responses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}