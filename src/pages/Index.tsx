// Update this page (the content is just a fallback if you fail to update the page)

import CircularVideoPlayer from '@/components/CircularVideoPlayer';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-8">
      <div className="text-center space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Circular Video Player</h1>
          <p className="text-xl text-muted-foreground">Click to play/pause the video</p>
        </div>
        
        <CircularVideoPlayer 
          src="/sample-video.mp4"
          size={400}
        />
      </div>
    </div>
  );
};

export default Index;
