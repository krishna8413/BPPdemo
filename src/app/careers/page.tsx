import type { Metadata } from "next";
import { Briefcase, MapPin, Clock, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Pickiworld OPC Pvt Ltd — explore open roles in voice support, back-office operations, technical support, and more.",
};

const openings = [
  {
    title: "Customer Support Executive (Voice)",
    type: "Full-time",
    location: "Noida, India / Remote",
    shift: "Day & Night Shifts",
  },
  {
    title: "Non-Voice Process Associate",
    type: "Full-time",
    location: "Noida, India",
    shift: "Day Shift",
  },
  {
    title: "Technical Support Specialist",
    type: "Full-time",
    location: "Remote (India)",
    shift: "Rotational Shifts",
  },
  {
    title: "Team Lead – International Process",
    type: "Full-time",
    location: "Noida, India",
    shift: "Night Shift (US/UK aligned)",
  },
];

const perks = [
  "Competitive salary with performance incentives",
  "Structured training & upskilling programs",
  "Growth path into team lead & quality roles",
  "Health & wellness support",
  "Domestic and international project exposure",
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers at Pickiworld"
        title="Build Your Career With Us"
        description="We're always looking for driven people who want to grow with a BPO that's scaling across domestic and international markets."
      />

      <section className="section-container py-20">
        <div className="grid gap-6">
          {openings.map((job, i) => (
            <AnimatedSection key={job.title} delay={i * 0.06}>
              <div className="soft-card flex flex-col gap-4 rounded-2xl p-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink-900">{job.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-ink-500">
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={14} className="text-brand-600" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-brand-600" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-brand-600" /> {job.shift}
                    </span>
                  </div>
                </div>
                <a
                  href={`mailto:${siteConfig.contact.careersEmail}?subject=Application: ${encodeURIComponent(job.title)}`}
                  className="btn-outline shrink-0"
                >
                  Apply Now <ArrowUpRight size={16} />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-8 rounded-2xl border border-dashed border-ink-200 p-6 text-center text-sm text-ink-500">
          Don&apos;t see a role that fits? Send your resume to{" "}
          <a href={`mailto:${siteConfig.contact.careersEmail}`} className="text-brand-600 hover:underline">
            {siteConfig.contact.careersEmail}
          </a>{" "}
          — we're always open to meeting good people.
        </AnimatedSection>
      </section>

      <section className="bg-ink-50 py-20">
        <div className="section-container grid gap-12 md:grid-cols-2 md:items-center">
          <AnimatedSection direction="left">
            <h2 className="font-display text-3xl font-bold text-ink-900">Life at Pickiworld</h2>
            <p className="mt-4 text-ink-500">
              We invest in our people because they're the ones delivering the
              experience our clients and their customers feel every day.
              Whether you're supporting a shopper in Mumbai or a subscriber
              in Manchester, you'll get the training and support to do it
              well.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <ul className="space-y-3">
              {perks.map((perk) => (
                <li
                  key={perk}
                  className="soft-card flex items-start gap-3 rounded-xl p-4 text-sm text-ink-800"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                  {perk}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
