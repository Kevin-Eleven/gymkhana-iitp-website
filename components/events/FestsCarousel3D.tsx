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

type FestCardProps = {
  item: FestCardData;
  index: number;
  radius: number;
  rotation: ReturnType<typeof useMotionValue<number>>;
  clock: ReturnType<typeof useMotionValue<number>>;
  isFront: boolean;
};

function FestCard({
  item,
  index,
  radius,
  rotation,
  clock,
  isFront,
}: FestCardProps) {
  const transform = useTransform([rotation, clock], (values) => {
    const [r = 0, t = 0] = values as number[];
    const theta = index * ANGLE_STEP + r;
    const rad = (theta * Math.PI) / 180;
    const depth = Math.cos(rad);
    const floatY = Math.sin(t / 700 + index * 0.68) * 12;
    const floatX = Math.cos(t / 1100 + index * 0.49) * 5;
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
      className={`absolute left-1/2 top-1/2 h-[320px] w-[220px] sm:h-[380px] sm:w-[280px] overflow-hidden rounded-3xl border border-cyan-100/30 bg-slate-950/85 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-shadow duration-300 ${
        isFront
          ? "ring-1 ring-cyan-200/80 shadow-[0_30px_70px_rgba(0,0,0,0.55),0_0_24px_rgba(34,211,238,0.32)]"
          : ""
      }`}
      style={{ transform, opacity, zIndex }}
      aria-hidden={!isFront}
    >
      <div className="relative h-[50%] w-full sm:h-[58%]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 220px, 280px"
          className="object-cover"
          draggable={false}
        />
      </div>
      <div className="flex h-[50%] flex-col gap-1.5 bg-linear-to-t from-slate-950 via-slate-950/95 to-slate-900/90 px-3 py-3 sm:h-[42%] sm:gap-2 sm:px-4 sm:py-4">
        <span className="w-fit rounded-full bg-linear-to-r from-emerald-200 to-cyan-200 px-2 py-0.5 text-[9px] font-bold tracking-[0.14em] text-slate-900 uppercase sm:px-2.5 sm:py-1 sm:text-[10px]">
          IITP Fest
        </span>
        <h3 className="text-lg font-semibold text-slate-50 sm:text-xl">{item.title}</h3>
        <p className="line-clamp-3 pr-1 text-xs leading-snug text-slate-200 sm:line-clamp-none sm:text-sm sm:leading-relaxed">
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
  const [radius, setRadius] = useState(500);
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
    function updateRadius() {
      const width = window.innerWidth;
      if (width < 400) {
        setRadius(130);
        return;
      }
      if (width < 640) {
        setRadius(180);
        return;
      }
      if (width < 900) {
        setRadius(280);
        return;
      }
      if (width < 1280) {
        setRadius(380);
        return;
      }
      setRadius(480);
    }

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
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
      className="relative min-h-[460px] rounded-3xl border border-slate-200/70 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.14),transparent_38%),radial-gradient(circle_at_82%_70%,rgba(6,182,212,0.18),transparent_40%),linear-gradient(155deg,#041125,#102748)] px-2 py-8 shadow-xl sm:min-h-[700px] sm:px-4 sm:py-12"
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
        className="relative h-[380px] w-full cursor-grab touch-pan-y select-none perspective-[1000px] perspective-origin-[center_42%] sm:h-[620px] sm:perspective-[1700px]"
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
          if (!draggingRef.current) {
            return;
          }

          const deltaX = event.clientX - lastPointerXRef.current;
          lastPointerXRef.current = event.clientX;

          const nextRotation = rotation.get() + deltaX * 0.34;
          rotation.set(nextRotation);
          velocityRef.current = deltaX * 1.2;
          syncFrontIndex(nextRotation);
        }}
        onPointerUp={(event) => {
          if (!draggingRef.current) {
            return;
          }

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
          if (event.key === "ArrowRight") {
            spinBy(1);
          }
          if (event.key === "ArrowLeft") {
            spinBy(-1);
          }
        }}
      >
        

        <div className="absolute inset-0 transform-3d">
          {FEST_DATA.map((item, index) => (
            <FestCard
              key={`${item.title}-${index}`}
              item={item}
              index={index}
              radius={radius}
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
