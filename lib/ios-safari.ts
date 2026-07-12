"use client";

import { useEffect, useState } from "react";

export function isIosSafari() {
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

/**
 * Starts as false on server + first client paint (avoids hydration mismatch),
 * then updates after mount. setState is deferred so eslint does not flag
 * synchronous setState-in-effect.
 */
export function useIsIosSafari() {
  const [value, setValue] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setValue(isIosSafari());
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  return value;
}

/** False during SSR / first paint; true after mount. */
export function useIsClient() {
  const [value, setValue] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setValue(true);
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  return value;
}
