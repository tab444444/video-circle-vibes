// Update this page (the content is just a fallback if you fail to update the page)

import CircularVideoPlayer from '@/components/CircularVideoPlayer';
const Index = () => {
  return <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 bg-transparent">
      <CircularVideoPlayer src="/sample-video.mp4" className="mx-auto" />
    </div>;
};
export default Index;