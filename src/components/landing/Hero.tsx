import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";
import { Rocket } from "lucide-react";
import { useCallback, useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mouse-x", `${x}%`);
    el.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  return (
    <header
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden"
    >
      <section className="bg-hero">
        <div className="container py-16 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                <Rocket className="h-4 w-4" aria-hidden />
                <span>Launching August 2025</span>
              </div>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                🎓 Learn AI. Build Projects. Earn While You Study.
              </h1>
              <p className="mt-3 text-base text-muted-foreground md:text-lg">
                Join the Digital Intelligence Marketplace — launching August 2025.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild variant="hero" size="xl">
                  <a href="#waitlist">Join the Waiting List</a>
                </Button>
                <Button asChild variant="accent" size="lg" className="sm:ml-2">
                  <a href="#included">Student Benefits</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Students collaborating and coding AI projects at the AI Campus"
                className="mx-auto w-full max-w-xl rounded-lg border bg-card shadow"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
