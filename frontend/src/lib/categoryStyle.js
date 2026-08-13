// Visual style for the fallback (illustrated) destination art panel.
// Each category maps to a Tailwind gradient (bg-gradient-to-br from/to)
// and an ink (text) color used for the icon. Palette is limited to the
// custom theme colors defined in globals.css.
export const categoryStyle = {
  heritage: {
    gradient: "from-gold-600 to-gold-500",
    ink: "text-jungle-950",
  },
  nature: {
    gradient: "from-jungle-700 to-river-700",
    ink: "text-sandstone-100",
  },
  beach: {
    gradient: "from-sandstone-200 to-sandstone-300",
    ink: "text-jungle-800",
  },
  memorial: {
    gradient: "from-ink-900 to-ink-700",
    ink: "text-gold-300",
  },
  adventure: {
    gradient: "from-laterite-600 to-ink-900",
    ink: "text-sandstone-100",
  },
  city: {
    gradient: "from-jungle-800 to-ink-700",
    ink: "text-gold-300",
  },
};

export default categoryStyle;
