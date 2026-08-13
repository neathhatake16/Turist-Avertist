import Link from "next/link";
import { notFound } from "next/navigation";

import DestinationArt from "@/components/DestinationArt";
import DestinationCard from "@/components/DestinationCard";

import {
  destinations,
  categories,
  getDestinationBySlug,
  budgetTiers,
  tierDailyTotal,
} from "@/lib/destinations";

export function generateStaticParams() {
  return destinations.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return {};
  }

  return {
    title: `${destination.name} | Reclaimed`,
    description: destination.short,
  };
}

export default async function DestinationDetailPage({ params }) {
  const { slug } = await params;

  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const cat = categories.find(
    (category) => category.id === destination.category,
  );

  const related = destinations
    .filter(
      (d) => d.category === destination.category && d.slug !== destination.slug,
    )
    .slice(0, 3);

  return (
    <main className="bg-sandstone-100 text-ink-900">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-8 md:px-8">
        {/* BACK */}
        <Link
          href="/destinations"
          className="mb-8 inline-flex items-center gap-2 text-sm text-jungle-700 transition hover:text-gold-500"
        >
          <span className="text-xl">←</span>
          All destinations
        </Link>

        {/* HERO IMAGE */}
        <div className="relative h-[550px] overflow-hidden rounded-[2rem] md:h-[700px]">
          <DestinationArt
            category={destination.category}
            image={destination.image}
            name={destination.name}
            size="hero"
            showCredit
            plain
            className="h-full"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/5" />

          {/* HERO CONTENT */}
          <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-12 lg:p-16">
            {/* CATEGORY */}
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono-data text-xs uppercase tracking-[0.25em] text-gold-300">
                {cat?.label || destination.category}
              </span>

              <span className="text-white/50">·</span>

              <span className="font-mono-data text-xs uppercase tracking-[0.25em] text-white/70">
                {destination.location}
              </span>
            </div>

            {/* TITLE */}
            <h1 className="max-w-4xl font-display text-5xl font-bold uppercase tracking-tight md:text-7xl lg:text-8xl">
              {destination.name}
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
              {destination.description}
            </p>

            {/* TAGS */}
            {destination.tags?.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {destination.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-2 font-mono-data text-xs uppercase tracking-wider backdrop-blur-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT + QUICK FACTS
      ====================================================== */}

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <div>
            {/* WIKIMEDIA */}
            {destination.wikimedia && (
              <div className="rounded-2xl border border-gold-600/20 bg-sandstone-200 p-6 md:p-8">
                <p className="font-mono-data text-xs uppercase tracking-[0.25em] text-laterite-600">
                  More information
                </p>

                <h2 className="mt-2 font-display text-2xl">
                  Wikimedia Commons
                </h2>

                {destination.wikimedia.description && (
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-ink-700">
                    {destination.wikimedia.description}
                  </p>
                )}

                {destination.wikimedia.url && (
                  <a
                    href={destination.wikimedia.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-medium text-yellow-400 transition hover:bg-laterite-700"
                  >
                    View on Wikimedia Commons
                    <span>↗</span>
                  </a>
                )}

                {destination.wikimedia.credit && (
                  <p className="mt-3 text-xs text-ink-700/50 dark:text-ink-400">
                    Source: {destination.wikimedia.credit}
                  </p>
                )}
              </div>
            )}

            {/* HIGHLIGHTS */}
            {destination.highlights?.length > 0 && (
              <div className="mt-12">
                <h2 className="mb-5 font-display text-2xl">Highlights</h2>

                <ul className="grid gap-3 md:grid-cols-2">
                  {destination.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 rounded-xl border border-gold-600/15 bg-white/40 p-4 text-sm text-ink-700"
                    >
                      <span className="mt-0.5 text-gold-600">◆</span>

                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* =================================================
              QUICK FACTS
          ================================================== */}

          <aside className="h-fit rounded-2xl border border-gold-600/20 bg-sandstone-200 p-6">
            <h2 className="mb-5 font-display text-xl">Quick facts</h2>

            <dl className="space-y-4 text-sm">
              {/* Duration */}
              <div className="flex justify-between gap-4">
                <dt className="text-ink-700/60">Suggested time</dt>

                <dd className="font-mono-data">
                  {destination.duration} day
                  {destination.duration > 1 ? "s" : ""}
                </dd>
              </div>

              {/* Difficulty */}
              <div className="flex justify-between gap-4">
                <dt className="text-ink-700/60">Difficulty</dt>

                <dd className="font-mono-data">{destination.difficulty}</dd>
              </div>

              {/* Best time */}
              <div className="flex justify-between gap-4">
                <dt className="text-ink-700/60">Best time to go</dt>

                <dd className="text-right font-mono-data">
                  {destination.bestTime}
                </dd>
              </div>

              {/* Rating */}
              <div className="flex justify-between gap-4">
                <dt className="text-ink-700/60">Rating</dt>

                <dd className="font-mono-data">★ {destination.rating}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ====================================================== */}

      {destination.gallery?.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
          {/* Gallery header */}
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="font-mono-data text-xs uppercase tracking-[0.25em] text-laterite-600">
                Visual journey
              </p>

              <h2 className="mt-2 font-display text-3xl">Gallery</h2>
            </div>

            <span className="hidden text-xs font-mono-data text-ink-700/50 sm:block">
              {destination.gallery.length}{" "}
              {destination.gallery.length === 1 ? "photo" : "photos"}
            </span>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {destination.gallery.map((photo, index) => (
              <div
                key={`${photo.image}-${index}`}
                className={`
                  group relative overflow-hidden rounded-2xl
                  border border-gold-600/15
                  bg-sandstone-200
                  ${
                    index === 0
                      ? "col-span-2 row-span-2 min-h-[420px]"
                      : "min-h-[200px]"
                  }
                `}
              >
                {/* Image */}
                <img
                  src={photo.image}
                  alt={
                    photo.caption ||
                    `${destination.name} gallery image ${index + 1}`
                  }
                  loading={index === 0 ? "eager" : "lazy"}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Caption */}
                {photo.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm text-white">{photo.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =====================================================
          COST
      ====================================================== */}

      <section className="border-y border-gold-600/20 bg-sandstone-200">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <p className="font-mono-data text-xs uppercase tracking-[0.25em] text-laterite-600">
            Travel budget
          </p>

          <h2 className="mb-8 mt-2 font-display text-3xl">
            Estimated cost per day
          </h2>

          {/* Responsive table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-gold-600/25 text-left text-xs font-mono-data uppercase tracking-wide text-ink-700/60">
                  <th className="py-3 pr-6">Tier</th>

                  <th className="py-3 pr-6">Stay</th>

                  <th className="py-3 pr-6">Food</th>

                  <th className="py-3 pr-6">Transport</th>

                  <th className="py-3 pr-6">Activities</th>

                  <th className="py-3">Total</th>
                </tr>
              </thead>

              <tbody className="font-mono-data">
                {budgetTiers.map((tier) => {
                  const cost = destination.costPerDay?.[tier.id];

                  if (!cost) {
                    return null;
                  }

                  return (
                    <tr key={tier.id} className="border-b border-gold-600/10">
                      <td className="py-4 pr-6 font-sans font-medium text-ink-900">
                        {tier.label}
                      </td>

                      <td className="py-4 pr-6">${cost.stay}</td>

                      <td className="py-4 pr-6">${cost.food}</td>

                      <td className="py-4 pr-6">${cost.transport}</td>

                      <td className="py-4 pr-6">${cost.activity}</td>

                      <td className="py-4 font-semibold text-laterite-600">
                        ${tierDailyTotal(destination, tier.id)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Cost estimator link */}
          <Link
            href={`/cost-estimator?add=${destination.slug}`}
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-laterite-600 transition hover:text-laterite-500"
          >
            Add {destination.name} to the cost estimator
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* =====================================================
          RELATED DESTINATIONS
      ====================================================== */}

      {related.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <p className="font-mono-data text-xs uppercase tracking-[0.25em] text-laterite-600">
              Continue exploring
            </p>

            <h2 className="mb-8 mt-2 font-display text-3xl">
              More {cat?.label?.toLowerCase() || "destinations"}
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((destinationItem) => (
                <DestinationCard
                  key={destinationItem.slug}
                  destination={destinationItem}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
