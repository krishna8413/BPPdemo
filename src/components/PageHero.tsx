import AnimatedSection from "@/components/AnimatedSection";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-50 pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="absolute inset-0 bg-hero-dots bg-[size:22px_22px] opacity-60" />
      <div className="section-container relative text-center">
        <AnimatedSection>
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">{eyebrow}</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-ink-900 md:text-5xl">{title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-ink-500">{description}</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
