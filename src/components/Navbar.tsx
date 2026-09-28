"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-soft" : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2 z-50" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-900 font-display font-bold text-mint-400">
            P
          </span>
          <span className="font-display font-bold text-lg text-ink-900 tracking-tight">
            Picki<span className="text-brand-600">world</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-ink-600 hover:text-brand-600 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:${siteConfig.contact.phoneIndia.replace(/\s/g, "")}`} className="text-sm text-ink-600 hover:text-brand-600 transition-colors">
            {siteConfig.contact.phoneIndia}
          </a>
          <Link href="/contact" className="btn-primary text-sm">
            Get a Quote <ArrowUpRight size={16} />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden z-50 text-ink-900"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 top-0 bg-white z-40 flex flex-col overflow-y-auto"
          >
            <div className="h-16" />
            <motion.ul
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex flex-col gap-2 px-6 pt-8"
            >
              {links.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    closed: { opacity: 0, x: 24 },
                    open: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-2xl font-display font-semibold text-ink-900 border-b border-ink-100"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <div className="mt-auto px-6 pb-10 pt-6 flex flex-col gap-4">
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                Get a Quote <ArrowUpRight size={16} />
              </Link>
              <a href={`tel:${siteConfig.contact.phoneIndia.replace(/\s/g, "")}`} className="text-center text-ink-600">
                Call {siteConfig.contact.phoneIndia}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
