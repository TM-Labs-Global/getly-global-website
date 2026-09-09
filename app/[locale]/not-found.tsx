import Link from "next/link";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-24 bg-[var(--canvas)]">
      <div className="w-16 h-16 rounded-3xl bg-white border border-[var(--line)] flex items-center justify-center text-[var(--blue)] shadow-soft mb-6">
        <Compass className="w-8 h-8" />
      </div>
      <h1 className="text-6xl font-extrabold text-[var(--navy)]">404</h1>
      <h2 className="text-2xl font-bold text-[var(--navy)] mt-2">Destination Not Found</h2>
      <p className="text-sm text-[var(--ink-soft)] max-w-md mt-3">
        The page or destination route you are looking for doesn't exist or has been moved.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[var(--blue)] hover:bg-[var(--blue-600)] text-white font-semibold px-6 py-3 rounded-full text-sm shadow-glow transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
