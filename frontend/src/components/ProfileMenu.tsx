import React from 'react';
import { User, LogOut, Settings, Award, BookOpen, Clock } from 'lucide-react';

export function ProfileMenu() {
  return (
    <div className="relative group">
      <button className="flex items-center gap-2 bg-white rounded-full p-2 hover:bg-gray-50">
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-blue-600" />
        </div>
      </button>
      
      <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
        <div className="px-4 py-2 border-b">
          <p className="font-semibold">John Doe</p>
          <p className="text-sm text-gray-500">student@pathfinders.edu</p>
        </div>
        
        <div className="px-4 py-2 border-b">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 text-yellow-500" />
            <span className="text-sm">Level 5 Learner</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>

        <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          <span>My Courses</span>
        </button>
        <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Learning History</span>
        </button>
        <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2">
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </button>
        <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-red-600">
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
}