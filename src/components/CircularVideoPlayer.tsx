import { useEffect, useState } from 'react';

interface CircularVideoPlayerProps {
  src: string;
  className?: string;
}

const CircularVideoPlayer = ({ 
  src, 
  className = ""
}: CircularVideoPlayerProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] ${className}`}>
      {/* Circular video container */}
      <div className="w-full h-full rounded-full overflow-hidden shadow-lg ring-2 sm:ring-4 ring-primary/20 transition-all duration-300 hover:ring-primary/40 hover:shadow-xl">
        <video
          src={src}
          className="w-full h-full object-cover"
          loop
          muted
          autoPlay
          playsInline
          preload="metadata"
        />
      </div>
    </div>
  );
};

export default CircularVideoPlayer;