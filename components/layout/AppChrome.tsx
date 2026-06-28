"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import ClientWrapper from "@/components/ClientWrapper";

type AppChromeProps = {
  children: ReactNode;
};

export default function AppChrome({ children }: AppChromeProps) {
  const pathname = usePathname();
  const disableGlobalChrome = pathname === "/welcome";

  return (
    <>
      {!disableGlobalChrome && <Navbar />}
      <ClientWrapper>{children}</ClientWrapper>
      {!disableGlobalChrome && <Footer />}
    </>
  );
}
