/**
 * Central place for all company / contact details used across the site.
 * Update the values here once you have Pickiworld's real details —
 * every page pulls from this file, so you never have to hunt through components.
 */
export const siteConfig = {
  name: "Pickiworld OPC Pvt Ltd",
  shortName: "Pickiworld",
  tagline: "Your Trusted Business Process Outsourcing Partner",
  description:
    "Pickiworld OPC Pvt Ltd delivers voice, non-voice, and back-office BPO solutions for domestic and international businesses — reliable, scalable, and available around the clock.",
  url: "https://pickiworld.com",

  contact: {
    email: "info@pickiworld.com",
    supportEmail: "support@pickiworld.com",
    careersEmail: "careers@pickiworld.com",
    phoneIndia: "+91 90000 00000",
    phoneIntl: "+1 (000) 000-0000",
    whatsapp: "+91 90000 00000",
    address: "Pickiworld OPC Pvt Ltd, Business Tower, Sector 62, Noida, Uttar Pradesh 201301, India",
  },

  social: {
    linkedin: "https://www.linkedin.com/company/pickiworld",
    twitter: "https://twitter.com/pickiworld",
    facebook: "https://facebook.com/pickiworld",
    instagram: "https://instagram.com/pickiworld",
  },

  // Replace with your own Formspree form ID (free at https://formspree.io) to receive
  // contact-form submissions by email — see the setup guide for step-by-step instructions.
  formspreeId: "YOUR_FORMSPREE_ID",

  businessHours: {
    india: "Mon – Sat, 9:00 AM – 9:00 PM IST",
    global: "24 / 7 for international clients (voice & chat support)",
  },
};

export type SiteConfig = typeof siteConfig;
