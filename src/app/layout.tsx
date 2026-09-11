import type { Metadata } from "next";
import "./globals.css";
import FloatingActions from "../components/FloatingActions";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
