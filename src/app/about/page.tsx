import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, HeartHandshake } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import StatsCounter from "@/components/StatsCounter";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Pickiworld OPC Pvt Ltd — a BPO company delivering domestic and international outsourcing solutions with trained teams and transparent pricing.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Pickiworld"
        title="A BPO Partner Built for Growing Businesses"
        description="Pickiworld OPC Pvt Ltd was founded to give businesses of every size — from local Indian startups to international enterprises — access to reliable, professional outsourced teams without the overhead of building an in-house department."
      />

      <section className="section-container py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <AnimatedSection direction="left">
            <h2 className="font-display text-3xl font-bold text-ink-900">Our Story</h2>
            <p className="mt-4 text-ink-500">
              Pickiworld started with a simple observation: great customer
              experience shouldn&apos;t be a privilege reserved for companies
              that can afford large in-house teams. We set out to build a BPO
              that combines the discipline of enterprise-grade processes with
              the agility and pricing of a lean, founder-led company.
            </p>
            <p className="mt-4 text-ink-500">
              Today, we support businesses across e-commerce, healthcare,
              finance, travel, and technology — running voice, chat, email,
              and back-office operations for clients based in India as well
              as the US, UK, Canada, Australia, and the Middle East.
            </p>
            <div className="mt-8">
              <StatsCounter />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1680459575585-390ed5cfcae0?auto=format&fit=crop&w=1000&q=80"
              alt="Pickiworld team at work"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-ink-50 py-20">
        <div className="section-container grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "Make world-class customer support and back-office operations accessible to businesses of every size, everywhere.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To be the go-to outsourcing partner bridging Indian talent with global business needs.",
            },
            {
              icon: HeartHandshake,
              title: "Our Values",
              text: "Transparency, accountability, and genuine partnership — we grow when our clients grow.",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="soft-card h-full rounded-2xl p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <item.icon size={24} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-500">{item.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-container py-20">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink-900 md:text-4xl">Leadership Note</h2>
          <p className="mt-6 text-ink-500">
            &ldquo;We built Pickiworld to prove that a BPO doesn&apos;t need
            to feel like a call center from the outside — it should feel like
            an extension of your own team, wherever in the world you&apos;re
            based.&rdquo;
          </p>
          <p className="mt-4 font-display font-semibold text-ink-900">— Founding Team, Pickiworld OPC Pvt Ltd</p>
        </AnimatedSection>
      </section>

      <CTASection />
    </>
  );
}
