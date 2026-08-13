import DestinationsClient from "@/components/DestinationsClient";

export default async function DestinationsPage({ searchParams }) {
  const sp = (await searchParams) || {};
  const q = typeof sp.q === "string" ? sp.q : "";
  const category = typeof sp.category === "string" ? sp.category : "";

  return (
    <>
      <section className="bg-jungle-950 text-sandstone-100 py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-mono-data text-xs tracking-[0.3em] uppercase text-gold-400 mb-2">
            All destinations
          </p>
          <h1 className="font-display text-4xl">
            Search, filter, find your route
          </h1>
        </div>
      </section>
      <DestinationsClient
        key={`${q}-${category}`}
        initialQuery={q}
        initialCategory={category}
      />
    </>
  );
}
