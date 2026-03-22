import { imgSrc, photoBgStyle } from "./PhotoBg";

interface BrandData {
  bgText: string;
  productName: string;
  productTagline: string;
  highlight: string;
  listTitle: string;
  listItems: string[];
}

interface BrandsContent {
  eyebrow: string;
  title: string;
  titleEmphasis: string;
  avene: BrandData;
  ducray: BrandData;
}

function BrandPanel({
  brand,
  type,
}: {
  brand: BrandData;
  type: "avene" | "ducray";
}) {
  const isAvene = type === "avene";
  const accentColor = isAvene ? "var(--avene-coral)" : "var(--ducray-blue)";
  const bgGradient = isAvene
    ? "linear-gradient(135deg, rgba(212,97,74,0.12) 0%, rgba(26,30,46,0.95) 100%)"
    : "linear-gradient(135deg, rgba(26,107,181,0.15) 0%, rgba(13,61,110,0.95) 100%)";

  return (
    <div
      className="relative rounded-2xl p-8 overflow-hidden"
      style={{
        background: bgGradient,
        border: `1px solid ${isAvene ? "rgba(212,97,74,0.2)" : "rgba(26,107,181,0.2)"}`,
      }}
    >
      {/* Logo */}
      <div className="mb-6">
        <img
          src={imgSrc(isAvene ? "/avene-logo.png" : "/ducray-logo.png")}
          alt={isAvene ? "Avène" : "Ducray"}
          style={{ objectFit: "contain", maxHeight: "52px", maxWidth: "140px" }}
        />
      </div>

      {/* Product card */}
      <div
        className="rounded-xl p-4 mb-6 flex items-center gap-4"
        style={{ background: "rgba(255,255,255,0.05)" }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: `rgba(${isAvene ? "212,97,74" : "26,107,181"},0.2)`, border: `1px solid ${accentColor}40` }}
        >
          {isAvene ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3C12 3 6 7 6 12C6 17 12 21 12 21C12 21 18 17 18 12C18 7 12 3 12 3Z"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="1.5"
                fill="rgba(255,255,255,0.1)"
              />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
              <path
                d="M14 4C14 4 8 8 8 14C8 20 14 24 14 24C14 24 20 20 20 14C20 8 14 4 14 4Z"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="1.5"
                fill="rgba(255,255,255,0.1)"
              />
            </svg>
          )}
        </div>
        <div>
          <p className="font-medium text-sm text-white">{brand.productName}</p>
          <p
            className="font-light text-xs mt-0.5"
            style={{ color: "var(--text-light)", lineHeight: 1.45 }}
          >
            {brand.productTagline}
          </p>
        </div>
      </div>

      {/* Highlight quote */}
      <div
        className="rounded-lg p-4 mb-6 text-sm font-light italic leading-relaxed"
        style={{
          background: `rgba(${isAvene ? "212,97,74" : "26,107,181"},0.1)`,
          borderLeft: `3px solid ${accentColor}`,
          color: "rgba(255,255,255,0.75)",
          fontSize: "13px",
        }}
      >
        {brand.highlight}
      </div>

      {/* List */}
      <div>
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: accentColor }}
        >
          {brand.listTitle}
        </p>
        <ul className="space-y-2">
          {brand.listItems.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm font-light"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <span style={{ color: accentColor, marginTop: "2px" }}>✦</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Brands({ data }: { data: BrandsContent }) {
  return (
    <section
      id="brands"
      className="photo-bg py-24 px-6"
    >
      <div className="photo-bg-img" style={photoBgStyle()} />
      <div className="photo-bg-overlay" />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-eyebrow">{data.eyebrow}</span>
          <h2 className="section-title">
            {data.title}
            <br />
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              {data.titleEmphasis}
            </em>
          </h2>
        </div>

        {/* Brand panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BrandPanel brand={data.avene} type="avene" />
          <BrandPanel brand={data.ducray} type="ducray" />
        </div>
      </div>
    </section>
  );
}
