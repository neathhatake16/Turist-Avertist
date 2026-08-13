import Link from "next/link";
import DestinationArt from "./DestinationArt";
import { categories, tierDailyTotal } from "@/lib/destinations";

export default function DestinationCard({ destination }) {
  const cat = categories.find((c) => c.id === destination.category);
  const midDaily = tierDailyTotal(destination, "mid");

  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group block bg-sandstone-200 border border-gold-600/20 rounded-2xl overflow-hidden hover:border-gold-500/60 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative">
        <DestinationArt
          category={destination.category}
          image={destination.image}
          name={destination.name}
          className="aspect-4/3"
        />
        <span className="absolute top-3 left-3 text-[11px] font-mono-data uppercase tracking-wide bg-jungle-950/80 text-gold-300 px-2.5 py-1 rounded-full">
          {cat?.label}
        </span>
        <span className="absolute top-3 right-3 text-[11px] font-mono-data bg-sandstone-100/90 text-jungle-950 px-2 py-1 rounded-full flex items-center gap-1">
          ★ {destination.rating}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-lg text-ink-900 group-hover:text-laterite-600 transition-colors">
            {destination.name}
          </h3>
        </div>
        <p className="text-xs text-ink-700/70 mt-0.5">{destination.region}</p>
        <p className="text-sm text-ink-700 mt-3 leading-relaxed line-clamp-2">
          {destination.short}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs font-mono-data text-ink-700/80 border-t border-gold-600/15 pt-3">
          <span>
            {destination.duration} day{destination.duration > 1 ? "s" : ""}{" "}
            suggested
          </span>
          <span>from ${midDaily}/day</span>
        </div>
      </div>
    </Link>
  );
}
