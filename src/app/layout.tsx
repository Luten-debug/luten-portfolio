import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luten Reinhardt – HR & Content @ Tesla",
  description:
    "HR Business Partner & Employer Branding Content Lead at Tesla Gigafactory Berlin. 100M+ impressions on X.",
  openGraph: {
    title: "Luten Reinhardt – HR & Content @ Tesla",
    description:
      "HR Business Partner & Employer Branding Content Lead at Tesla Gigafactory Berlin.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body className={`${inter.variable} antialiased noise-bg`}>
        {children}
      </body>
    </html>
  );
}
