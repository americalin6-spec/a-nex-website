"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  disableScrollAnimation?: boolean;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  disableScrollAnimation = false,
}: RevealProps) {
  if (disableScrollAnimation) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  );
}
