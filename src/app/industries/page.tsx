import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import IndustriesGrid from "@/components/IndustriesGrid";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import { Globe2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Pickiworld supports e-commerce, BFSI, healthcare, travel, IT & SaaS, telecom, real estate, and logistics businesses across domestic and international markets.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Domain Expertise Across Sectors"
        description="Every industry has its own compliance rules, customer expectations, and tone of voice — our teams are trained to match yours."
      />

      <section className="section-container py-20">
        <IndustriesGrid />
      </section>

      <section className="bg-ink-50 py-20">
        <div className="section-container grid gap-8 md:grid-cols-2">
          <AnimatedSection direction="left" className="soft-card rounded-2xl p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <MapPin size={24} />
            </div>
            <h2 className="mt-5 font-display text-2xl font-bold text-ink-900">Domestic (India) Clients</h2>
            <p className="mt-3 text-ink-500">
              We help Indian D2C brands, startups, and SMEs set up
              cost-effective customer support and back-office teams that
              speak the language — literally and culturally — of their
              customers, with support in Hindi, English, and regional
              languages.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" className="soft-card rounded-2xl p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Globe2 size={24} />
            </div>
            <h2 className="mt-5 font-display text-2xl font-bold text-ink-900">International Clients</h2>
            <p className="mt-3 text-ink-500">
              Businesses across the US, UK, Canada, Australia, and the Middle
              East rely on Pickiworld for shift-aligned, accent-neutral
              teams that integrate with their existing tools — CRMs, help
              desks, and communication platforms.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-container py-20">
        <Testimonials />
      </section>

      <CTASection />
    </>
  );
}
