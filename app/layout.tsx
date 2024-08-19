import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "vCode",
  description: "Created by Victorscript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <section className="py-24 sm:py-30">
          {children}
        </section>
      </body>
    </html>
  );
}
