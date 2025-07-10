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
    <div className={`relative w-[500px] h-56 sm:w-[600px] sm:h-64 md:w-[700px] md:h-72 lg:w-[800px] lg:h-80 transform rotate-12 ${className}`}>
      {/* Decorative elements around the frame - matching reference image */}
      <div className="absolute inset-0">
        {/* Top right cluster */}
        <div className="absolute -top-3 right-12 w-7 h-7 bg-ocean-500 rounded-full"></div>
        <div className="absolute -top-2 right-20 w-4 h-12 bg-ocean-600 rounded-full transform -rotate-45"></div>
        <div className="absolute top-1 -right-4 w-10 h-3 bg-ocean-400 rounded-full transform rotate-30"></div>
        
        {/* Right side elements */}
        <div className="absolute right-6 top-1/4 w-3 h-16 bg-ocean-500 rounded-full transform rotate-15"></div>
        <div className="absolute -right-3 top-1/2 w-8 h-4 bg-ocean-600 rounded-full transform -rotate-20"></div>
        <div className="absolute right-2 top-2/3 w-5 h-8 bg-ocean-400 rounded-full transform rotate-45"></div>
        
        {/* Bottom right cluster */}
        <div className="absolute bottom-6 right-16 w-6 h-6 bg-sunshine-400 rounded-full"></div>
        <div className="absolute bottom-2 right-24 w-4 h-8 bg-sunshine-500 rounded-full transform rotate-25"></div>
        <div className="absolute bottom-12 -right-2 w-5 h-5 bg-sunshine-300 rounded-full"></div>
        <div className="absolute bottom-4 right-8 w-3 h-6 bg-sunshine-400 rounded-full transform -rotate-30"></div>
        
        {/* Left side elements */}
        <div className="absolute -left-4 top-12 w-5 h-14 bg-mint-400 rounded-full transform -rotate-15"></div>
        <div className="absolute left-1 top-6 w-8 h-4 bg-mint-500 rounded-full transform rotate-40"></div>
        <div className="absolute -left-2 bottom-16 w-6 h-10 bg-mint-300 rounded-full transform rotate-20"></div>
        <div className="absolute left-4 bottom-8 w-4 h-4 bg-mint-400 rounded-full"></div>
        
        {/* Top left elements */}
        <div className="absolute top-8 left-12 w-3 h-8 bg-coral-400 rounded-full transform -rotate-35"></div>
        <div className="absolute top-4 left-20 w-5 h-3 bg-coral-500 rounded-full transform rotate-45"></div>
        <div className="absolute top-16 left-6 w-4 h-6 bg-coral-300 rounded-full transform rotate-60"></div>
        
        {/* Bottom left cluster */}
        <div className="absolute bottom-8 left-20 w-4 h-4 bg-coral-500 rounded-full"></div>
        <div className="absolute bottom-12 left-28 w-3 h-7 bg-coral-400 rounded-full transform rotate-50"></div>
        
        {/* Additional scattered elements */}
        <div className="absolute top-20 right-32 w-2 h-5 bg-ocean-400 rounded-full transform rotate-70"></div>
        <div className="absolute bottom-20 left-36 w-3 h-3 bg-sunshine-300 rounded-full"></div>
      </div>

      {/* Main oval video container with gradient border */}
      <div className="relative w-full h-full">
        {/* Gradient border background */}
        <div className="absolute inset-0 rounded-full overflow-hidden shadow-xl">
          <video
            src={src}
            className="w-full h-full object-cover transform -rotate-12 scale-150"
            loop
            muted
            autoPlay
            playsInline
            preload="metadata"
            controls={false}
          />
        </div>
        {/* Gradient border overlay */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-mint-400 via-coral-400 to-ocean-500 bg-clip-border pointer-events-none"></div>
      </div>
    </div>
  );
};

export default CircularVideoPlayer;