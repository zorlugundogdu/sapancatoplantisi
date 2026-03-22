interface CTADetail {
  icon: string;
  text: string;
}

interface CTAContent {
  title: string;
  titleLine2: string;
  desc: string;
  details: CTADetail[];
  buttonText: string;
  buttonHref: string;
}

import { photoBgStyle } from "./PhotoBg";

export default function CTA({ data }: { data: CTAContent }) {
  return (
    <section
      id="katilim"
      className="photo-bg py-24 px-6 overflow-hidden"
    >
      <div className="photo-bg-img" style={photoBgStyle()} />
      <div className="photo-bg-overlay" />
      <div className="max-w-xl mx-auto">
        <div
          className="rounded-2xl p-10 text-center"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(201,169,110,0.15)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Title */}
          <h3
            className="font-light leading-tight mb-4"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(22px, 3.5vw, 34px)",
              color: "#fff",
            }}
          >
            {data.title}
            <br />
            {data.titleLine2}
          </h3>

          {/* Divider */}
          <div
            className="mx-auto mb-6"
            style={{
              width: "40px",
              height: "1px",
              background: "linear-gradient(to right, transparent, var(--gold), transparent)",
            }}
          />

          {/* Desc */}
          <p
            className="font-light mb-8 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}
          >
            {data.desc}
          </p>

          {/* Details */}
          <div className="space-y-3 mb-8">
            {data.details.map((detail, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm font-light"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                <span>{detail.icon}</span>
                <span>{detail.text}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <a
            href={data.buttonHref}
            className="inline-block px-8 py-3 rounded-full text-sm font-medium tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, var(--gold), #a8834f)",
              color: "#1a1e2e",
              textDecoration: "none",
              letterSpacing: "0.08em",
            }}
          >
            {data.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
