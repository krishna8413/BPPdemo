import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { services } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dark-panel border-t border-white/10">
      <div className="section-container py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-mint-400 font-display font-bold text-ink-950">
                P
              </span>
              <span className="font-display font-bold text-lg text-white">
                Picki<span className="text-mint-300">world</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-ink-300 leading-relaxed">
              Create connection. Deliver results. {siteConfig.name} builds
              outsourced customer support and back-office teams for domestic
              and international businesses.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { href: siteConfig.social.linkedin, icon: Linkedin },
                { href: siteConfig.social.twitter, icon: Twitter },
                { href: siteConfig.social.facebook, icon: Facebook },
                { href: siteConfig.social.instagram, icon: Instagram },
              ].map(({ href, icon: SocialIcon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-ink-200 hover:border-mint-400 hover:text-mint-400 transition-colors"
                >
                  <SocialIcon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-ink-300">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="hover:text-mint-300 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-ink-300 mb-8">
              <li><Link href="/about" className="hover:text-mint-300 transition-colors">About Us</Link></li>
              <li><Link href="/industries" className="hover:text-mint-300 transition-colors">Industries</Link></li>
              <li><Link href="/careers" className="hover:text-mint-300 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-mint-300 transition-colors">Contact</Link></li>
            </ul>

            <h4 className="font-display font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-ink-300">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-mint-400" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-mint-400" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-mint-300 transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-mint-400" />
                <a href={`tel:${siteConfig.contact.phoneIndia.replace(/\s/g, "")}`} className="hover:text-mint-300 transition-colors">
                  {siteConfig.contact.phoneIndia}
                </a>
              </li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl min-h-[220px]">
            <Image
              src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?auto=format&fit=crop&w=800&q=80"
              alt="Join the Pickiworld team"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-ink-950/60" />
            <div className="relative z-10 flex h-full flex-col justify-between p-5">
              <p className="font-display text-lg font-bold text-white leading-snug">
                Create your best moments. Join the team.
              </p>
              <Link href="/careers" className="btn-outline-light w-fit text-sm">
                Jobs near you <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ink-400 md:flex-row md:items-center md:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Serving clients across India, the US, UK, Canada, Australia & the Middle East.</p>
        </div>
      </div>
    </footer>
  );
}
