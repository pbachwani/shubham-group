import { Geist, Geist_Mono, Gotu, Manrope } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/providers/TransitionProvider";
import Navbar from "@/components/Navbar";
import LenisProvider from "@/components/LenisProvider";
import MiniLink from "@/components/ui/MiniLinks";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const GotuFont = Gotu({
  variable: "--font-gotu",
  subsets: ["latin"],
  weight: "400",
});

const ManrapeFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shubham Group",
  description:
    "Enriching lives and contributing to Jaipur’s ever-evolving skyline.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${GotuFont.variable} ${ManrapeFont.variable} h-full antialiased`}
    >
      <body>
        <LenisProvider>
          <TransitionProvider>
            <Navbar />
            <MiniLink />
            {children}
            <Footer />
          </TransitionProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
