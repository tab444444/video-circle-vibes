// Update this page (the content is just a fallback if you fail to update the page)

import CircularVideoPlayer from '@/components/CircularVideoPlayer';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 sm:p-8">
      <div className="text-center space-y-6 sm:space-y-8 max-w-lg mx-auto">
        <div className="space-y-2 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Circular Video Player</h1>
          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground px-4">
            Infinite looping video
          </p>
        </div>
        
        <CircularVideoPlayer 
          src="/sample-video.mp4"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default Index;
