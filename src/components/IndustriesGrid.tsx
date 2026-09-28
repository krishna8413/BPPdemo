"use client";

import { motion } from "framer-motion";
import Icon, { type IconName } from "@/components/Icon";
import { industries } from "@/lib/data";

export default function IndustriesGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {industries.map((industry, i) => (
        <motion.div
          key={industry.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
          whileHover={{ scale: 1.04 }}
          className="soft-card flex flex-col items-center gap-3 rounded-2xl px-4 py-8 text-center"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
            <Icon name={industry.icon as IconName} size={22} />
          </div>
          <p className="text-sm font-medium text-ink-800">{industry.name}</p>
        </motion.div>
      ))}
    </div>
  );
}
