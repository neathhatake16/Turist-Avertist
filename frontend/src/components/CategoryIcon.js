// Small line-icon set, one per destination category. Kept as inline SVG so
// the whole site works with zero external image requests.

const paths = {
  temple: (
    <>
      <path d="M12 2 7 8h10L12 2Z" />
      <path d="M4 21V10M20 21V10" />
      <path d="M8 21V13h8v8" />
      <path d="M2 21h20" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 21c0-9 6-15 15-15-1 9-7 15-15 15Z" />
      <path d="M5 21c2-4 5-7 9-9" />
    </>
  ),
  wave: (
    <>
      <path d="M2 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" />
      <path d="M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" />
    </>
  ),
  flame: (
    <>
      <path d="M12 22c4 0 6-2.5 6-6 0-2-1-3.5-2-5-.5 2-1.5 3-2.5 2 1-3-1-6-3.5-7 .5 2.5-.5 4-2 5.5C6.5 13 6 14.5 6 16c0 3.5 2 6 6 6Z" />
    </>
  ),
  peak: (
    <>
      <path d="m3 20 6-11 4 6 2-3 6 8Z" />
      <path d="m9 12-1.5 2.5H12" />
    </>
  ),
  gate: (
    <>
      <path d="M4 21V9l8-5 8 5v12" />
      <path d="M4 21h16" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
};

export default function CategoryIcon({ name, className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] || paths.temple}
    </svg>
  );
}
