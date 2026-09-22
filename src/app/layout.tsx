import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import FloatingActions from "../components/FloatingActions";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space-grotesk' });
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "FAMORA – The Family Salon | Beauty for Everyone",
  description: "Premium Hair, Beauty, Skin, Nail & Bridal Services for Women, Men & Kids. Visit Famora in Civiltownship, Rourkela.",
  keywords: ["Famora", "Salon", "Family Salon", "Rourkela", "Haircut", "Bridal", "Nails"],
  openGraph: {
    title: "FAMORA – The Family Salon",
    description: "Beauty for Everyone. Style for Every Generation. Premium salon services.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </SmoothScroll>
      </body>
    </html>
  );
}
