"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type FestCardData = {
  title: string;
  image: string;
  description: string;
};

export const FEST_DATA: FestCardData[] = [
  {
    title: "Anwesha",
    image: "/gallery/Fests/img/Anwesha/1.jpg",
    description:
      "Anwesha, IIT Patna's annual techno-cultural and management extravaganza, embodies grandeur, creativity, and perfection.",
  },
  {
    title: "Anwesha",
    image: "/gallery/Fests/img/Anwesha/2.jpg",
    description:
      "One of East India's biggest youth festivals, with events for coders, gamers, and music and dance enthusiasts alike.",
  },
  {
    title: "Celesta",
    image: "/gallery/Fests/img/Celesta/1.JPG",
    description:
      "Celesta is IIT Patna's annual technical fest, inspiring young minds to pursue technology with passion.",
  },
  {
    title: "Celesta",
    image: "/gallery/Fests/img/Celesta/2.JPG",
    description:
      "A strong platform to spark curiosity and foster innovation in science and technology.",
  },
  {
    title: "Infinito",
    image: "/gallery/Fests/img/Infinito/1.jpg",
    description:
      "Infinito, IIT Patna's annual sports festival, is a student-led celebration that has grown rapidly.",
  },
  {
    title: "Infinito",
    image: "/gallery/Fests/img/Infinito/2.jpg",
    description:
      "A celebration of energy, enthusiasm, and sporting spirit, with each edition aiming higher.",
  },
  {
    title: "Nebula",
    image: "/gallery/Fests/img/Nebula/1.png",
    description:
      "Nebula, the freshers party, warmly welcomes newcomers and gives them a stage to showcase their talents.",
  },
  {
    title: "Nebula",
    image: "/gallery/Fests/img/Nebula/2.png",
    description:
      "With performances and activities, Nebula celebrates new beginnings, friendships, and memorable first moments.",
  },
  {
    title: "TEDx",
    image: "/gallery/Fests/img/TedX/1.png",
    description:
      "TEDx at IIT Patna highlights the power of shared vision and collective effort to achieve uncommon results.",
  },
  {
    title: "TEDx",
    image: "/gallery/Fests/img/TedX/2.png",
    description:
      "A celebration of ideas and unity, showing how ordinary people can do extraordinary things together.",
  },
  {
    title: "Reverberance",
    image: "/gallery/Fests/img/Reverb/1.png",
    description:
      "Since 2008, Reverberance has brightened IIT Patna's Diwali season with lights, culture, and joy.",
  },
  {
    title: "Reverberance",
    image: "/gallery/Fests/img/Reverb/2.png",
    description:
      "A festive time for the community to celebrate Indian culture and create lasting memories.",
  },
];

const BASE_VELOCITY = 11;
const ANGLE_STEP = 360 / FEST_DATA.length;

function normalizeAngle(degrees: number) {
  return ((degrees % 360) + 360) % 360;
}

function getFrontIndex(rotation: number) {
  const normalized = normalizeAngle(-rotation);
  return Math.round(normalized / ANGLE_STEP) % FEST_DATA.length;
}

// Card dimensions keyed to the same breakpoints as radius
type CardSize = { w: number; h: number };

function getCardSize(width: number): CardSize {
  if (width < 400) return { w: 120, h: 180 };
  if (width < 640) return { w: 150, h: 220 };
  if (width < 900) return { w: 180, h: 260 };
  if (width < 1280) return { w: 210, h: 300 };
  return { w: 240, h: 340 };
}

function getRadius(width: number): number {
  if (width < 400) return 160;
  if (width < 640) return 220;
  if (width < 900) return 320;
  if (width < 1280) return 430;
  return 540;
}

type FestCardProps = {
  item: FestCardData;
  index: number;
  radius: number;
  cardSize: CardSize;
  rotation: ReturnType<typeof useMotionValue<number>>;
  clock: ReturnType<typeof useMotionValue<number>>;
  isFront: boolean;
};

