import type { Metadata } from "next";
import "./globals.css";
import { MobileCtaBar } from "../components/site-chrome";

export const metadata: Metadata = {
  title: "Express Handyman Dublin | Handyman in Dublin, Ireland",
  description:
    "Express Handyman Dublin — Julian, your local handyman in Clondalkin, Dublin 22. Over fifteen years of experience — handyman, carpenter, electrician, plumber, painter and tiler across Dublin. No job too small. Call 087 122 3254 for a free quote.",
  icons: { icon: "/images/logo-real.png" },
  openGraph: {
    title: "Express Handyman Dublin | Handyman in Dublin, Ireland",
    description:
      "Your local handyman in Dublin — over fifteen years of experience, six trades, no job too small. Call 087 122 3254 for a free quote.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}<MobileCtaBar /></body>
    </html>
  );
}
