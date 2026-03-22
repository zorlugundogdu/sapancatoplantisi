import { imgSrc, photoBgStyle } from "./PhotoBg";

interface FooterContent {
  logos: string[];
  copy: string;
}

export default function Footer({ data }: { data: FooterContent }) {
  return (
    <footer
      className="photo-bg py-12 px-6 text-center"
      style={{ borderTop: "1px solid rgba(201,169,110,0.15)" }}
    >
      <div className="photo-bg-img" style={photoBgStyle()} />
      <div className="photo-bg-overlay" />
      {/* Logos */}
      <div className="flex items-center justify-center gap-8 mb-6 flex-wrap">
        <img
          src={imgSrc("/avene-logo.png")}
          alt="Avène"
          style={{ objectFit: "contain", opacity: 0.5, maxHeight: "38px", maxWidth: "100px" }}
        />
        <div className="w-px h-6 opacity-20" style={{ background: "var(--gold)" }} />
        <img
          src={imgSrc("/ducray-logo.png")}
          alt="Ducray"
          style={{ objectFit: "contain", opacity: 0.5, maxHeight: "38px", maxWidth: "90px" }}
        />
        <div className="w-px h-6 opacity-20" style={{ background: "var(--gold)" }} />
        <span
          className="font-light tracking-widest opacity-40"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", color: "var(--gold-light)" }}
        >
          Pierre Fabre
        </span>
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
