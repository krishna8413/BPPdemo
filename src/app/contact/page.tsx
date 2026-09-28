import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Pickiworld OPC Pvt Ltd for domestic and international BPO services — request a free consultation today.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk About Your Support Needs"
        description="Tell us a bit about your business and we'll get back to you within one business day with a tailored plan."
      />

      <section className="section-container py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
          <AnimatedSection direction="left" className="space-y-6">
            <div className="soft-card rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-ink-500">Email</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-ink-900 hover:text-brand-600">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="soft-card rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-ink-500">Phone</p>
                  <a href={`tel:${siteConfig.contact.phoneIndia.replace(/\s/g, "")}`} className="block font-medium text-ink-900 hover:text-brand-600">
                    {siteConfig.contact.phoneIndia} (India)
                  </a>
                  <a href={`tel:${siteConfig.contact.phoneIntl.replace(/\s/g, "")}`} className="block font-medium text-ink-900 hover:text-brand-600">
                    {siteConfig.contact.phoneIntl} (International)
                  </a>
                </div>
              </div>
            </div>

            <div className="soft-card rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-ink-500">Office</p>
                  <p className="font-medium text-ink-900">{siteConfig.contact.address}</p>
                </div>
              </div>
            </div>

            <div className="soft-card rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-sm text-ink-500">Business Hours</p>
                  <p className="font-medium text-ink-900">{siteConfig.businessHours.india}</p>
                  <p className="text-sm text-ink-500">{siteConfig.businessHours.global}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="soft-card rounded-2xl p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold text-ink-900">Request a Free Consultation</h2>
            <p className="mt-2 text-sm text-ink-500">We usually reply within one business day.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
