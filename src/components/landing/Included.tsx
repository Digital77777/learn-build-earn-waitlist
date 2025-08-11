import { CheckCircle2 } from "lucide-react";

const Included = () => {
  const benefits = [
    "Free Tier for university students",
    "Early access to premium templates",
    "Priority gig and internship listings",
    "Exclusive live launch webinar",
  ];

  return (
    <section id="included" aria-labelledby="included-title" className="bg-muted/40">
      <div className="container py-12 md:py-16">
        <h2 id="included-title" className="text-center text-2xl font-bold md:text-3xl">
          What’s Included for Students
        </h2>
        <div className="mx-auto mt-8 max-w-3xl rounded-xl border bg-card p-6 shadow-sm">
          <ul className="grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" aria-hidden />
                <span className="text-sm text-foreground">{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Free for verified university students at launch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Included;
