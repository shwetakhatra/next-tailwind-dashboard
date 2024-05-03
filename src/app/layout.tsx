import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google'
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Next Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Sidebar>
          <Header title="Dashboard"/>
          {children}
          <Footer />
        </Sidebar>
      </body>
    </html>
  );
}
