export interface Video {
  id: string;
  title: string;
  summary: string;
  category: string;
  duration: string;
  learningObjectives: string[];
  instructor: string;
}

export interface PlaylistItem {
  video: Video;
  isActive: boolean;
}