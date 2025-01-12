import React from 'react';
import { BookOpen, FileText, Youtube } from 'lucide-react';

interface RelatedResourcesProps {
  category: string;
}

export function RelatedResources({ category }: RelatedResourcesProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Related Resources</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-blue-600" />
            Research Papers
          </h4>
          <ul className="space-y-2">
            <li>
              <a 
                href={`https://scholar.google.com/scholar?q=${encodeURIComponent(category)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Latest Research on {category}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold flex items-center gap-2 mb-3">
            <Youtube className="w-5 h-5 text-red-600" />
            Related Videos
          </h4>
          <ul className="space-y-2">
            <li>
              <a 
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(category + " geography")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                More Videos on {category}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-green-600" />
            Additional Resources
          </h4>
          <ul className="space-y-2">
            <li>
              <a 
                href={`https://www.nationalgeographic.com/search?q=${encodeURIComponent(category)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                National Geographic Articles
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}