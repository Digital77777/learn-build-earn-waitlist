import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect, useRef, useState } from "react";

const VideoSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section ref={sectionRef} aria-labelledby="video-section" className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="video-section" className="text-2xl font-bold md:text-3xl">
            See How AI Campus Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover how our platform helps students learn AI, build real projects, and earn while studying
          </p>
          
          <div className={`mt-8 transition-all duration-700 ${isInView ? 'animate-fade-in' : 'opacity-50'}`}>
            <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg border bg-card shadow-lg">
              <iframe
                src={`https://www.youtube.com/embed/ixx1b-S-Ii0?${isInView ? 'autoplay=1&mute=1&' : ''}controls=1&rel=0`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="AI Campus Platform Overview"
              />
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