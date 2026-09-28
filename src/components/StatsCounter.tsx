"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [inView, motionValue, value]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) ref.current.textContent = String(latest);
    });
  }, [rounded]);

  return (
    <span className="inline-flex items-baseline">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </span>
  );
}

export default function StatsCounter({ light = false }: { light?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-8">
      {stats.map((stat) => (
        <div key={stat.label}>
          <div
            className={`font-display text-4xl font-bold md:text-5xl ${
              light ? "text-mint-300" : "text-brand-600"
            }`}
          >
            <Counter value={stat.value} suffix={stat.suffix} />
          </div>
          <p className={`mt-2 text-sm ${light ? "text-ink-200" : "text-ink-500"}`}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
