"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WorkPage() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    router.replace(`/projects${hash}`);
  }, [router]);

  return null;
}
