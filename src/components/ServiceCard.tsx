"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Icon, { type IconName } from "@/components/Icon";
import type { Service } from "@/lib/data";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      id={service.slug}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="soft-card group relative flex flex-col rounded-2xl p-6 transition-shadow hover:shadow-lift"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <Icon name={service.icon as IconName} size={24} />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">{service.title}</h3>
      <p className="mt-2 text-sm text-ink-500">{service.short}</p>
      <ul className="mt-4 space-y-2">
        {service.points.slice(0, 3).map((point) => (
          <li key={point} className="flex items-start gap-2 text-sm text-ink-600">
            <Check size={15} className="mt-0.5 shrink-0 text-mint-600" />
            {point}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-brand-600 opacity-0 transition-opacity group-hover:opacity-100">
        Learn more <ArrowRight size={15} />
      </div>
    </motion.div>
  );
}
