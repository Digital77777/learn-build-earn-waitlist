import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const VideoSection = () => {
  return (
    <section aria-labelledby="video-section" className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="video-section" className="text-2xl font-bold md:text-3xl">
            See How AI Campus Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover how our platform helps students learn AI, build real projects, and earn while studying
          </p>
          
          <div className="mt-8">
            <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg border bg-card shadow-lg">
              {/* Placeholder for video - replace with actual video embed */}
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 backdrop-blur-sm">
                    <Play className="h-8 w-8 text-primary" fill="currentColor" />
                  </div>
                  <h3 className="text-lg font-semibold">Platform Overview Video</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Click to watch how AI Campus transforms learning
                  </p>
                </div>
              </div>
              
              {/* 
              Replace the div above with actual video embed when video is ready:
              <iframe
                src="your-video-url-here"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="AI Campus Platform Overview"
              />
              */}
            </AspectRatio>
          </div>
          
          <div className="mt-6 text-sm text-muted-foreground">
            <p>Learn how students are building AI projects and earning real income</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;