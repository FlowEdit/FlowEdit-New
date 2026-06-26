/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import ClientWrapper from "@/components/ClientWrapper";
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
  description: "Professional video editing subscriptions for creators, businesses, and brands. Upload your footage, collaborate with a dedicated editing team, and receive high-quality videos with fast turnaround times.",
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
          <Navbar />

          <ClientWrapper>{children}</ClientWrapper>
          <Toaster position="top-center" />
          <Footer />
        </StoreProviders>
      </body>
    </html>
  );
}
