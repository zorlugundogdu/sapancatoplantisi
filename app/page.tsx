import contentRaw from "@/content/content.json";
import Hero from "@/components/Hero";
import Venue from "@/components/Venue";
import Program from "@/components/Program";
import Brands from "@/components/Brands";
import Motto from "@/components/Motto";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { ProgramContent } from "@/components/Program";

const content = contentRaw as unknown as {
  event: Parameters<typeof Hero>[0]["data"];
  venue: Parameters<typeof Venue>[0]["data"];
  program: ProgramContent;
  brands: Parameters<typeof Brands>[0]["data"];
  cta: Parameters<typeof CTA>[0]["data"];
  footer: Parameters<typeof Footer>[0]["data"];
};

export default function Home() {
  return (
    <main>
      <Hero data={content.event} />
      <Venue data={content.venue} />
      <Program data={content.program} />
      <Brands data={content.brands} />
      <Motto />
      <CTA data={content.cta} />
      <Footer data={content.footer} />
    </main>
  );
}
