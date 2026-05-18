import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "REducate University | Future-Ready Education in Ahmedabad",
  description:
    "REducate University — a new-age university offering programs in Management, Computing, Engineering, Commerce, and Law. Shape your future with industry-aligned education.",
  keywords:
    "university, MBA, BBA, BCA, MCA, BCA, B.Tech, engineering, management, Ahmedabad, Gujarat, education",
  openGraph: {
    title: "REducate University | Future-Ready Education",
    description:
      "A New Age University empowering students with future-proof skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
