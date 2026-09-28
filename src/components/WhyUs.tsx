import LottiePlayer from "@/components/LottiePlayer";
import AnimatedSection from "@/components/AnimatedSection";

const reasons = [
  {
    title: "Domestic & International Expertise",
    description:
      "Dedicated teams for Indian businesses and shift-aligned teams for US, UK, Canada, Australia & Middle East clients.",
  },
  {
    title: "Fast Go-Live",
    description: "New support teams trained and live within 2–4 weeks of your discovery call.",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden costs — pay for the seats and hours you actually need, with room to scale.",
  },
  {
    title: "Data Security First",
    description: "NDA-backed engagements, access controls, and secure infrastructure on every project.",
  },
  {
    title: "Quality Monitoring",
    description: "Ongoing CSAT/QA tracking so support quality stays consistent as you scale.",
  },
  {
    title: "Flexible Engagement",
    description: "Scale your team up or down with demand — no rigid long-term lock-ins.",
  },
];

export default function WhyUs() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {reasons.map((reason, i) => (
        <AnimatedSection key={reason.title} delay={(i % 2) * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
          <div className="soft-card flex gap-4 rounded-2xl p-5">
            <div className="h-10 w-10 shrink-0">
              <LottiePlayer path="/lottie/check.json" loop={false} className="h-full w-full" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-ink-900">{reason.title}</h3>
              <p className="mt-1.5 text-sm text-ink-500">{reason.description}</p>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
