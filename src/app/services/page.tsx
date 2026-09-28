import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Pickiworld's full range of BPO services — voice support, non-voice back office, customer experience, technical support, e-commerce support, and accounting/KPO.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Every BPO Service Your Business Needs"
        description="Pick a single service or combine several into one outsourced operation — our teams flex to whatever channel mix your customers expect."
      />

      <section className="section-container py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-ink-50 py-20">
        <div className="section-container space-y-16">
          {services.map((service, i) => (
            <AnimatedSection
              key={service.slug}
              direction={i % 2 === 0 ? "left" : "right"}
              className="grid gap-8 md:grid-cols-2 md:items-center"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <h2 className="font-display text-2xl font-bold text-ink-900 md:text-3xl">{service.title}</h2>
                <p className="mt-4 text-ink-500">{service.description}</p>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <ul className="soft-card space-y-3 rounded-2xl p-6">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-ink-800">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-container py-20">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">FAQs</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 md:text-4xl">Common Questions</h2>
        </AnimatedSection>
        <div className="mt-12">
          <FAQAccordion />
        </div>
      </section>

      <CTASection />
    </>
  );
}
