import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section-container flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <span className="font-display text-6xl font-bold text-gradient">404</span>
      <h1 className="mt-4 font-display text-2xl font-bold text-ink-900 md:text-3xl">Page Not Found</h1>
      <p className="mt-3 max-w-md text-ink-500">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-secondary mt-8">
        Back to Home <ArrowUpRight size={16} />
      </Link>
    </section>
  );
}
