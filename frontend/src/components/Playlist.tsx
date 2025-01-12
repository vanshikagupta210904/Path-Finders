import React from 'react';
import { PlaylistItem } from '../types';
import { Play } from 'lucide-react';

interface PlaylistProps {
  playlist: PlaylistItem[];
  onVideoSelect: (index: number) => void;
}

export function Playlist({ playlist, onVideoSelect }: PlaylistProps) {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold p-4 border-b">Playlist</h3>
      <div className="divide-y">
        {playlist.map((item, index) => (
          <button
            key={item.video.id}
            onClick={() => onVideoSelect(index)}
            className={`w-full p-4 text-left hover:bg-gray-50 transition-colors flex items-center gap-4 ${
              item.isActive ? 'bg-blue-50' : ''
            }`}
          >
            <div className={`p-2 rounded-full ${item.isActive ? 'bg-blue-100' : 'bg-gray-100'}`}>
              <Play size={16} className={item.isActive ? 'text-blue-600' : 'text-gray-600'} />
            </div>
            <span className={`font-medium ${item.isActive ? 'text-blue-600' : 'text-gray-700'}`}>
              {item.video.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}