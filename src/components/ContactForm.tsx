"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (siteConfig.formspreeId === "YOUR_FORMSPREE_ID") {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-ink-500">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className="w-full rounded-xl border border-ink-900/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition-colors focus:border-brand-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-ink-500">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className="w-full rounded-xl border border-ink-900/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition-colors focus:border-brand-500"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm text-ink-500">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 90000 00000"
            className="w-full rounded-xl border border-ink-900/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition-colors focus:border-brand-500"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm text-ink-500">
            Company (optional)
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Your company"
            className="w-full rounded-xl border border-ink-900/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition-colors focus:border-brand-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="serviceType" className="mb-1.5 block text-sm text-ink-500">
          I&apos;m interested in
        </label>
        <select
          id="serviceType"
          name="serviceType"
          className="w-full rounded-xl border border-ink-900/15 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-brand-500"
          defaultValue="Voice Support"
        >
          <option>Voice Support</option>
          <option>Non-Voice / Back Office</option>
          <option>Customer Experience (Chat/Email)</option>
          <option>Technical Support</option>
          <option>E-commerce & Order Support</option>
          <option>Accounting & KPO</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-ink-500">
          Tell us about your requirement
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Team size, channels, target market (domestic/international), timeline..."
          className="w-full resize-none rounded-xl border border-ink-900/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition-colors focus:border-brand-500"
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send size={16} />
          </>
        )}
      </motion.button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-mint-700">
          <CheckCircle2 size={16} /> Thanks! We&apos;ll get back to you within one business day.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-accent-600">
          <AlertCircle size={16} />
          {siteConfig.formspreeId === "YOUR_FORMSPREE_ID"
            ? "Form isn't connected yet — add your Formspree ID in src/lib/siteConfig.ts (see setup guide)."
            : `Something went wrong. Please email us directly at ${siteConfig.contact.email}.`}
        </p>
      )}
    </form>
  );
}
