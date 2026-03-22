"use client";

import { useEffect, useRef } from "react";
import { photoBgStyle } from "./PhotoBg";

export interface ProgramItem {
  time: string;
  color: "gold" | "avene" | "ducray" | "white";
  label: string;
  title: string;
  desc: string;
}

export interface ProgramContent {
  eyebrow: string;
  title: string;
  titleEmphasis: string;
  items: ProgramItem[];
}

const dotColors: Record<ProgramItem["color"], string> = {
  gold: "var(--gold)",
  avene: "var(--avene-coral)",
  ducray: "var(--ducray-blue)",
  white: "rgba(255,255,255,0.6)",
};

const labelColors: Record<ProgramItem["color"], string> = {
  gold: "var(--gold)",
  avene: "var(--avene-coral)",
  ducray: "var(--ducray-blue)",
  white: "rgba(255,255,255,0.8)",
};

export default function Program({ data }: { data: ProgramContent }) {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="program"
      className="photo-bg section-pad"
    >
      <div className="photo-bg-img" style={photoBgStyle()} />
      <div className="photo-bg-overlay" />
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-eyebrow">{data.eyebrow}</span>
          <h2 className="section-title">
            {data.title}{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              {data.titleEmphasis}
            </em>
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {data.items.map((item, i) => (
            <div
              key={i}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="timeline-item flex gap-4 pb-8 last:pb-0"
            >
              {/* Left: dot + line */}
              <div className="flex flex-col items-center flex-shrink-0" style={{ width: "32px" }}>
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
                  style={{
                    background: dotColors[item.color],
                    boxShadow: `0 0 8px ${dotColors[item.color]}`,
                  }}
                />
                {i < data.items.length - 1 && (
                  <div className="flex-1 w-px mt-2" style={{ background: "rgba(201,169,110,0.15)", minHeight: "24px" }} />
                )}
              </div>

              {/* Right: content */}
              <div className="flex-1 pb-2">
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <span
                    className="font-light"
                    style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}
                  >
                    {item.time}
                  </span>
                  <span
                    className="font-medium uppercase tracking-widest"
                    style={{ color: labelColors[item.color], fontSize: "9px" }}
                  >
                    {item.label}
                  </span>
                </div>
                <h4 className="font-medium mb-1" style={{ color: "#fff", fontSize: "15px" }}>
                  {item.title}
                </h4>
                <p className="font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
