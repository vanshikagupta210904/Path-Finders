import React from 'react';
import { Bot, Calendar, Clock, Star, Award } from 'lucide-react';

const previousInterviews = [
  {
    date: '2024-03-15',
    topic: 'Physical Geography',
    score: 85,
    duration: '25 min',
    feedback: 'Excellent understanding of tectonic processes'
  },
  {
    date: '2024-03-10',
    topic: 'Climate Systems',
    score: 92,
    duration: '30 min',
    feedback: 'Outstanding knowledge of weather patterns'
  },
  {
    date: '2024-03-05',
    topic: 'Human Geography',
    score: 78,
    duration: '20 min',
    feedback: 'Good grasp of demographic concepts'
  }
];

export function Interviews() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Bot className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold">AI Interview Assistant</h2>
                <p className="text-gray-600">Ready to assess your geography knowledge</p>
              </div>
            </div>
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Start New Interview
            </button>
          </div>

          <h3 className="text-xl font-bold mb-4">Previous Interviews</h3>
          <div className="space-y-4">
            {previousInterviews.map((interview, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold">{interview.topic}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{interview.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{interview.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold">{interview.score}%</span>
                  </div>
                </div>
                <p className="text-gray-700">{interview.feedback}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h3 className="text-lg font-bold mb-4">Your Interview Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-600" />
                <span className="font-semibold">Top 10% Performer</span>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Average Score</span>
                  <span className="font-semibold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Interviews Completed</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}