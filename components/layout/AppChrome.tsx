"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import ClientWrapper from "@/components/ClientWrapper";
import AnnouncementBanner from "@/components/shared/AnnouncementBanner";

type AppChromeProps = {
  children: ReactNode;
};

export default function AppChrome({ children }: AppChromeProps) {
  const pathname = usePathname();
  const disableGlobalChrome = pathname === "/welcome";
  const hideAnnouncement = [
    "/dashboard",
    "/login",
    "/signup",
    "/stripe-payment",
    "/subscribe",
    "/trial-create",
    "/client-welcome",
  ].some((path) => pathname === path || pathname.startsWith(`${path}/`));
  const showAnnouncement = !disableGlobalChrome && !hideAnnouncement;

  return (
    <>
      {!disableGlobalChrome && <Navbar />}
      {showAnnouncement && (
        <div className="bg-gradient-to-r from-[#315FE4] via-[#6B7DF5] to-[#8B5CF6] pt-[92px]">
          <AnnouncementBanner />
        </div>
      )}
      <ClientWrapper>{children}</ClientWrapper>
      {!disableGlobalChrome && <Footer />}
    </>
  );
}
