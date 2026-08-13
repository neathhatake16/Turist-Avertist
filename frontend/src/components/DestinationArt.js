import CategoryIcon from "./CategoryIcon";
import { categoryStyle } from "@/lib/categoryStyle";
import {
  categories,
  commonsImageUrl,
  commonsFileUrl,
} from "@/lib/destinations";

// Destination visual: a real photo (sourced from Wikimedia Commons) framed
// with the gopura silhouette clip-path when one is available; otherwise an
// illustrated gradient + icon panel as a graceful fallback. `showCredit`
// prints a small Commons attribution link — used on larger, single-subject
// placements (hero, gallery) and skipped on dense card grids.
export default function DestinationArt({
  category,
  image,
  name,
  size = "card",
  className = "",
  showCredit = false,
  plain = false,
}) {
  const style = categoryStyle[category] || categoryStyle.heritage;
  const iconSize =
    size === "hero"
      ? "w-28 h-28"
      : size === "gallery"
        ? "w-20 h-20"
        : "w-14 h-14";

  if (image) {
    return (
      <div
        className={`${
          plain ? "" : "gopura-frame"
        } relative w-full overflow-hidden bg-jungle-950 ${className}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={commonsImageUrl(image, size === "hero" ? 1600 : 900)}
          alt={name ? `${name}, Cambodia` : "Cambodia destination"}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {showCredit && (
          <a
            href={commonsFileUrl(image)}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-1.5 right-2 text-[10px] font-mono-data text-sandstone-100/80 bg-jungle-950/50 px-1.5 py-0.5 rounded hover:text-gold-300"
          >
            photo: Wikimedia Commons
          </a>
        )}
      </div>
    );
  }

  return (
    <div
      className={`gopura-frame relative w-full overflow-hidden bg-gradient-to-br ${style.gradient} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay {
    background-image: repeating-linear-gradient(45deg,#000 0px,#000 1px,transparent 1px,transparent 10px);
}"
      />
      <div
        className={`absolute inset-0 flex items-center justify-center ${style.ink} opacity-90`}
      >
        <CategoryIcon
          name={categories.find((c) => c.id === category)?.icon}
          className={iconSize}
        />
      </div>
    </div>
  );
}
