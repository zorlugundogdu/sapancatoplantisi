interface FooterContent {
  logos: string[];
  copy: string;
}

export default function Footer({ data }: { data: FooterContent }) {
  return (
    <footer
      className="py-12 px-6 text-center"
      style={{ background: "#0a0d18", borderTop: "1px solid rgba(201,169,110,0.1)" }}
    >
      {/* Logos */}
      <div className="flex items-center justify-center gap-6 mb-6">
        {data.logos.map((logo, i) => (
          <div key={i} className="flex items-center gap-6">
            {i > 0 && (
              <div
                className="w-px h-4 opacity-20"
                style={{ background: "var(--gold)" }}
              />
            )}
            <span
              className="font-light tracking-widest opacity-60"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "15px",
                color: "var(--gold-light)",
              }}
            >
              {logo}
            </span>
          </div>
        ))}
      </div>

      {/* Copy */}
      <p
        className="font-light"
        style={{ color: "rgba(255,255,255,0.25)", fontSize: "11px", letterSpacing: "0.05em" }}
      >
        {data.copy}
      </p>
    </footer>
  );
}
