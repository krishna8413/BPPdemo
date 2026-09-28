"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowUpRight, Globe2 } from "lucide-react";
import LottiePlayer from "@/components/LottiePlayer";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { opacity: 0, y: 16, duration: 0.6 })
        .from(".hero-title-line", { opacity: 0, y: 40, duration: 0.8, stagger: 0.12 }, "-=0.3")
        .from(".hero-card", { opacity: 0, y: 30, duration: 0.7 }, "-=0.3")
        .from(".hero-photo", { opacity: 0, scale: 1.08, duration: 1 }, 0);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-white pt-16 md:pt-20">
      <div className="relative h-[560px] w-full md:h-[680px]">
        <div className="hero-photo absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1553775282-20af80779df7?auto=format&fit=crop&w=1800&q=80"
            alt="Pickiworld customer support agent at work"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent md:via-white/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent md:hidden" />

        <div className="hero-card absolute right-6 top-6 hidden h-28 w-28 items-center justify-center rounded-full bg-white/90 shadow-lift md:flex md:right-12 md:top-12">
          <div className="relative h-20 w-20">
            <LottiePlayer path="/lottie/orbit.json" className="h-full w-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-sm font-bold text-ink-900">24/7</span>
              <span className="text-[9px] uppercase tracking-wide text-ink-500">Support</span>
            </div>
          </div>
        </div>

        <div className="section-container relative flex h-full flex-col justify-center pb-24 pt-10 md:pb-32">
          <span className="hero-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-ink-900/10 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-600">
            <Globe2 size={14} /> Domestic &amp; International BPO Partner
          </span>

          <h1 className="mt-6 max-w-xl font-display text-4xl font-bold leading-[1.08] text-ink-900 md:text-5xl lg:text-6xl">
            <span className="hero-title-line block">Reinventing how</span>
            <span className="hero-title-line block">
              <span className="text-gradient">customer support</span>
            </span>
            <span className="hero-title-line block">is done.</span>
          </h1>
        </div>
      </div>

      <div className="section-container relative">
        <div className="hero-card soft-card relative -mt-20 max-w-xl rounded-3xl p-6 md:-mt-28 md:p-8">
          <p className="text-base text-ink-600 md:text-lg">
            Pickiworld OPC Pvt Ltd is the outsourcing partner helping brands
            turn customer experience into a growth engine — for businesses
            across India and around the world.
          </p>
          <p className="mt-3 text-sm text-ink-500">
            We integrate trained people, quality-driven process, and the
            right tools to deliver seamless, scalable support.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-secondary">
              Let&apos;s Talk <ArrowUpRight size={16} />
            </Link>
            <Link href="/about" className="btn-outline">
              See Our Impact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
