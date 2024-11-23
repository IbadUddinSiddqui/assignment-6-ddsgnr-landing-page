import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Roboto } from 'next/font/google';


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Specify weights
});


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

export const metadata: Metadata = {
  title: "Ibad's Website",
  description: "Created by Ibad Uddin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
