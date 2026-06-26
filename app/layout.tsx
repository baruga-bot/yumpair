import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YumPair | AI dinner pairings",
  description: "Discover effortless meal and drink pairings for every table.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
