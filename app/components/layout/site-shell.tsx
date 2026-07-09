"use client";

import { isIosSafari } from "@/lib/ios-safari";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AmbientBackground } from "../ui/ambient-background";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [iosSafari, setIosSafari] = useState(false);

  useEffect(() => {
    setIosSafari(isIosSafari());
  }, []);

  const isIosSafariGpuSafePath =
    iosSafari &&
    (pathname === "/services" ||
      pathname === "/about" ||
      pathname === "/projects" ||
      pathname === "/contact" ||
      pathname === "/line-ai");
  const disableHomeGpuLayers = pathname === "/" && iosSafari;
  const disableAmbientOrbs = disableHomeGpuLayers || isIosSafariGpuSafePath;
  const showGrainOverlay =
    !disableHomeGpuLayers && !isIosSafariGpuSafePath;

  useEffect(() => {
    const className = "ios-safari-services-gpu-safe";
    if (isIosSafariGpuSafePath) {
      document.documentElement.classList.add(className);
      document.documentElement.style.scrollBehavior = "auto";
    } else {
      document.documentElement.classList.remove(className);
      document.documentElement.style.scrollBehavior = "";
    }
    return () => {
      document.documentElement.classList.remove(className);
      document.documentElement.style.scrollBehavior = "";
    };
  }, [isIosSafariGpuSafePath]);

  return (
    <>
      <AmbientBackground disableGpuLayers={disableAmbientOrbs} />
      {showGrainOverlay ? (
        <div className="grain-overlay" aria-hidden />
      ) : null}
      <Navbar />
      <main className="relative z-10 min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
