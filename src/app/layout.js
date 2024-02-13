import "@/styles/root.css";
import "@/styles/app.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>SOOM CLEANING</title>
        <meta name="description" content="Next.js Ecommerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script defer src="https://unpkg.com/octavalidate@latest/native/validate.js"></script> */}
        <Script
          src="https://unpkg.com/octavalidate@latest/native/validate.js"
          defer={true}
        ></Script>
      </head>
      <body className="has-navbar-fixed-top">
        {/* <MobileNav /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
