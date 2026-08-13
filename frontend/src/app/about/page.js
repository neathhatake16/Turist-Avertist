import CategoryIcon from "@/components/CategoryIcon";
import { regions, destinations } from "@/lib/destinations";
import Image from "next/image";

const timeline = [
  {
    era: "9th – 15th c.",
    text: "The Khmer Empire builds Angkor and rules most of mainland Southeast Asia.",
  },
  {
    era: "1863 – 1953",
    text: "French colonial period leaves behind railways, shophouses and hill stations like Bokor and Kep.",
  },
  {
    era: "1975 – 1979",
    text: "Khmer Rouge rule — sites like Tuol Sleng and Choeung Ek are preserved today as memorials.",
  },
  {
    era: "1992",
    text: "Angkor is inscribed as a UNESCO World Heritage Site, opening the door to modern tourism.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-jungle-950 text-sandstone-100 py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="font-mono-data text-xs tracking-[0.3em] uppercase text-gold-400 mb-3">
            About this guide
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight">
            A small country with an outsized amount to see.
          </h1>
          <p className="mt-6 text-sandstone-300/90 leading-relaxed max-w-2xl">
            Cambodia packs temple cities, a low-key coastline, jungle highlands
            and a difficult, important modern history into a country smaller
            than most of its neighbours. This guide exists to make planning a
            first trip less overwhelming — real regions, honest cost ranges, and
            destinations grouped by what actually draws people to them.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 md:px-8 py-16">
        <h2 className="font-display text-2xl mb-6">A very short history</h2>
        <div className="space-y-6">
          {timeline.map((t) => (
            <div key={t.era} className="flex gap-5">
              <p className="font-mono-data text-xs text-laterite-600 w-24 shrink-0 pt-1">
                {t.era}
              </p>
              <p className="text-sm text-ink-700 leading-relaxed border-l border-gold-600/30 pl-5">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sandstone-200 border-y border-gold-600/20 py-16">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <h2 className="font-display text-2xl mb-8">Regions in this guide</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {regions.map((r) => (
              <div
                key={r}
                className="bg-sandstone-100 border border-gold-600/20 rounded-xl p-5"
              >
                <p className="font-display text-lg">{r}</p>
                <p className="text-xs text-ink-700/70 mt-1">
                  {destinations.filter((d) => d.region === r).length}{" "}
                  destinations covered
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-30 bg-sandstone-50">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          {/* Section label */}
          <div className="mb-12">
            <p className="font-mono-data text-xs tracking-[0.3em] uppercase text-laterite-600">
              About me
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center">
            {/* PHOTO */}
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -left-3 -bottom-3 w-full h-full border border-gold-600/30 rounded-2xl" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sandstone-200">
                <Image
                  src="/images/111.jpg"
                  alt="Sopheakneath — creator of DOMNER"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Small label */}
              <div className="absolute bottom-5 left-5 bg-sandstone-100/95 backdrop-blur px-4 py-3 rounded-lg">
                <p className="font-mono-data text-[9px] uppercase tracking-[0.2em] text-laterite-600">
                  Creator
                </p>

                <p className="font-display text-lg mt-1">Sopheakneath</p>
              </div>
            </div>

            {/* TEXT */}
            <div>
              <p className="font-mono-data text-xs tracking-[0.25em] uppercase text-laterite-600">
                The person behind Reclaimed
              </p>

              <h2 className="font-display text-4xl md:text-6xl leading-[0.95] mt-5">
                Hi, I'm
                <br />
                <span className="text-gold-700">Sopheakneath.</span>
              </h2>

              <div className="mt-8 space-y-5 max-w-xl">
                <p className="text-base text-ink-700 leading-relaxed">
                  I'm a Year 2 university student with an interest in
                  technology, web development and digital experiences.
                </p>

                <p className="text-sm text-ink-700/80 leading-relaxed">
                  I created Domner as a way to combine my interest in technology
                  with my interest in Cambodia and tourism.
                </p>

                <p className="text-sm text-ink-700/80 leading-relaxed">
                  I wanted to build something that does more than list tourist
                  attractions. The goal is to help people understand the places
                  they visit and discover another side of Cambodia.
                </p>
              </div>

              {/* Personal info */}
              <div className="grid grid-cols-2 gap-6 mt-10 pt-8 border-t border-gold-600/20">
                <div>
                  <p className="font-mono-data text-[10px] uppercase tracking-[0.2em] text-ink-700/50">
                    Role
                  </p>

                  <p className="font-display text-lg mt-2">
                    Student · Developer
                  </p>
                </div>

                <div>
                  <p className="font-mono-data text-[10px] uppercase tracking-[0.2em] text-ink-700/50">
                    Project
                  </p>

                  <p className="font-display text-lg mt-2">Domner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
