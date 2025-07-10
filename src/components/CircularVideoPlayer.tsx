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
    <div className={`relative w-[500px] h-72 sm:w-[600px] sm:h-80 md:w-[700px] md:h-96 lg:w-[800px] lg:h-[420px] ${className}`}>
      {/* Decorative elements around the frame */}
      <div className="absolute inset-0">
        {/* Top decorative elements */}
        <div className="absolute -top-2 right-8 w-6 h-6 bg-blue-500 rounded-full transform rotate-12"></div>
        <div className="absolute -top-1 right-16 w-4 h-8 bg-blue-600 rounded-full transform -rotate-45"></div>
        <div className="absolute top-2 -right-3 w-8 h-2 bg-blue-400 rounded-full transform rotate-45"></div>
        
        {/* Right side decoratives */}
        <div className="absolute right-4 top-1/3 w-3 h-12 bg-blue-500 rounded-full transform rotate-12"></div>
        <div className="absolute -right-2 top-1/2 w-6 h-3 bg-blue-600 rounded-full transform -rotate-30"></div>
        
        {/* Bottom decoratives */}
        <div className="absolute bottom-4 right-12 w-5 h-5 bg-yellow-400 rounded-full transform rotate-45"></div>
        <div className="absolute -bottom-1 right-20 w-3 h-6 bg-yellow-500 rounded-full transform rotate-12"></div>
        <div className="absolute bottom-8 -right-1 w-4 h-4 bg-yellow-300 rounded-full"></div>
        
        {/* Left side decoratives */}
        <div className="absolute -left-2 top-8 w-4 h-10 bg-teal-400 rounded-full transform -rotate-12"></div>
        <div className="absolute left-2 top-4 w-6 h-3 bg-teal-500 rounded-full transform rotate-45"></div>
        <div className="absolute -left-1 bottom-12 w-5 h-8 bg-teal-300 rounded-full transform rotate-30"></div>
        
        {/* Additional scattered elements */}
        <div className="absolute top-6 left-8 w-2 h-6 bg-coral-400 rounded-full transform -rotate-45"></div>
        <div className="absolute bottom-6 left-16 w-3 h-3 bg-coral-500 rounded-full"></div>
        <div className="absolute top-12 right-24 w-2 h-4 bg-blue-300 rounded-full transform rotate-60"></div>
      </div>

      {/* Main oval video container with gradient border */}
      <div className="relative w-full h-full">
        {/* Gradient border background */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-coral-400 to-blue-500 rounded-full p-1">
          {/* Inner container for video */}
          <div className="w-full h-full bg-white rounded-full p-1">
            {/* Video container */}
            <div className="w-full h-full rounded-full overflow-hidden shadow-xl">
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
        </div>
      </div>
    </div>
  );
};

export default CircularVideoPlayer;