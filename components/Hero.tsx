"use client";

import { imgSrc } from "./PhotoBg";

interface HeroContent {
  title: string;
  titleEmphasis: string;
  tag: string;
  motto: string;
  location: string;
  venue: string;
  year: string;
}

export default function Hero({ data }: { data: HeroContent }) {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a1e2e 0%, #2a1a2e 50%, #0d3d6e 100%)" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('${imgSrc("/avdu-bg.png")}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Ripple effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="ripple-circle absolute w-96 h-96 rounded-full border"
          style={{ borderColor: "rgba(201,169,110,0.15)" }}
        />
        <div
          className="ripple-circle absolute w-64 h-64 rounded-full border"
          style={{ borderColor: "rgba(201,169,110,0.2)", animationDelay: "1s" }}
        />
      </div>

      {/* Overlay gradient bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to top, #1a1e2e, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto" style={{ padding: "0 clamp(16px, 5vw, 24px)" }}>
        {/* Logos */}
        <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
          <div
            className="flex items-center justify-center rounded-lg px-3 py-2"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}
          >
            <img
              src={imgSrc("/avene-logo.png")}
              alt="Avène"
              style={{ objectFit: "contain", height: "44px", maxWidth: "130px", width: "auto" }}
            />
          </div>
          <div className="w-px h-10 opacity-30" style={{ background: "var(--gold)" }} />
          <div
            className="flex items-center justify-center rounded-lg px-3 py-2"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}
          >
            <img
              src={imgSrc("/ducray-logo.png")}
              alt="Ducray"
              style={{ objectFit: "contain", height: "44px", maxWidth: "110px", width: "auto" }}
            />
          </div>
        </div>

        {/* Tag */}
        <span className="section-eyebrow block mb-5" style={{ fontSize: "10px" }}>{data.tag}</span>

        {/* Title */}
        <h1
          className="font-light leading-tight mb-5"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(26px, 7vw, 64px)", color: "#fff" }}
        >
          {data.title}{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
            {data.titleEmphasis}
          </em>
        </h1>

        {/* Motto */}
        <p
          className="font-light mb-10 opacity-80"
          style={{
            fontSize: "clamp(12px, 3.5vw, 15px)",
            color: "var(--gold-light)",
            fontFamily: "'Poppins', sans-serif",
            fontStyle: "italic",
            fontWeight: 300,
          }}
        >
          {data.motto}
        </p>

        {/* Meta */}
        <div
          className="flex items-center justify-center gap-3 mb-12 flex-wrap"
          style={{ rowGap: "12px" }}
        >
          {[
            { value: data.location, label: "Lokasyon" },
            { value: data.venue, label: "Venue" },
            { value: data.year, label: "Sezon" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              {i > 0 && (
                <div className="w-px h-6 opacity-20 hidden xs:block" style={{ background: "var(--gold)" }} />
              )}
              <div className="text-center">
                <div className="font-medium text-xs text-white">{item.value}</div>
                <div className="uppercase tracking-widest opacity-50" style={{ fontSize: "8px", color: "var(--gold-light)" }}>{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={() =>
          document.getElementById("venue")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer bg-transparent border-0"
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: "var(--gold)", fontSize: "9px" }}
        >
          Keşfet
        </span>
        <div className="scroll-hint-arrow w-px h-8" style={{ background: "var(--gold)" }} />
      </button>
    </section>
  );
}
