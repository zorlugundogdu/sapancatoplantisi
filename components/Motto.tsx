export default function Motto() {
  return (
    <section
      className="relative py-24 px-6 text-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0d1220 0%, #1a0a1e 50%, #0d1220 100%)",
      }}
    >
      {/* Glow */}
      <div
        className="glow-pulse absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10">
        <div
          className="font-light leading-tight mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(28px, 5vw, 52px)",
          }}
        >
          <span style={{ color: "var(--gold)" }}>Cilt Konuşur,</span>
          <span style={{ color: "rgba(255,255,255,0.85)" }}> Uzman Anlar</span>
        </div>

        <div
          className="mx-auto mb-6"
          style={{
            width: "60px",
            height: "1px",
            background: "linear-gradient(to right, transparent, var(--gold), transparent)",
          }}
        />

        <p
          className="font-light tracking-widest text-xs uppercase"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Avène &amp; Ducray · Sapanca 2025 · Eczane Uzmanları Buluşması
        </p>
      </div>
    </section>
  );
}
