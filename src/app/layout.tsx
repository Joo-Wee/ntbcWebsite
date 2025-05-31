import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/navigation";
import { Socials } from "./components/socials";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NTBC Ghana",
  description: "New Testament Baptist Church, Ghana official website",
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16', type: 'image/png', sizes: '16x16' },
      { url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white`}
      >
        <header 
          className="lg:max-w-screen-378 max-w-full max-sm:px-5 max-sm:py-7 px-20 w-full h-full mx-auto py-8 max-lg:px-12 xl:px-20 2xl:px-40 min-[1700px]:px-[20rem] bg-[#FAFAFA] sticky top-0 z-50 shadow-lg">
          <Navigation/>
        </header>
        {children}
        <footer className="flex justify-center items-center flex-col gap-y-[30px] bg-[#F8F8F8] py-10 px-[60px]">
            <div className="flex">
                <ul className="flex">
                    <li className="list-none">
                        <a href="#home" className="no-underline text-feat-text-col font-semibold ms-5 me-5">Home</a>
                    </li>
                    <li className="list-none">
                        <a href="#about" className="no-underline text-feat-text-col font-semibold ms-5 me-5">About</a>
                    </li>
                    <li className="list-none">
                        <a href="#projects" className="no-underline text-feat-text-col font-semibold ms-5 me-5">Project</a>
                    </li>
                    <li className="list-none">
                        <a href="#contact" className="no-underline text-feat-text-col font-semibold ms-5 me-5">Contact</a>
                    </li>
                </ul>
            </div>
            <Socials />
            <div className="text-sm mt-2.5">
                <p>Copyright © <a href="#home" className="no-underline">NTBC Ghana</a> - All rights reserved
                </p>
            </div>
        </footer>
      </body>
    </html>
  );
}
