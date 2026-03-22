import Image from "next/image";

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
      {/* Logos */}
      <div className="flex items-center justify-center gap-8 mb-6 flex-wrap">
        <Image
          src="/avene-logo.png"
          alt="Avène"
          width={100}
          height={38}
          style={{ objectFit: "contain", opacity: 0.5, maxHeight: "38px" }}
        />
        <div className="w-px h-6 opacity-20" style={{ background: "var(--gold)" }} />
        <Image
          src="/ducray-logo.png"
          alt="Ducray"
          width={90}
          height={38}
          style={{ objectFit: "contain", opacity: 0.5, maxHeight: "38px" }}
        />
        <div className="w-px h-6 opacity-20" style={{ background: "var(--gold)" }} />
        <span
          className="font-light tracking-widest opacity-40"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "13px", color: "var(--gold-light)" }}
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
