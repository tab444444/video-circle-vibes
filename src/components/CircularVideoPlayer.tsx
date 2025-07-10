import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface CircularVideoPlayerProps {
  src: string;
  autoplay?: boolean;
  className?: string;
}

const CircularVideoPlayer = ({ 
  src, 
  autoplay = false,
  className = ""
}: CircularVideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [showControls, setShowControls] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const handleInteraction = () => {
    if (isMobile) {
      setShowControls(true);
      setTimeout(() => setShowControls(false), 2000);
    }
    togglePlay();
  };

  return (
    <div 
      className={`relative group cursor-pointer w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] ${className}`}
      onMouseEnter={() => !isMobile && setShowControls(true)}
      onMouseLeave={() => !isMobile && setShowControls(false)}
      onClick={handleInteraction}
      onTouchStart={handleInteraction}
    >
      {/* Circular video container */}
      <div className="w-full h-full rounded-full overflow-hidden shadow-lg ring-2 sm:ring-4 ring-primary/20 transition-all duration-300 group-hover:ring-primary/40 group-hover:shadow-xl group-active:ring-primary/60">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          loop
          muted
          autoPlay={autoplay}
          playsInline
          preload="metadata"
        />
      </div>

      {/* Play/Pause overlay */}
      <div 
        className={`absolute inset-0 flex items-center justify-center bg-black/20 rounded-full transition-opacity duration-300 ${
          showControls || !isPlaying || isMobile ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="bg-background/90 backdrop-blur-sm rounded-full p-3 sm:p-4 transition-transform duration-200 hover:scale-110 active:scale-95">
          {isPlaying ? (
            <Pause className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
          ) : (
            <Play className="w-6 h-6 sm:w-8 sm:h-8 text-foreground ml-0.5" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CircularVideoPlayer;