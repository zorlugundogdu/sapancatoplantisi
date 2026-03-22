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
      <div className="relative z-10 px-6 max-w-3xl mx-auto">
        {/* Logos */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <div
            className="flex items-center justify-center rounded-lg px-4 py-2"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}
          >
            <img
              src={imgSrc("/avene-logo.png")}
              alt="Avène"
              style={{ objectFit: "contain", maxHeight: "60px", maxWidth: "160px" }}
            />
          </div>
          <div
            className="w-px h-12 opacity-30"
            style={{ background: "var(--gold)" }}
          />
          <div
            className="flex items-center justify-center rounded-lg px-4 py-2"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}
          >
            <img
              src={imgSrc("/ducray-logo.png")}
              alt="Ducray"
              style={{ objectFit: "contain", maxHeight: "60px", maxWidth: "140px" }}
            />
          </div>
        </div>

        {/* Tag */}
        <span className="section-eyebrow block mb-6">{data.tag}</span>

        {/* Title */}
        <h1
          className="font-light leading-tight mb-6"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(32px, 6vw, 64px)", color: "#fff" }}
        >
          {data.title}{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
            {data.titleEmphasis}
          </em>
        </h1>

        {/* Motto */}
        <p
          className="font-light mb-12 opacity-80"
          style={{
            fontSize: "clamp(13px, 1.5vw, 15px)",
            color: "var(--gold-light)",
            fontFamily: "'Poppins', sans-serif",
            fontStyle: "italic",
            fontWeight: 300,
            letterSpacing: "0.04em",
          }}
        >
          {data.motto}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          {[
            { icon: "📍", value: data.location, label: "Lokasyon" },
            { icon: "🏨", value: data.venue, label: "Venue" },
            { icon: "📅", value: data.year, label: "Sezon" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              {i > 0 && (
                <div
                  className="w-px h-8 opacity-20 hidden sm:block"
                  style={{ background: "var(--gold)" }}
                />
              )}
              <div className="text-center">
                <div
                  className="font-semibold text-sm"
                  style={{ color: "#fff" }}
                >
                  {item.value}
                </div>
                <div
                  className="text-xs opacity-60 uppercase tracking-widest"
                  style={{ fontSize: "9px", color: "var(--gold-light)" }}
                >
                  {item.label}
                </div>
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
