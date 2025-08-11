const logos = ["OpenAI", "Hugging Face", "LangChain", "Supabase", "Vercel"];

const SocialProof = () => {
  return (
    <section aria-labelledby="social-proof">
      <div className="container py-10">
        <h2 id="social-proof" className="sr-only">
          Social Proof
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {logos.map((l) => (
            <div
              key={l}
              className="rounded-md border bg-card px-3 py-1 text-xs text-muted-foreground shadow-sm"
              aria-label={`${l} partner logo`}
            >
              {l}
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          “Our mission is to help students learn faster, build real projects, and earn — all in one place.”
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
