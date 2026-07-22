import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Deep Patel | Senior Software Engineer",
    description:
      "Senior software engineer in Toronto building reliable distributed systems, cloud infrastructure, and polished products.",
    openGraph: {
      title: "Deep Patel | Senior Software Engineer",
      description: "I build software that holds up in the real world.",
      type: "website",
      images: [{ url: `${origin}/og.png`, width: 1536, height: 1024, alt: "Deep Patel, senior software engineer" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Deep Patel | Senior Software Engineer",
      description: "I build software that holds up in the real world.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
