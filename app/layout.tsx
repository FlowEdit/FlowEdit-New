/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import AppChrome from "@/components/layout/AppChrome";
import StoreProviders from "../redux/StoreProviders";
import AppInitializer from "@/redux/features/appInitilaze/Appintialize";
import { Toaster } from "@/components/ui/sonner";
import HydrateAuth from "./(main)/pricinfix/page";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlowEdit | Video Editing Services",
  description:
    "Professional video editing for YouTube, TikTok, Instagram, and podcast creators. Fast turnaround, dedicated editors, and content that helps you grow.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <StoreProviders>
          {/* 🔥 Bootstrap auth + subscription once */}
          <AppInitializer />
          <HydrateAuth/>
          <AppChrome>{children}</AppChrome>
          <Toaster position="top-center" />
        </StoreProviders>
      </body>
    </html>
  );
}
