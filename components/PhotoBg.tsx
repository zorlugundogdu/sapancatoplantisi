const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function photoBgStyle(): React.CSSProperties {
  return { backgroundImage: `url('${BASE}/avdu-bg.png')` };
}

export function imgSrc(path: string): string {
  return `${BASE}${path}`;
}
