import { GraduationCap, Hammer, Wallet } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "Learn",
    desc:
      "Master AI skills with structured learning paths designed for students and early-career builders.",
  },
  {
    icon: Hammer,
    title: "Build",
    desc:
      "Create real projects with AI-powered tools, templates, and guidance from mentors and peers.",
  },
  {
    icon: Wallet,
    title: "Earn",
    desc:
      "Get hired for gigs and internships while you study. Build your portfolio and earn real income.",
  },
];

const ValueProps = () => {
  return (
    <section aria-labelledby="value-prop" className="border-t">
      <div className="container py-12 md:py-16">
        <h2 id="value-prop" className="text-center text-2xl font-bold md:text-3xl">
          Learn • Build • Earn
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