function FestCard({
  item,
  index,
  radius,
  cardSize,
  rotation,
  clock,
  isFront,
}: FestCardProps) {
  const transform = useTransform([rotation, clock], (values) => {
    const [r = 0, t = 0] = values as number[];
    const theta = index * ANGLE_STEP + r;
    const rad = (theta * Math.PI) / 180;
    const depth = Math.cos(rad);
    const floatY = Math.sin(t / 700 + index * 0.68) * 8;
    const floatX = Math.cos(t / 1100 + index * 0.49) * 4;
    const scale = 0.65 + ((depth + 1) / 2) * 0.35;

    return `translate3d(-50%, -50%, 0px) rotateY(${theta}deg) translateZ(${radius}px) translateX(${floatX}px) translateY(${floatY}px) scale(${scale})`;
  });

  const opacity = useTransform(rotation, (r) => {
    const theta = index * ANGLE_STEP + r;
    const depth = Math.cos((theta * Math.PI) / 180);
    return 0.15 + ((depth + 1) / 2) * 0.85;
  });

  const zIndex = useTransform(rotation, (r) => {
    const theta = index * ANGLE_STEP + r;
    const depth = Math.cos((theta * Math.PI) / 180);
    return Math.floor((depth + 1) * 100);
  });

  return (
    <motion.article
      suppressHydrationWarning
      className={`absolute left-1/2 top-1/2 overflow-hidden rounded-2xl border border-cyan-100/30 bg-slate-950/85 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-shadow duration-300 ${
        isFront
          ? "ring-1 ring-cyan-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.55),0_0_18px_rgba(34,211,238,0.32)]"
          : ""
      }`}
      style={{
        transform,
        opacity,
        zIndex,
        width: cardSize.w,
        height: cardSize.h,
      }}
      aria-hidden={!isFront}
    >
      {/* Image — top 55% */}
      <div className="relative w-full" style={{ height: "55%" }}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="240px"
          className="object-cover"
          draggable={false}
        />
      </div>

      {/* Text — bottom 45% */}
      <div
        className="flex flex-col gap-1 bg-gradient-to-t from-slate-950 via-slate-950/95 to-slate-900/90 px-2.5 py-2"
        style={{ height: "45%" }}
      >
        <span className="w-fit rounded-full bg-gradient-to-r from-emerald-200 to-cyan-200 px-1.5 py-0.5 text-[7px] font-bold tracking-[0.12em] text-slate-900 uppercase">
          IITP Fest
        </span>
        <h3 className="text-[11px] font-semibold leading-tight text-slate-50 sm:text-xs">
          {item.title}
        </h3>
        <p className="line-clamp-3 text-[9px] leading-snug text-slate-300 sm:text-[10px]">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function FestsCarousel3D() {
  const reduceMotion = useReducedMotion();
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const lastPointerXRef = useRef(0);
  const velocityRef = useRef(reduceMotion ? 0 : BASE_VELOCITY);
  const frontIndexRef = useRef(0);

  const rotation = useMotionValue(0);
  const clock = useMotionValue(0);
  const [radius, setRadius] = useState(540);
  const [cardSize, setCardSize] = useState<CardSize>({ w: 240, h: 340 });
  const [frontIndex, setFrontIndex] = useState(0);

  const syncFrontIndex = useCallback(
    (currentRotation: number) => {
      const idx = getFrontIndex(currentRotation);
      if (idx !== frontIndexRef.current) {
        frontIndexRef.current = idx;
        setFrontIndex(idx);
      }
    },
    [setFrontIndex],
  );

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      setRadius(getRadius(w));
      setCardSize(getCardSize(w));
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useAnimationFrame((_time, delta) => {
    clock.set(clock.get() + delta);

    if (!pausedRef.current && !reduceMotion) {
      const nextRotation =
        rotation.get() + velocityRef.current * (delta / 1000);
      rotation.set(nextRotation);
      velocityRef.current *= 0.996;

      if (Math.abs(velocityRef.current) < BASE_VELOCITY) {
        velocityRef.current =
          velocityRef.current < 0 ? -BASE_VELOCITY : BASE_VELOCITY;
      }
    }

    syncFrontIndex(rotation.get());
  });

  const spinBy = useCallback(
    (stepCount: number) => {
      const next = rotation.get() + stepCount * ANGLE_STEP;
      rotation.set(next);
      velocityRef.current = stepCount > 0 ? 24 : -24;
      syncFrontIndex(next);
    },
    [rotation, syncFrontIndex],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative min-h-[380px] rounded-3xl border border-slate-200/70 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.14),transparent_38%),radial-gradient(circle_at_82%_70%,rgba(6,182,212,0.18),transparent_40%),linear-gradient(155deg,#041125,#102748)] px-1 py-8 shadow-xl sm:min-h-[560px] sm:px-3 sm:py-12"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute -left-10 top-1/3 h-32 w-32 rounded-full bg-cyan-300/30 blur-2xl sm:h-44 sm:w-44 sm:blur-3xl" />
        <div className="absolute -right-6 top-16 h-40 w-40 rounded-full bg-emerald-300/25 blur-2xl sm:h-48 sm:w-48 sm:blur-3xl" />
      </div>

      <div
        ref={sceneRef}
        role="region"
        aria-label="3D fest carousel"
        tabIndex={0}
        className="relative h-[300px] w-full cursor-grab touch-pan-y select-none perspective-[1000px] perspective-origin-[center_42%] sm:h-[480px] sm:perspective-[1700px]"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          if (!draggingRef.current) {
            pausedRef.current = false;
          }
        }}
        onPointerDown={(event) => {
          draggingRef.current = true;
          lastPointerXRef.current = event.clientX;
          velocityRef.current = 0;
          pausedRef.current = true;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!draggingRef.current) return;
          const deltaX = event.clientX - lastPointerXRef.current;
          lastPointerXRef.current = event.clientX;
          const nextRotation = rotation.get() + deltaX * 0.34;
          rotation.set(nextRotation);
          velocityRef.current = deltaX * 1.2;
          syncFrontIndex(nextRotation);
        }}
        onPointerUp={(event) => {
          if (!draggingRef.current) return;
          draggingRef.current = false;
          pausedRef.current = false;
          event.currentTarget.releasePointerCapture(event.pointerId);
          if (Math.abs(velocityRef.current) < BASE_VELOCITY) {
            velocityRef.current =
              velocityRef.current < 0 ? -BASE_VELOCITY : BASE_VELOCITY;
          }
        }}
        onPointerCancel={() => {
          draggingRef.current = false;
          pausedRef.current = false;
        }}
        onWheel={(event) => {
          event.preventDefault();
          const nextRotation = rotation.get() + event.deltaY * 0.08;
          rotation.set(nextRotation);
          syncFrontIndex(nextRotation);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") spinBy(1);
          if (event.key === "ArrowLeft") spinBy(-1);
        }}
      >
        <div className="absolute inset-0 transform-3d">
          {FEST_DATA.map((item, index) => (
            <FestCard
              key={`${item.title}-${index}`}
              item={item}
              index={index}
              radius={radius}
              cardSize={cardSize}
              rotation={rotation}
              clock={clock}
              isFront={frontIndex === index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}