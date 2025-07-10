import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface CircularVideoPlayerProps {
  src: string;
  size?: number;
  autoplay?: boolean;
}

const CircularVideoPlayer = ({ 
  src, 
  size = 400, 
  autoplay = false 
}: CircularVideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      className="relative group cursor-pointer"
      style={{ width: size, height: size }}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onClick={togglePlay}
    >
      {/* Circular video container */}
      <div 
        className="w-full h-full rounded-full overflow-hidden shadow-lg ring-4 ring-primary/20 transition-all duration-300 group-hover:ring-primary/40 group-hover:shadow-xl"
        style={{ width: size, height: size }}
      >
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          loop
          muted
          autoPlay={autoplay}
          playsInline
        />
      </div>

      {/* Play/Pause overlay */}
      <div 
        className={`absolute inset-0 flex items-center justify-center bg-black/20 rounded-full transition-opacity duration-300 ${
          showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="bg-background/90 backdrop-blur-sm rounded-full p-4 transition-transform duration-200 hover:scale-110">
          {isPlaying ? (
            <Pause className="w-8 h-8 text-foreground" />
          ) : (
            <Play className="w-8 h-8 text-foreground ml-1" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CircularVideoPlayer;