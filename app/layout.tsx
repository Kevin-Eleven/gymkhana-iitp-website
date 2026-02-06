import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Script from "next/script";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "IIT Patna Gymkhana | Students' Council",
  description: "Official website of IIT Patna Gymkhana - The governing council of students working for the over-all well being and holistic development of students.",
  keywords: "IITP, Gymkhana, IIT Patna, Student Council, Technical Clubs, Cultural Events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/images/logo.png" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <Preloader />
        <Navbar />
        {children}
        <Footer />
        
        {/* Load jQuery and other legacy scripts */}
        {/* <Script src="/js/jquery-2.1.4.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="lazyOnload" />
        <Script src="/js/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/js/isotope.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/js/magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/js/swiper-bundle.min.js" strategy="lazyOnload" /> */}
      </body>
    </html>
  );
}

