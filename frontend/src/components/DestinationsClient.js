"use client";

import { useMemo, useState } from "react";
import { categories, destinations } from "@/lib/destinations";
import DestinationCard from "@/components/DestinationCard";

export default function DestinationsClient({
  initialQuery = "",
  initialCategory = "",
}) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const cat = category || "all";
    return destinations.filter((d) => {
      const inCategory = cat === "all" || d.category === cat;
      const inQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.region.toLowerCase().includes(q) ||
        (d.tags || []).some((t) => t.toLowerCase().includes(q)) ||
        d.short.toLowerCase().includes(q);
      return inCategory && inQuery;
    });
  }, [query, category]);

  return (
    <section className="py-12 bg-sandstone-100 text-ink-900">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Search */}
        <form
          role="search"
          className="mb-8 max-w-xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="destination-search" className="sr-only">
            Search destinations
          </label>
          <input
            id="destination-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a place, region or tag…"
            className="w-full rounded-full border border-gold-600/20 bg-white pl-4 pr-10 py-2.5 text-sm text-ink-900 placeholder:text-ink-700/50 focus:outline-none focus:ring-2 focus:ring-gold-500"
          />
        </form>

        {/* Category filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory("")}
            className={`px-4 py-1.5 text-sm rounded-full transition
              ${
                category === ""
                  ? "bg-gold-500 text-jungle-950 font-semibold"
                  : "bg-jungle-950/10 text-ink-700 hover:bg-jungle-950/20"
              }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCategory(c.id)}
              className={`px-4 py-1.5 text-sm rounded-full transition
                ${
                  category === c.id
                    ? "bg-gold-500 text-jungle-950 font-semibold"
                    : "bg-jungle-950/10 text-ink-700 hover:bg-jungle-950/20"
                }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="mb-6 text-sm text-ink-700/80">
          {filtered.length === destinations.length
            ? `Showing all ${destinations.length} destinations`
            : `${filtered.length} of ${destinations.length} destinations`}
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-ink-700/60 py-16">
            No destinations match your search. Try another term or category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((d) => (
              <DestinationCard key={d.slug} destination={d} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
