# Pickiworld OPC Pvt Ltd — BPO Website

A Next.js + Tailwind CSS website for Pickiworld OPC Pvt Ltd, built for both
domestic (India) and international BPO clients. Animated with Framer Motion,
GSAP (scroll storytelling), and Lottie (icons/illustrations).

See **SETUP_GUIDE.docx** (in this folder) for full, step-by-step instructions
on installing prerequisites, running the site locally, editing content, and
deploying it for free.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit company details

All contact info, phone numbers, email, and social links live in one file:

`src/lib/siteConfig.ts`

Services, industries, testimonials, FAQs, and stats live in:

`src/lib/data.ts`

## Tech stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (UI interactions)
- GSAP + ScrollTrigger (hero & scroll storytelling)
- Lottie (lottie-react) for animated icons/illustrations
- Formspree (free) for the contact form backend

## Deploy for free

Recommended: [Vercel](https://vercel.com) — built by the creators of
Next.js, free tier, connects directly to a GitHub repo. Full steps are in
`SETUP_GUIDE.docx`.
