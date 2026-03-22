export default function Motto() {
  return (
    <section
      className="photo-bg py-24 px-6 text-center overflow-hidden"
    >
      <div>
        <div
          className="font-light leading-tight mb-6"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(22px, 4vw, 42px)",
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
