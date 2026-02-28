/*
 * Design Tokens
 * Abgeleitet aus der sichtbaren Markentonalitaet von spotcargohub.com:
 * klare B2B-Ansprache, dunkle Sachlichkeit, warme Gelb-/Orange-Akzente,
 * helle Beige-Flaechen und kontrastreiche CTA-Flaechen.
 * Exakte CSS-Werte waren nicht verifizierbar; die folgenden Werte sind bewusst
 * visuell passende Annaeherungen fuer eine konsistente Ads-Landingpage.
 */
export const tokens = {
  colors: {
    ink: "#171310",
    inkSoft: "#4a3b2e",
    surface: "#f6efe4",
    surfaceStrong: "#ffffff",
    line: "#e7d8c4",
    brand: "#171310",
    brandHover: "#2a221c",
    accent: "#f5cc57",
    accentStrong: "#ef8b2c",
    muted: "#7a6757",
    success: "#b66a1e",
    warning: "#ef8b2c",
  },
  fonts: {
    sans: '"Manrope", "Segoe UI", "Helvetica Neue", Arial, sans-serif',
  },
  radii: {
    sm: "10px",
    md: "18px",
    lg: "28px",
    pill: "999px",
  },
  shadows: {
    sm: "0 10px 30px rgba(23, 19, 16, 0.06)",
    md: "0 18px 50px rgba(23, 19, 16, 0.1)",
    glow: "0 18px 40px rgba(239, 139, 44, 0.18)",
  },
  spacing: {
    section: "clamp(4rem, 7vw, 7rem)",
    container: "min(1120px, calc(100vw - 2rem))",
  },
  buttons: {
    height: "52px",
  },
} as const;

export type HeroVariant = "A" | "B";
