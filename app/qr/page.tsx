"use client";

import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://your-username.github.io/avdu-web";

export default function QRPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SITE_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const svg = document.querySelector("#qr-code svg") as SVGElement;
    if (!svg) return;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 400;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      ctx?.drawImage(img, 0, 0, 400, 400);
      const a = document.createElement("a");
      a.download = "avdu-sapanca-qr.png";
      a.href = canvas.toDataURL("image/png");
      a.click();
    };
    img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{ background: "linear-gradient(135deg, #1a1e2e 0%, #2a1a2e 100%)" }}
    >
      <div
        className="w-full max-w-sm rounded-2xl p-8 text-center"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(201,169,110,0.2)",
        }}
      >
        {/* Header */}
        <span
          className="inline-block text-xs font-medium uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full"
          style={{
            color: "var(--gold)",
            border: "1px solid rgba(201,169,110,0.3)",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          QR Kod
        </span>

        <h1
          className="font-light mb-2"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "28px",
            color: "#fff",
          }}
        >
          Avène &amp; Ducray
        </h1>
        <p
          className="text-xs mb-8 font-light"
          style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}
        >
          Sapanca 2025 · Uzman Buluşması
        </p>

        {/* QR Code */}
        <div
          id="qr-code"
          className="flex items-center justify-center p-5 rounded-xl mb-6 mx-auto"
          style={{
            background: "#fff",
            width: "fit-content",
          }}
        >
          <QRCodeSVG
            value={SITE_URL}
            size={200}
            bgColor="#ffffff"
            fgColor="#1a1e2e"
            level="H"
          />
        </div>

        {/* URL */}
        <div
          className="rounded-xl px-4 py-3 mb-6 text-xs font-light break-all"
          style={{
            background: "rgba(255,255,255,0.05)",
            color: "rgba(255,255,255,0.6)",
            border: "1px solid rgba(255,255,255,0.08)",
            fontFamily: "monospace",
          }}
        >
          {SITE_URL}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleCopy}
            className="flex-1 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all"
            style={{
              background: copied
                ? "rgba(201,169,110,0.2)"
                : "rgba(255,255,255,0.08)",
              color: copied ? "var(--gold)" : "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.1)",
              cursor: "pointer",
            }}
          >
            {copied ? "✓ Kopyalandı" : "Link Kopyala"}
          </button>

          <button
            onClick={handleDownload}
            className="flex-1 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, var(--gold), #a8834f)",
              color: "#1a1e2e",
              border: "none",
              cursor: "pointer",
            }}
          >
            QR İndir
          </button>
        </div>
      </div>

      {/* Back link */}
      <a
        href="/"
        className="mt-8 text-xs font-light tracking-widest uppercase transition-opacity hover:opacity-100"
        style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
      >
        ← Ana Sayfaya Dön
      </a>
    </main>
  );
}
