"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  destinations,
  getDestinationBySlug,
  budgetTiers,
} from "@/lib/destinations";

export default function CostEstimatorClient({ initialAdd = "" }) {
  const [selected, setSelected] = useState(() => {
    const first = initialAdd
      ? getDestinationBySlug(initialAdd)
      : destinations[0];
    return first ? [{ slug: first.slug, days: first.duration }] : [];
  });
  const [travelers, setTravelers] = useState(2);
  const [tier, setTier] = useState("mid");
  const [toAdd, setToAdd] = useState("");

  const available = destinations.filter(
    (d) => !selected.some((s) => s.slug === d.slug),
  );

  function addDestination(slug) {
    const d = getDestinationBySlug(slug);
    if (!d) return;
    setSelected((prev) => [...prev, { slug: d.slug, days: d.duration }]);
    setToAdd("");
  }

  function removeDestination(slug) {
    setSelected((prev) => prev.filter((s) => s.slug !== slug));
  }

  function setDays(slug, days) {
    setSelected((prev) =>
      prev.map((s) =>
        s.slug === slug ? { ...s, days: Math.max(1, days) } : s,
      ),
    );
  }

  const breakdown = useMemo(() => {
    const rows = selected.map(({ slug, days }) => {
      const d = getDestinationBySlug(slug);
      const c = d.costPerDay[tier];
      const stay = c.stay * days * travelers;
      const food = c.food * days * travelers;
      const transport = c.transport * days * travelers;
      const activity = c.activity * days * travelers;
      return {
        destination: d,
        days,
        stay,
        food,
        transport,
        activity,
        total: stay + food + transport + activity,
      };
    });
    const totals = rows.reduce(
      (acc, r) => ({
        stay: acc.stay + r.stay,
        food: acc.food + r.food,
        transport: acc.transport + r.transport,
        activity: acc.activity + r.activity,
        total: acc.total + r.total,
      }),
      { stay: 0, food: 0, transport: 0, activity: 0, total: 0 },
    );
    const totalDays = selected.reduce((sum, s) => sum + s.days, 0);
    return { rows, totals, totalDays };
  }, [selected, tier, travelers]);

  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 grid lg:grid-cols-[1fr_360px] gap-10">
      <div>
        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          <div className="bg-sandstone-200 border border-gold-600/20 rounded-xl p-5">
            <label className="text-xs font-mono-data uppercase tracking-widest text-ink-700/60 block mb-2">
              Travelers
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setTravelers((t) => Math.max(1, t - 1))}
                className="w-9 h-9 rounded-full border border-gold-600/30 hover:border-gold-500"
                aria-label="Decrease travelers"
              >
                −
              </button>
              <span className="font-mono-data text-lg w-6 text-center">
                {travelers}
              </span>
              <button
                onClick={() => setTravelers((t) => Math.min(12, t + 1))}
                className="w-9 h-9 rounded-full border border-gold-600/30 hover:border-gold-500"
                aria-label="Increase travelers"
              >
                +
              </button>
            </div>
          </div>
          <div className="bg-sandstone-200 border border-gold-600/20 rounded-xl p-5">
            <label className="text-xs font-mono-data uppercase tracking-widest text-ink-700/60 block mb-2">
              Comfort tier
            </label>
            <div className="flex gap-2">
              {budgetTiers.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTier(t.id)}
                  className={`flex-1 text-xs font-mono-data px-2 py-2 rounded-lg border transition-colors ${
                    tier === t.id
                      ? "bg-laterite-600 text-sandstone-100 border-laterite-600"
                      : "border-gold-600/30 hover:border-gold-500"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-ink-700/50 mt-2">
              {budgetTiers.find((t) => t.id === tier)?.note}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-5">
          <select
            value={toAdd}
            onChange={(e) => e.target.value && addDestination(e.target.value)}
            className="flex-1 bg-sandstone-200 border border-gold-600/25 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            <option value="">+ Add a destination to your route…</option>
            {available.map((d) => (
              <option key={d.slug} value={d.slug}>
                {d.name} — {d.region}
              </option>
            ))}
          </select>
        </div>

        {breakdown.rows.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-gold-600/30 rounded-2xl">
            <p className="font-display text-lg mb-1">Your route is empty</p>
            <p className="text-sm text-ink-700/60">
              Add a destination above to start estimating.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {breakdown.rows.map((r) => (
              <div
                key={r.destination.slug}
                className="flex flex-wrap items-center gap-4 bg-sandstone-200 border border-gold-600/20 rounded-xl px-5 py-4"
              >
                <div className="flex-1 min-w-[140px]">
                  <Link
                    href={`/destinations/${r.destination.slug}`}
                    className="font-display hover:text-laterite-600"
                  >
                    {r.destination.name}
                  </Link>
                  <p className="text-xs text-ink-700/60">
                    {r.destination.region}
                  </p>
                </div>
                <label className="flex items-center gap-2 text-xs text-ink-700/70">
                  Days
                  <input
                    type="number"
                    min={1}
                    max={14}
                    value={r.days}
                    onChange={(e) =>
                      setDays(r.destination.slug, Number(e.target.value))
                    }
                    className="w-14 bg-sandstone-100 border border-gold-600/25 rounded px-2 py-1 text-sm text-center"
                  />
                </label>
                <p className="font-mono-data text-laterite-600 w-20 text-right">
                  ${r.total}
                </p>
                <button
                  onClick={() => removeDestination(r.destination.slug)}
                  aria-label={`Remove ${r.destination.name}`}
                  className="text-ink-700/40 hover:text-laterite-600"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Summary */}
      <aside className="h-fit bg-jungle-950 text-sandstone-100 rounded-2xl p-7 lg:sticky lg:top-24">
        <p className="font-mono-data text-xs tracking-[0.3em] uppercase text-gold-400 mb-1">
          Estimate
        </p>
        <p className="font-display text-4xl mb-1">
          ${breakdown.totals.total.toLocaleString()}
        </p>
        <p className="text-xs text-sandstone-300/60 mb-6">
          {breakdown.totalDays} trip-day{breakdown.totalDays === 1 ? "" : "s"} ·{" "}
          {travelers} traveler{travelers > 1 ? "s" : ""} ·{" "}
          {budgetTiers.find((t) => t.id === tier)?.label}
        </p>
        <dl className="space-y-2.5 text-sm border-t border-white/10 pt-5">
          <div className="flex justify-between">
            <dt className="text-sandstone-300/70">Accommodation</dt>
            <dd className="font-mono-data">
              ${breakdown.totals.stay.toLocaleString()}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-sandstone-300/70">Food</dt>
            <dd className="font-mono-data">
              ${breakdown.totals.food.toLocaleString()}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-sandstone-300/70">Local transport</dt>
            <dd className="font-mono-data">
              ${breakdown.totals.transport.toLocaleString()}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-sandstone-300/70">Activities & entry fees</dt>
            <dd className="font-mono-data">
              ${breakdown.totals.activity.toLocaleString()}
            </dd>
          </div>
        </dl>
        <div className="border-t border-white/10 mt-5 pt-5 flex justify-between text-sm">
          <span className="text-sandstone-300/70">Per traveler</span>
          <span className="font-mono-data">
            $
            {travelers > 0
              ? Math.round(breakdown.totals.total / travelers).toLocaleString()
              : 0}
          </span>
        </div>
        <p className="text-[11px] text-sandstone-300/40 mt-6 leading-relaxed">
          Estimate only — excludes international flights and visa fees. Figures
          are illustrative for this coursework project.
        </p>
      </aside>
    </div>
  );
}
