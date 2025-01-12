import React from 'react';
import { Trophy, Clock, HelpCircle, Star } from 'lucide-react';

const levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

const skillCategories = [
  {
    title: 'Geography Fundamentals',
    tests: [
      { name: 'Basic Concepts', level: 'Beginner', questions: 20, time: '30 min' },
      { name: 'Advanced Theory', level: 'Advanced', questions: 40, time: '60 min' },
    ]
  },
  {
    title: 'Climate & Weather',
    tests: [
      { name: 'Weather Patterns', level: 'Intermediate', questions: 30, time: '45 min' },
      { name: 'Climate Analysis', level: 'Expert', questions: 50, time: '75 min' },
    ]
  },
  {
    title: 'Environmental Studies',
    tests: [
      { name: 'Ecosystems', level: 'Beginner', questions: 25, time: '35 min' },
      { name: 'Environmental Impact', level: 'Advanced', questions: 45, time: '65 min' },
    ]
  }
];

export function SkillTests() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Skill Assessment Center</h2>
        <div className="grid grid-cols-4 gap-4">
          {levels.map((level, index) => (
            <div key={level} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Star className={`w-5 h-5 ${index === 3 ? 'text-purple-600' : 'text-yellow-500'}`} />
                <h3 className="font-semibold">{level}</h3>
              </div>
              <p className="text-sm text-gray-600">
                {index * 10 + 10}+ tests available
              </p>
            </div>
          ))}
        </div>
      </div>

      {skillCategories.map((category) => (
        <div key={category.title} className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.tests.map((test) => (
              <div key={test.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-semibold">{test.name}</h4>
                  <span className={`px-2 py-1 rounded text-sm ${
                    test.level === 'Expert' ? 'bg-purple-100 text-purple-700' :
                    test.level === 'Advanced' ? 'bg-red-100 text-red-700' :
                    test.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {test.level}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <HelpCircle className="w-4 h-4" />
                    <span>{test.questions} questions</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{test.time}</span>
                  </div>
                </div>
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Start Test
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}