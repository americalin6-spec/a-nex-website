"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const SHOWCASE_IMAGES = {
  macbook: "/projects/ai-crm.png",
  tablet: "/projects/ashley-english.png",
  phone: "/projects/onlymate.png",
  accentA: "/projects/huaren-tong.png",
  accentB: "/projects/zhongzhi-studio.png",
} as const;

const MACBOOK_SLIDES = [
  "/projects/ai-crm.png",
  "/projects/ashley-english.png",
  "/projects/huaren-tong.png",
] as const;

type DeviceId = "macbook" | "tablet" | "phone";

const DEVICE_SHADOW = {
  macbook:
    "shadow-[0_32px_100px_-24px_rgba(0,0,0,0.85),0_0_60px_-12px_rgba(77,159,255,0.35)]",
  macbookHover:
    "shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9),0_0_80px_-8px_rgba(77,159,255,0.5)]",
  tablet:
    "shadow-[0_24px_70px_-20px_rgba(0,0,0,0.8),0_0_40px_-10px_rgba(167,139,250,0.35)]",
  tabletHover:
    "shadow-[0_32px_90px_-16px_rgba(0,0,0,0.88),0_0_56px_-6px_rgba(167,139,250,0.48)]",
  phone:
    "shadow-[0_20px_60px_-16px_rgba(0,0,0,0.85),0_0_32px_-8px_rgba(34,211,238,0.3)]",
  phoneHover:
    "shadow-[0_28px_80px_-12px_rgba(0,0,0,0.9),0_0_48px_-4px_rgba(34,211,238,0.45)]",
};

function MacBookFrame({
  children,
  isActive,
}: {
  children: ReactNode;
  isActive: boolean;
}) {
  return (
    <div className="relative w-full">
      <motion.div
        className="pointer-events-none absolute -inset-6 rounded-3xl blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 70%, rgba(77,159,255,0.35) 0%, rgba(167,139,250,0.2) 45%, transparent 72%)",
        }}
        animate={{ opacity: isActive ? 0.9 : 0.55 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />
      <div
        className={`relative rounded-2xl border border-white/12 bg-white/[0.05] p-[0.45rem] backdrop-blur-xl transition-shadow duration-300 sm:p-[0.55rem] ${
          isActive ? DEVICE_SHADOW.macbookHover : DEVICE_SHADOW.macbook
        }`}
      >
        <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#05080f]">
          <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-white/[0.04] px-3 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
            <span className="mx-auto h-1.5 w-20 rounded-full bg-white/[0.07]" />
          </div>
          <div className="relative aspect-[16/10] w-full">{children}</div>
        </div>
      </div>
      <div className="mx-auto mt-1.5 h-1 w-[104%] -translate-x-[2%] rounded-b-lg bg-gradient-to-b from-white/12 to-charcoal-light/90" />
      <div className="mx-auto h-1 w-[36%] rounded-b-md bg-charcoal-light/80" />
    </div>
  );
}

