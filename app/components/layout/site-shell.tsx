"use client";

import { AmbientBackground } from "../ui/ambient-background";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AmbientBackground />
      <div className="grain-overlay" aria-hidden />
      <Navbar />
      <main className="relative z-10 min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
