"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AmbientBackground } from "../ui/ambient-background";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

function isIosSafari() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isWebKit = /WebKit/i.test(ua);
  const isChrome = /CriOS/i.test(ua);
  const isFirefox = /FxiOS/i.test(ua);
  return isIOS && isWebKit && !isChrome && !isFirefox;
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [iosSafari, setIosSafari] = useState(false);

  useEffect(() => {
    setIosSafari(isIosSafari());
  }, []);

  // TEMP: homepage iPhone Safari crash test — disable GPU layers only, keep background
  const disableHomeGpuLayers = pathname === "/" && iosSafari;
  // TEMP: /services grain-overlay isolation test
  const showGrainOverlay = pathname !== "/services" && !disableHomeGpuLayers;

  return (
    <>
      <AmbientBackground disableGpuLayers={disableHomeGpuLayers} />
      {showGrainOverlay ? (
        <div className="grain-overlay" aria-hidden />
      ) : null}
      <Navbar />
      <main className="relative z-10 min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
