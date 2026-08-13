import Heroslider from "@/components/Heroslider";
import DestinationCard from "@/components/DestinationCard";
import Link from "next/link";

import { destinations } from "@/lib/destinations";

const featured = ["angkor-wat", "koh-rong", "mondulkiri", "tuol-sleng"]
  .map((slug) => destinations.find((d) => d.slug === slug))
  .filter(Boolean);

export default function Home() {
  return (
    <main>
      {/* Cinematic timed hero */}
      <Heroslider />

      {/* Featured destinations */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono-data text-xs uppercase tracking-[0.3em] text-laterite-600">
              Start here
            </p>

            <h2 className="mt-2 font-display text-3xl">
              Places worth building a trip around
            </h2>
          </div>

          <Link
            href="/destinations"
            className="hidden text-sm text-laterite-600 hover:text-laterite-500 sm:block"
          >
            View all {destinations.length} →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>
      </section>
    </main>
  );
}
