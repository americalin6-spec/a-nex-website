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

  const isServicesIosSafari = pathname === "/services" && iosSafari;
  const disableHomeGpuLayers = pathname === "/" && iosSafari;
  const disableAmbientOrbs = disableHomeGpuLayers || isServicesIosSafari;
  const showGrainOverlay =
    !disableHomeGpuLayers && !isServicesIosSafari;

  useEffect(() => {
    const className = "ios-safari-services-gpu-safe";
    if (isServicesIosSafari) {
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
  }, [isServicesIosSafari]);

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
