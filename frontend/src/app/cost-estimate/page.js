import CostEstimate from "@/components/CostEstimate";

export default async function CostEstimatorPage({ searchParams }) {
  const sp = (await searchParams) || {};
  const add = typeof sp.add === "string" ? sp.add : "";

  return (
    <>
      <section className="bg-jungle-950 text-sandstone-100 py-14">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="font-mono-data text-xs tracking-[0.3em] uppercase text-gold-400 mb-2">
            Plan your budget
          </p>
          <h1 className="font-display text-4xl">What will this route cost?</h1>
        </div>
      </section>
      <CostEstimate key={add} initialAdd={add} />
    </>
  );
}
