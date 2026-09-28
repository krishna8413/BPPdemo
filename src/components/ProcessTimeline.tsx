"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessTimeline() {
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".process-step").forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative mx-auto max-w-3xl">
      <div className="absolute left-[15px] top-2 bottom-2 w-px bg-ink-100 md:left-1/2">
        <div
          ref={lineRef}
          className="h-full w-full origin-top bg-gradient-to-b from-brand-500 to-mint-400"
          style={{ transform: "scaleY(0)" }}
        />
      </div>

      <div className="flex flex-col gap-12">
        {processSteps.map((step, i) => (
          <div
            key={step.title}
            className={`process-step relative flex items-start gap-6 md:w-1/2 ${
              i % 2 === 0 ? "md:self-start md:pr-10" : "md:self-end md:pl-10 md:text-right md:flex-row-reverse"
            }`}
          >
            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
              {i + 1}
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-ink-900">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-500">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