function TabletFrame({
  children,
  isActive,
}: {
  children: ReactNode;
  isActive: boolean;
}) {
  return (
    <div className="relative w-full">
      <motion.div
        className="absolute -inset-4 rounded-2xl bg-accent-purple/20 blur-2xl"
        animate={{ opacity: isActive ? 0.85 : 0.5 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />
      <div
        className={`relative overflow-hidden rounded-xl border border-white/14 bg-white/[0.05] p-[0.35rem] backdrop-blur-xl transition-shadow duration-300 ${
          isActive ? DEVICE_SHADOW.tabletHover : DEVICE_SHADOW.tablet
        }`}
      >
        <div className="overflow-hidden rounded-[0.65rem] border border-white/[0.08] bg-[#05080f]">
          <div className="relative aspect-[4/3] w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}

function PhoneFrame({
  children,
  isActive,
}: {
  children: ReactNode;
  isActive: boolean;
}) {
  return (
    <div className="relative w-full">
      <motion.div
        className="absolute -inset-3 rounded-2xl bg-accent-cyan/15 blur-xl"
        animate={{ opacity: isActive ? 0.85 : 0.5 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />
      <div
        className={`relative overflow-hidden rounded-[1.35rem] border border-white/15 bg-white/[0.05] p-[0.3rem] backdrop-blur-xl transition-shadow duration-300 ${
          isActive ? DEVICE_SHADOW.phoneHover : DEVICE_SHADOW.phone
        }`}
      >
        <div className="overflow-hidden rounded-[1.1rem] border border-white/[0.08] bg-[#05080f]">
          <div className="mx-auto my-1.5 h-1 w-10 rounded-full bg-white/15" />
          <div className="relative aspect-[9/19] w-full overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function MacBookCrossfade() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % MACBOOK_SLIDES.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full w-full">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={MACBOOK_SLIDES[index]}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <Image
            src={MACBOOK_SLIDES[index]}
            alt="AXORA 專案作品展示"
            fill
            priority={index === 0}
            className="object-contain object-top"
            sizes="(max-width: 768px) 80vw, 40vw"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function PhoneScrollingScreen() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-x-0 top-0 h-[145%] will-change-transform"
        animate={{ y: ["0%", "-22%", "0%"] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "loop",
        }}
      >
        <Image
          src={SHOWCASE_IMAGES.phone}
          alt="AXORA AI 平台手機介面預覽"
          fill
          className="object-cover object-top"
          sizes="120px"
        />
      </motion.div>
    </div>
  );
}

function GlassAccentCard({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-[0_16px_48px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl ${className}`}
    >
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="200px"
        />
      </div>
    </div>
  );
}

function useShowcaseParallax(containerRef: React.RefObject<HTMLDivElement | null>) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 22, mass: 0.35 };
  const translateX = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-10, 10]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [-8, 8]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [2.5, -2.5]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-2.5, 2.5]),
    springConfig,
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const bounds = containerRef.current?.getBoundingClientRect();
      if (!bounds) return;

      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      pointerX.set(x);
      pointerY.set(y);
    },
    [containerRef, pointerX, pointerY],
  );

  const handlePointerLeave = useCallback(() => {
    pointerX.set(0);
    pointerY.set(0);
  }, [pointerX, pointerY]);

  return {
    translateX,
    translateY,
    rotateX,
    rotateY,
    handlePointerMove,
    handlePointerLeave,
  };
}

export function HeroPortfolioShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<DeviceId | null>(null);
  const {
    translateX,
    translateY,
    rotateX,
    rotateY,
    handlePointerMove,
    handlePointerLeave,
  } = useShowcaseParallax(containerRef);

  const deviceOpacity = (id: DeviceId) =>
    hovered && hovered !== id ? 0.9 : 1;

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-[640px] lg:max-w-none lg:min-h-[520px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        handlePointerLeave();
        setHovered(null);
      }}
      style={{ perspective: 1400 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-[8%] rounded-[40%] bg-accent-blue/20 blur-[90px]"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute inset-[10%] rounded-full bg-accent-purple/15 blur-[70px]"
        animate={{ opacity: [0.45, 0.85, 0.45] }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />

      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <GlassAccentCard
          src={SHOWCASE_IMAGES.accentA}
          alt="AXORA 專案作品預覽"
          className="absolute -left-[4%] top-[8%] z-0 w-[28%] -rotate-[8deg] opacity-80"
        />
        <GlassAccentCard
          src={SHOWCASE_IMAGES.accentB}
          alt="AXORA 品牌網站作品預覽"
          className="absolute -right-[2%] top-[4%] z-0 w-[26%] rotate-[6deg] opacity-75"
        />
      </div>

      <motion.div
        className="relative z-10 flex items-center justify-center py-4 will-change-transform lg:min-h-[520px] lg:py-0"
        style={{
          translateX,
          translateY,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="relative w-full lg:max-w-[92%]">
          <motion.div
            className="absolute -left-[2%] bottom-[6%] z-20 w-[34%] will-change-transform sm:w-[32%] lg:-left-[6%] lg:bottom-[10%] lg:w-[30%]"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 7.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            onHoverStart={() => setHovered("tablet")}
            onHoverEnd={() => setHovered(null)}
            whileHover={{ scale: 1.03 }}
            style={{
              rotate: -10,
              opacity: deviceOpacity("tablet"),
            }}
          >
            <TabletFrame isActive={hovered === "tablet"}>
              <Image
                src={SHOWCASE_IMAGES.tablet}
                alt="AXORA 教育網站作品預覽"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 30vw, 20vw"
              />
            </TabletFrame>
          </motion.div>

          <motion.div
            className="relative z-30 mx-auto w-[88%] will-change-transform sm:w-[84%] lg:w-[78%]"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            onHoverStart={() => setHovered("macbook")}
            onHoverEnd={() => setHovered(null)}
            whileHover={{ scale: 1.03 }}
            style={{
              rotate: 1.5,
              opacity: deviceOpacity("macbook"),
            }}
          >
            <MacBookFrame isActive={hovered === "macbook"}>
              <MacBookCrossfade />
            </MacBookFrame>
          </motion.div>

          <motion.div
            className="absolute -right-[1%] bottom-[8%] z-40 w-[22%] will-change-transform sm:w-[20%] lg:-right-[4%] lg:bottom-[12%] lg:w-[18%]"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
            onHoverStart={() => setHovered("phone")}
            onHoverEnd={() => setHovered(null)}
            whileHover={{ scale: 1.03 }}
            style={{
              rotate: 14,
              opacity: deviceOpacity("phone"),
            }}
          >
            <PhoneFrame isActive={hovered === "phone"}>
              <PhoneScrollingScreen />
            </PhoneFrame>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute bottom-[2%] left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-accent-blue/15 blur-3xl will-change-transform lg:bottom-[4%]"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function HeroShowcaseBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-[#060a14] via-[#0c1222] to-[#0a1020]" />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(77,159,255,0.22) 0%, transparent 42%), radial-gradient(circle at 85% 75%, rgba(167,139,250,0.2) 0%, transparent 40%), radial-gradient(circle at 55% 100%, rgba(34,211,238,0.12) 0%, transparent 48%)",
        }}
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <motion.div
        className="absolute -left-[10%] top-[15%] h-[45%] w-[40%] rounded-full bg-accent-blue/15 blur-[100px] will-change-transform"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[8%] bottom-[10%] h-[42%] w-[38%] rounded-full bg-accent-purple/12 blur-[90px] will-change-transform"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{
          duration: 6.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-accent-indigo/[0.06] to-transparent" />
    </>
  );
}
