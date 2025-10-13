import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Socials } from "./components/socials";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WWNTBC Ghana",
  description: "Worldwide New Testament Baptist Church, Ghana's official website",
  verification: {
    google: "YssDVbaHsR_WmRBwDlSSkbVCefkG2M0QpeMCosBHhDg", 
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/assets/favicon.ico', sizes: 'any' },
      { url: '/assets/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/assets/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/assets/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    apple: [
      { url: '/assets/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/assets/favicon.ico'],
  },
  openGraph: {
    title: "Worldwide New Testament Baptist Church, Ghana",
    description: "Join us for worship, Bible studies, and spiritual growth in Christ.",
    url: "https://ntbcghana.com",
    siteName: "WWNTBC Ghana",
    images: [
      {
        url: "https://ntbcghana.com/assets/apple-touch-icon.png",
        width: 180,
        height: 180,
        alt: "WWNTBC Ghana Logo",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Structured Data Script */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Worldwide New Testament Baptist Church, Ghana",
              "url": "https://ntbcghana.org", 
              "logo": "https://ntbcghana.org/assets/apple-touch-icon.png",
              "sameAs": [
                "https://web.facebook.com/New-Testament-Baptist-Church-at-Afrancho-Bronkong-104526781115548",
                "https://www.youtube.com/@ntbcworldwide651",
                "https://www.tiktok.com/@wwntbc"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+233 24 427 9458",
                "contactType": "customer service",
                "areaServed": "GH",
                "availableLanguage": ["English"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "AF-0349-2885, Afrancho, Bronkong",
                "addressLocality": "Kumasi",
                "addressCountry": "GH"
              },
              "image": "https://ntbcghana.org/assets/images/DSCN4650.jpg",
              "hasMap": "https://maps.app.goo.gl/AGA34FkjpoQc4Ynp6"
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white`}
      >
        {children}
        <footer className="w-full flex flex-col items-center bg-[#F8F8F8] py-10 px-4 sm:px-6 md:px-12 lg:px-16 border-t border-gray-200">
          <div className="w-full max-w-6xl flex flex-col gap-y-10 gap-x-12 md:flex-row md:justify-between md:items-stretch">
            {/* Logo & Contact */}
            <div className="flex flex-col h-full items-start min-w-[180px] flex-1 py-2">
              <img src="./ntbcLogo.svg" alt="NTBC Logo" className="w-12 h-auto mb-4" />
              <p className="italic text-[#003867] mb-2">Let's Connect</p>
              <a href="tel:+233244279458" className="text-lg font-bold text-[#003867] mb-1 hover:underline">+233 244 279 458</a>
              <span className="text-[#003867]">Write to our mail</span>
              <a href="mailto:worldwidentbc@gmail.com" className="text-[#ff0912] hover:underline break-all">worldwidentbc@gmail.com</a>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col h-full flex-1 min-w-[140px] py-2">
              <span className="font-bold text-[#ff0912] mb-2">Quick Links</span>
              <a href="#home" className="mb-1 px-2 text-[#003867] hover:underline">Home</a>
              <a href="#about" className="mb-1 px-2 text-[#003867] hover:underline">About</a>
              <a href="#projects" className="mb-1 px-2 text-[#003867] hover:underline">Services</a>
              <a href="#contact" className="mb-1 px-2 text-[#003867] hover:underline">Contact</a>
            </div>

            {/* Branches/Locations */}
            <div className="flex flex-col h-full flex-1 min-w-[160px] py-2">
              <span className="font-bold text-[#ff0912] mb-2">Our Branches</span>
              <div className="mb-3">
                <span className="font-semibold text-[#003867]">Main Branch</span><br />
                <span className="text-[#003867]">Afrancho, Bronkong</span><br />
                <span className="text-xs text-gray-500">GPS: AF-0349-2885</span>
              </div>
              <div>
                <span className="font-semibold text-[#003867]">Kodie Branch</span><br />
                <span className="text-[#003867]">Kodie</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col h-full flex-1 min-w-[140px] py-2">
              <span className="font-bold text-[#ff0912] mb-2">Connect</span>
              <div className="flex-1 flex items-end"><Socials /></div>
            </div>
          </div>

          {/* Copyright */}
          <div className="w-full text-xs text-[#003867] mt-10 text-center px-2">
            <p>Copyright © <a href="#home" className="no-underline">2025 NTBC Ghana</a> - All rights reserved</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
