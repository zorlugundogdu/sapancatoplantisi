import { imgSrc, photoBgStyle } from "./PhotoBg";

interface VenueContent {
  eyebrow: string;
  title: string;
  titleEmphasis: string;
  titleSuffix: string;
  hotelName: string;
  description: string;
  features: string[];
}

export default function Venue({ data }: { data: VenueContent }) {
  return (
    <section
      id="venue"
      className="photo-bg section-pad overflow-hidden"
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
            {data.titleSuffix}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image placeholder */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ minHeight: "280px", border: "1px solid rgba(201,169,110,0.15)" }}
          >
            <img
              src={imgSrc("/sapancaeliteworld.webp")}
              alt="Elite World Grand Sapanca"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", position: "absolute", inset: 0 }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }}
            />
            <div className="absolute inset-0 flex items-end p-5">
              <span
                className="text-sm font-light tracking-wider"
                style={{ color: "var(--gold-light)", fontFamily: "'Poppins', sans-serif" }}
              >
                Elite World Grand Sapanca
              </span>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3
              className="font-light mb-4 leading-tight"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(26px, 3vw, 36px)",
                color: "#fff",
                whiteSpace: "pre-line",
              }}
            >
              {data.hotelName}
            </h3>
            <p
              className="mb-8 font-light leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px" }}
            >
              {data.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "var(--gold)" }}
                  />
                  <span
                    className="text-sm font-light"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
