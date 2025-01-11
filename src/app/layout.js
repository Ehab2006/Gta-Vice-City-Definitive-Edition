import localFont from "next/font/local";
import Script from 'next/script';

import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "GTA Vice City Definitive Edition",
  description:
    "Experience the vibrant, neon-soaked streets of Vice City like never before in the Definitive Edition of Grand Theft Auto: Vice City. Remastered with stunning graphics, improved gameplay mechanics, and enhanced audio, this classic open-world action-adventure game invites you to rise through the criminal underworld of the 1980s. Drive iconic vehicles, engage in intense shootouts, and immerse yourself in a nostalgic soundtrack as you navigate a richly detailed world filled with unforgettable characters and unforgettable moments. Download the official GTA Vice City Definitive Edition and experience the classic game reimagined with enhanced graphics, gameplay improvements, and modern controls. Available for PC, PlayStation, Xbox, and more",
  keywords: [
    "GTA Vice City Definitive Edition",
    "Download GTA Vice City",
    "GTA Vice City Enhanced Edition",
    "Rockstar Games",
    "Official GTA Download",
    "GTA Vice City for PC",
    "GTA Vice City Remastered",
  ],
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: 'https://i.ibb.co/Gvtf80M/icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: 'https://i.ibb.co/Gvtf80M/icon.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: 'https://i.ibb.co/Gvtf80M/icon.png',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
          integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
            <meta name='admaven-placement' content='BrHrEqjr5' />
            <Script data-cfasync="false" src="//dcbbwymp1bhlf.cloudfront.net/?wbbcd=1140684" />
            <Script data-cfasync="false" src="/sw.js" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div id="main">
          <NavBar />
        
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
