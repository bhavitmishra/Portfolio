import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhavit Mishra — Full-Stack Developer",
  description:
    "Full-stack developer based in Indore, India. Building products end-to-end — from database schema to pixel-perfect UI.",
  keywords: ["full-stack developer", "Next.js", "TypeScript", "React", "Node.js", "Indore"],
  authors: [{ name: "Bhavit Mishra" }],
  openGraph: {
    title: "Bhavit Mishra — Full-Stack Developer",
    description: "Building products end-to-end — from database schema to pixel-perfect UI.",
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
      <body>{children}</body>
    </html>
  );
}
