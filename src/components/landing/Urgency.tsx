import Countdown from "./Countdown";
import { Button } from "@/components/ui/button";

const Urgency = () => {
  return (
    <section aria-labelledby="urgency" className="bg-muted/40">
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="urgency" className="text-2xl font-bold md:text-3xl">
            Spots for early access are limited — secure yours now.
          </h2>
          <div className="mt-6">
            <Countdown date="2025-08-25T00:00:00Z" />
          </div>
          <div className="mt-6">
            <Button asChild variant="hero" size="xl">
              <a href="#waitlist">Join the Waiting List</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Urgency;
