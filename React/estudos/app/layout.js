import { Montserrat } from "next/font/google";
import "./globals.css";

const font = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Estudando React + Next.js",
  description: "Projeto de estudos com React e Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
