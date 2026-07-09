"use client";

import { usePathname } from "next/navigation";
import { AmbientBackground } from "../ui/ambient-background";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // TEMP: disable AmbientBackground on homepage for iPhone Safari crash test
  const showAmbientBackground = pathname !== "/";

  return (
    <>
      {showAmbientBackground ? <AmbientBackground /> : null}
      <div className="grain-overlay" aria-hidden />
      <Navbar />
      <main className="relative z-10 min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
