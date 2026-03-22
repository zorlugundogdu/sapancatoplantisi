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
      className="photo-bg py-24 px-6"
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
        <div
          className="relative pl-20"
          style={{
            borderLeft: "1px solid rgba(201,169,110,0.15)",
            marginLeft: "42px",
          }}
        >
          {data.items.map((item, i) => (
            <div
              key={i}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="timeline-item relative mb-10 last:mb-0"
            >
              {/* Time */}
              <span
                className="absolute font-light"
                style={{
                  left: "-88px",
                  top: "2px",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.05em",
                }}
              >
                {item.time}
              </span>

              {/* Dot */}
              <div
                className="absolute w-3 h-3 rounded-full"
                style={{
                  left: "-48px",
                  top: "4px",
                  background: dotColors[item.color],
                  boxShadow: `0 0 8px ${dotColors[item.color]}`,
                }}
              />

              {/* Content */}
              <div>
                <span
                  className="text-xs font-medium uppercase tracking-widest block mb-1"
                  style={{ color: labelColors[item.color], fontSize: "10px" }}
                >
                  {item.label}
                </span>
                <h4
                  className="font-medium mb-1"
                  style={{ color: "#fff", fontSize: "15px" }}
                >
                  {item.title}
                </h4>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}
                >
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
