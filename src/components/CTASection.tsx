import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function CTASection() {
  return (
    <section className="dark-panel">
      <div className="section-container py-20 text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Ready to build a support team that never sleeps?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-300">
            Whether you&apos;re a growing Indian startup or an international
            business looking for a reliable outsourcing partner, Pickiworld
            is ready to plug in.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Request a Free Quote <ArrowUpRight size={18} />
            </Link>
            <Link href="/services" className="btn-outline-light">
              Explore Services
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
