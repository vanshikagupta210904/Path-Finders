import React from 'react';
import { Video } from '../types';
import { VideoNavigation } from './VideoNavigation';

interface VideoPlayerProps {
  video: Video;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export function VideoPlayer({ video, onPrevious, onNext, hasPrevious, hasNext }: VideoPlayerProps) {
  return (
    <div>
      <div className="w-full aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube-nocookie.com/embed/${video.id}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <VideoNavigation
        onPrevious={onPrevious}
        onNext={onNext}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
      />
    </div>
  );
}