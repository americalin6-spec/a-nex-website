"use client";

import Image from "next/image";
import { useState } from "react";

function ProjectShowcaseFallback({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-charcoal via-background to-accent-blue/20 ${className}`}
    >
      <span className="font-mono text-sm uppercase tracking-[0.3em] text-foreground/90">
        Project Showcase
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.45em] text-muted/45">
        AXORA
      </span>
    </div>
  );
}

type ProjectCoverImageProps = {
  src: string;
  alt?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  showFallback?: boolean;
};

export function ProjectCoverImage({
  src,
  alt = "",
  className = "relative aspect-[16/10] overflow-hidden bg-charcoal",
  sizes = "(max-width: 768px) 100vw, 1400px",
  priority = false,
  showFallback = true,
}: ProjectCoverImageProps) {
  const [imageReady, setImageReady] = useState(false);
  const imageVisible = showFallback ? imageReady : true;

  return (
    <div className={className}>
      {showFallback ? (
        <ProjectShowcaseFallback
          className={
            imageReady ? "opacity-0 transition-opacity duration-500" : "opacity-100"
          }
        />
      ) : null}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover ${
          showFallback ? "transition-opacity duration-500" : ""
        } ${imageVisible ? "opacity-100" : "opacity-0"}`}
        sizes={sizes}
        onLoad={() => setImageReady(true)}
        onError={() => setImageReady(false)}
      />
    </div>
  );
}

export function ProjectGalleryImage({
  projectId,
  index,
}: {
  projectId: string;
  index: number;
}) {
  const src = `/projects/${projectId}/${String(index).padStart(2, "0")}.jpg`;

  return (
    <ProjectCoverImage
      src={src}
      alt={`${projectId} 專案展示圖 ${index}`}
      className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border/60 bg-charcoal"
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
    />
  );
}
