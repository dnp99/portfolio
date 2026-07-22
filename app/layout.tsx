import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://dnp99.github.io/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Deep Patel | Senior Software Engineer",
  description:
    "Senior software engineer in Toronto building reliable distributed systems, cloud infrastructure, and polished products.",
  openGraph: {
    title: "Deep Patel | Senior Software Engineer",
    description: "I build software that holds up in the real world.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1536,
        height: 1024,
        alt: "Deep Patel, senior software engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Patel | Senior Software Engineer",
    description: "I build software that holds up in the real world.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
