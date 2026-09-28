import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import StatsCounter from "@/components/StatsCounter";

export default function ImpactSplit() {
  return (
    <section className="grid md:grid-cols-2">
      <div className="dark-panel relative flex flex-col justify-between overflow-hidden px-6 py-14 md:px-12 md:py-20">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=1200&q=80"
            alt="Pickiworld team collaborating"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="relative z-10">
          <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl">
            Our people are our superpower
          </h2>
          <p className="mt-4 max-w-md text-ink-200">
            Every interaction is people-led. We invest in training,
            recognition, and growth so our agents deliver support that feels
            genuinely human — whether it&apos;s 9 AM in Delhi or 9 PM in
            Dallas.
          </p>
        </div>
        <Link href="/about" className="relative z-10 mt-8 w-fit btn-outline-light">
          Learn more about us <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="flex flex-col justify-center bg-ink-50 px-6 py-14 md:px-12 md:py-20">
        <h2 className="font-display text-3xl font-bold text-ink-900 md:text-4xl">
          Pickiworld at a glance
        </h2>
        <div className="mt-8">
          <StatsCounter />
        </div>
      </div>
    </section>
  );
}
