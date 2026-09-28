"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <div className="relative mx-auto max-w-2xl text-center">
      <Quote className="mx-auto text-brand-500" size={36} />
      <div className="relative mt-6 min-h-[160px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg text-ink-800 md:text-xl">&ldquo;{current.quote}&rdquo;</p>
            <p className="mt-5 font-display font-semibold text-ink-900">{current.author}</p>
            <p className="text-sm text-ink-500">{current.role}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          aria-label="Previous testimonial"
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 text-ink-500 transition-colors hover:border-brand-500 hover:text-brand-600"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                i === index ? "w-6 bg-brand-500" : "bg-ink-200"
              }`}
            />
          ))}
        </div>
        <button
          aria-label="Next testimonial"
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 text-ink-500 transition-colors hover:border-brand-500 hover:text-brand-600"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
