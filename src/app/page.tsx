import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import ImpactSplit from "@/components/ImpactSplit";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import IndustriesGrid from "@/components/IndustriesGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactSplit />

      <section className="section-container py-20">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">What We Do</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 md:text-4xl">
            Outsourcing Services Built Around Your Business
          </h2>
          <p className="mt-4 text-ink-500">
            From front-line customer conversations to back-office operations,
            Pickiworld covers the full spectrum of BPO services for domestic
            and international clients.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/services" className="btn-outline">
            View All Services <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="bg-ink-50 py-20">
        <div className="section-container">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">Industries</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 md:text-4xl">
              Trusted Across Industries
            </h2>
            <p className="mt-4 text-ink-500">
              We adapt our teams and processes to the compliance, tone, and
              tooling each industry demands.
            </p>
          </AnimatedSection>
          <div className="mt-12">
            <IndustriesGrid />
          </div>
        </div>
      </section>

      <section className="section-container py-20">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">How It Works</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 md:text-4xl">
            From First Call to Fully Live Team
          </h2>
        </AnimatedSection>
        <div className="mt-16">
          <ProcessTimeline />
        </div>
      </section>

      <section className="bg-ink-50 py-20">
        <div className="section-container">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">Why Pickiworld</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink-900 md:text-4xl">
              Built for Domestic & International Scale
            </h2>
          </AnimatedSection>
          <div className="mt-12">
            <WhyUs />
          </div>
        </div>
      </section>

      <section className="section-container py-20">
        <Testimonials />
      </section>

      <CTASection />
    </>
  );
}
