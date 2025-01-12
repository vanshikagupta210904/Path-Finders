import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { VideoPlayer } from './components/VideoPlayer';
import { VideoSummary } from './components/VideoSummary';
import { Playlist } from './components/Playlist';
import { RelatedResources } from './components/RelatedResources';
import { SkillTests } from './pages/SkillTests';
import { Interviews } from './pages/Interviews';
import { videos } from './data/videos';
import { PlaylistItem } from './types';

export default function App() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [quizPassed, setQuizPassed] = useState<boolean[]>(new Array(videos.length).fill(false));

  const playlist: PlaylistItem[] = videos.map((video, index) => ({
    video,
    isActive: index === currentVideoIndex,
  }));

  const handleVideoSelect = (index: number) => {
    if (index > currentVideoIndex && !quizPassed[currentVideoIndex]) {
      alert('Please complete the quiz for the current video before moving forward.');
      return;
    }
    setCurrentVideoIndex(index);
  };

  const handlePrevious = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentVideoIndex < videos.length - 1 && quizPassed[currentVideoIndex]) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else if (!quizPassed[currentVideoIndex]) {
      alert('Please complete the quiz for this video before moving to the next one.');
    }
  };

  const handleQuizPass = () => {
    const newQuizPassed = [...quizPassed];
    newQuizPassed[currentVideoIndex] = true;
    setQuizPassed(newQuizPassed);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <main className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <VideoPlayer 
                    video={videos[currentVideoIndex]}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    hasPrevious={currentVideoIndex > 0}
                    hasNext={currentVideoIndex < videos.length - 1 && quizPassed[currentVideoIndex]}
                  />
                  <VideoSummary 
                    video={videos[currentVideoIndex]} 
                    onQuizPass={handleQuizPass}
                  />
                </div>
                <div className="space-y-6">
                  <Playlist 
                    playlist={playlist}
                    onVideoSelect={handleVideoSelect}
                  />
                  <RelatedResources category={videos[currentVideoIndex].category} />
                </div>
              </div>
            </main>
          } />
          <Route path="/skills" element={<SkillTests />} />
          <Route path="/interviews" element={<Interviews />} />
        </Routes>
      </div>
    </Router>
  );
}