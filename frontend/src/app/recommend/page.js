"use client";

import { useMemo, useState } from "react";
import DestinationCard from "@/components/DestinationCard";
import { categories, destinations, budgetTiers } from "@/lib/destinations";

const styleOptions = [
  { id: "relaxed", label: "Relaxed", difficulties: ["Easy"] },
  { id: "balanced", label: "Balanced", difficulties: ["Easy", "Moderate"] },
  { id: "active", label: "Active", difficulties: ["Moderate", "Challenging"] },
];

const lengthOptions = [
  { id: "short", label: "3 – 5 days" },
  { id: "medium", label: "6 – 10 days" },
  { id: "long", label: "10+ days" },
];

const steps = ["Interests", "Travel style", "Trip length", "Budget"];

export default function RecommendPage() {
  const [step, setStep] = useState(0);
  const [interests, setInterests] = useState([]);
  const [style, setStyle] = useState("balanced");
  const [length, setLength] = useState("medium");
  const [tier, setTier] = useState("mid");
  const [done, setDone] = useState(false);

  function toggleInterest(id) {
    setInterests((prev) => {
      if (prev.includes(id)) return prev.filter((i) => i !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  }

  const results = useMemo(() => {
    const chosenDifficulties =
      styleOptions.find((s) => s.id === style)?.difficulties || [];
    const scored = destinations.map((d) => {
      let score = 0;
      if (interests.includes(d.category)) score += 4;
      if (chosenDifficulties.includes(d.difficulty)) score += 2;
      if (d.rating >= 4.6) score += 1;
      return { d, score };
    });
    return scored
      .sort((a, b) => b.score - a.score || b.d.rating - a.d.rating)
      .slice(0, 3)
      .map((s) => s.d);
  }, [interests, style]);

  function restart() {
    setStep(0);
    setInterests([]);
    setStyle("balanced");
    setLength("medium");
    setTier("mid");
    setDone(false);
  }

  const canAdvance = step !== 0 || interests.length > 0;

  return (
    <>
      <section className="bg-jungle-950 text-sandstone-100 py-14">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <p className="font-mono-data text-xs tracking-[0.3em] uppercase text-gold-400 mb-2">
            Recommend me
          </p>
          <h1 className="font-display text-4xl">
            Four questions, three matches
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 md:px-8 py-14">
        {!done ? (
          <div>
            <div className="flex items-center gap-2 mb-10">
              {steps.map((s, i) => (
                <div key={s} className="flex-1">
                  <div
                    className={`h-1 rounded-full ${i <= step ? "bg-gold-500" : "bg-sandstone-300"}`}
                  />
                  <p
                    className={`text-[11px] mt-1.5 font-mono-data ${i === step ? "text-laterite-600" : "text-ink-700/50"}`}
                  >
                    {s}
                  </p>
                </div>
              ))}
            </div>

            {step === 0 && (
              <div>
                <h2 className="font-display text-2xl mb-1">
                  What pulls you in most?
                </h2>
                <p className="text-sm text-ink-700/60 mb-6">
                  Pick up to three.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => toggleInterest(c.id)}
                      className={`text-left px-5 py-4 rounded-xl border transition-colors ${
                        interests.includes(c.id)
                          ? "bg-laterite-600 border-laterite-600 text-sandstone-100"
                          : "border-gold-600/25 hover:border-gold-500"
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="font-display text-2xl mb-6">
                  How do you like to travel?
                </h2>
                <div className="grid sm:grid-cols-3 gap-3">
                  {styleOptions.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setStyle(s.id)}
                      className={`text-left px-5 py-4 rounded-xl border transition-colors ${
                        style === s.id
                          ? "bg-laterite-600 border-laterite-600 text-sandstone-100"
                          : "border-gold-600/25 hover:border-gold-500"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="font-display text-2xl mb-6">
                  How long is the trip?
                </h2>
                <div className="grid sm:grid-cols-3 gap-3">
                  {lengthOptions.map((l) => (
                    <button
                      key={l.id}
                      onClick={() => setLength(l.id)}
                      className={`text-left px-5 py-4 rounded-xl border transition-colors ${
                        length === l.id
                          ? "bg-laterite-600 border-laterite-600 text-sandstone-100"
                          : "border-gold-600/25 hover:border-gold-500"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="font-display text-2xl mb-6">
                  What&apos;s your comfort level?
                </h2>
                <div className="grid gap-3">
                  {budgetTiers.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTier(t.id)}
                      className={`text-left px-5 py-4 rounded-xl border transition-colors ${
                        tier === t.id
                          ? "bg-laterite-600 border-laterite-600 text-sandstone-100"
                          : "border-gold-600/25 hover:border-gold-500"
                      }`}
                    >
                      <p className="font-medium">{t.label}</p>
                      <p
                        className={`text-xs mt-0.5 ${tier === t.id ? "text-sandstone-200/80" : "text-ink-700/60"}`}
                      >
                        {t.note}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-10">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="text-sm text-ink-700/60 hover:text-ink-900 disabled:opacity-0"
              >
                ← Back
              </button>
              {step < steps.length - 1 ? (
                <button
                  onClick={() => canAdvance && setStep((s) => s + 1)}
                  disabled={!canAdvance}
                  className="bg-gold-500 hover:bg-gold-600 disabled:opacity-40 text-jungle-950 font-medium px-6 py-2.5 rounded-full transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={() => setDone(true)}
                  className="bg-gold-500 hover:bg-gold-600 text-jungle-950 font-medium px-6 py-2.5 rounded-full transition-colors"
                >
                  See my matches
                </button>
              )}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl">Your top matches</h2>
              <button
                onClick={restart}
                className="text-sm text-laterite-600 hover:text-laterite-500"
              >
                Start over
              </button>
            </div>
            {results.length === 0 ? (
              <p className="text-sm text-ink-700/60">
                No strong matches — try different interests.
              </p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((d) => (
                  <DestinationCard key={d.slug} destination={d} />
                ))}
              </div>
            )}
            <p className="text-xs text-ink-700/50 mt-8">
              Matched on your selected interests, travel style
              {length
                ? `, a ${lengthOptions.find((l) => l.id === length)?.label.toLowerCase()} trip`
                : ""}{" "}
              and {budgetTiers.find((t) => t.id === tier)?.label.toLowerCase()}{" "}
              comfort.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
