import React from "react";
import { Play, ExternalLink } from "lucide-react";

interface YouTubeSectionProps {
  title: string;
  description: string;
}

const YouTubeSection: React.FC<YouTubeSectionProps> = ({
  title,
  description,
}) => {
  // Sample YouTube video data - replace with actual video IDs
  const videos = [
    {
      id: "Ee1bPLx4xI0",
      title: "FREEZE AND FLOAT ??",
      thumbnail: `https://img.youtube.com/vi/Ee1bPLx4xI0/maxresdefault.jpg`,
      duration: "02:04",
    },
    {
      id: "yUYLByOVeVw",
      title: "🚨 New Branches Added in JAC Delhi 2025",
      thumbnail: `https://img.youtube.com/vi/yUYLByOVeVw/maxresdefault.jpg`,
      duration: "04:59",
    },
    {
      id: "nWNhIJWhXAI",
      title: "College Shopping || MUST BUY THESE 39 THINGS 💥",
      thumbnail: `https://img.youtube.com/vi/nWNhIJWhXAI/maxresdefault.jpg`,
      duration: "03:32",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {title} Video Guides
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group cursor-pointer">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-video object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if thumbnail fails to load
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full p-3 group-hover:scale-110 transition-transform duration-200">
                    <Play className="w-8 h-8 text-orange-600 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  {video.title}
                </h4>
                <a
                  href={`https://youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200"
                >
                  Watch on YouTube
                  <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@Kavikaushikstudy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <Play className="mr-2 w-5 h-5" />
            Subscribe to My Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
