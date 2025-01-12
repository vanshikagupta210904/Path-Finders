import React, { useState } from 'react';
import { Globe, Home, Brain, Video, GraduationCap, Search, BookOpen, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProfileMenu } from './ProfileMenu';

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showCourses, setShowCourses] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="text-blue-600" size={32} />
            <h1 className="text-2xl font-bold text-gray-900">PathFinders</h1>
          </div>
          
          <div className="flex-1 max-w-xl px-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          <nav className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <BookOpen size={20} />
                <span>Explore Courses</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                <div className="grid grid-cols-2 gap-2 p-4">
                  <div>
                    <h3 className="font-semibold mb-2">Beginner Level</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-600 hover:text-blue-600">Basic Geography</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600">World Maps</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600">Climate Basics</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Intermediate</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-600 hover:text-blue-600">Physical Geography</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600">Human Geography</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600">Economic Systems</a></li>
                    </ul>
                  </div>
                  <div className="col-span-2 mt-4">
                    <h3 className="font-semibold mb-2">Advanced Level</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-600 hover:text-blue-600">GIS & Mapping</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600">Environmental Analysis</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600">Urban Planning</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/quizzes" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <Brain size={20} />
              <span>Quizzes</span>
            </Link>
            <Link to="/interviews" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <Video size={20} />
              <span>AI Interview</span>
            </Link>
            <Link to="/skills" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <GraduationCap size={20} />
              <span>Skill Tests</span>
            </Link>
            <ProfileMenu />
          </nav>
        </div>
      </div>
    </header>
  );
}