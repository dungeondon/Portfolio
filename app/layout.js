import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClickSpark from "@/components/ClickSpark";
import SplashCursor from "@/components/SplashCursor";

const inter = Inter({ subsets: ["latin"], variable: "--sans" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--serif" });

export const metadata = {
  title: "Venkatesh Kesanakurthi | UI/UX & Product Designer",
  description: "Designing user-centric interfaces for enterprise and healthcare applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body>
        <SplashCursor theme="light" />
        <ClickSpark sparkColor="#0a0a0a" sparkCount={8} sparkSize={12} sparkRadius={28} duration={500} style={{ height: "auto" }}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ClickSpark>
      </body>
    </html>
  );
}
