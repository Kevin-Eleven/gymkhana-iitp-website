"use client";

import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { FEST_DATA } from "./FestsCarousel3D";

const DRAG_THRESHOLD = 60;
const PEEK_ANGLE = 6; // degrees each peeking card fans out

export default function FestsCarouselMobile() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [dragging, setDragging] = useState(false);
  const dragX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = FEST_DATA.length;

  const goTo = useCallback(
    (next: number, dir: 1 | -1) => {
      setDirection(dir);
      setCurrent((next + total) % total);
      animate(dragX, 0, { duration: 0 });
    },
    [total, dragX],
  );

  const handleDragEnd = useCallback(
    (_: unknown, info: { offset: { x: number } }) => {
      setDragging(false);
      if (info.offset.x < -DRAG_THRESHOLD) {
        goTo(current + 1, 1);
      } else if (info.offset.x > DRAG_THRESHOLD) {
        goTo(current - 1, -1);
      } else {
        animate(dragX, 0, { type: "spring", stiffness: 300, damping: 30 });
      }
    },
    [current, goTo, dragX],
  );

  // Indices for the peek stack behind the active card
  const peekNext = (current + 1) % total;
  const peekPrev = (current - 1 + total) % total;

  return (
    <div className="relative w-full rounded-[2rem] border border-slate-200/70 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.14),transparent_38%),radial-gradient(circle_at_82%_70%,rgba(6,182,212,0.18),transparent_40%),linear-gradient(155deg,#041125,#102748)] py-10 shadow-xl overflow-hidden">

      {/* Background blurs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
        <div className="absolute -left-10 top-1/4 h-32 w-32 rounded-full bg-cyan-300/30 blur-2xl" />
        <div className="absolute -right-6 bottom-16 h-40 w-40 rounded-full bg-emerald-300/25 blur-2xl" />
        {/* Animated ambient glow behind active card */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Header */}
      <motion.div
        className="mb-8 px-6 text-center"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold tracking-wide text-slate-50">Explore Fests</h3>
        {/* <p className="mt-1 text-xs text-slate-400">Swipe or tap arrows</p> */}
      </motion.div>

      {/* Card Stack Stage */}
      <div
        ref={containerRef}
        className="relative mx-auto flex h-[400px] w-full max-w-xs items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        {/* Peeking card — next (right fan) */}
        <motion.article
          key={`peek-next-${peekNext}`}
          className="absolute h-[340px] w-[230px] overflow-hidden rounded-3xl border border-cyan-100/20 bg-slate-950/70 shadow-lg"
          style={{ originX: 0.5, originY: 1 }}
          animate={{
            rotate: PEEK_ANGLE,
            x: 18,
            y: 10,
            scale: 0.88,
            opacity: 0.55,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
        >
          <PeekContent item={FEST_DATA[peekNext]} />
        </motion.article>

        {/* Peeking card — prev (left fan) */}
        <motion.article
          key={`peek-prev-${peekPrev}`}
          className="absolute h-[340px] w-[230px] overflow-hidden rounded-3xl border border-cyan-100/20 bg-slate-950/70 shadow-lg"
          style={{ originX: 0.5, originY: 1 }}
          animate={{
            rotate: -PEEK_ANGLE,
            x: -18,
            y: 10,
            scale: 0.88,
            opacity: 0.55,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
        >
          <PeekContent item={FEST_DATA[peekPrev]} />
        </motion.article>

        {/* Active card */}
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.article
            key={current}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: -160, right: 160 }}
            dragElastic={0.18}
            onDragStart={() => setDragging(true)}
            onDragEnd={handleDragEnd}
            style={{ x: dragX, originX: 0.5, originY: 1 }}
            className="absolute z-10 h-[340px] w-[230px] cursor-grab overflow-hidden rounded-3xl border border-cyan-100/30 bg-slate-950/85 shadow-[0_20px_50px_rgba(0,0,0,0.55),0_0_24px_rgba(34,211,238,0.22)] ring-1 ring-cyan-200/60 backdrop-blur-sm active:cursor-grabbing"
          >
            {/* Image */}
            <div className="relative h-[55%] w-full">
              <Image
                src={FEST_DATA[current].image}
                alt={FEST_DATA[current].title}
                fill
                sizes="230px"
                className="object-cover"
                draggable={false}
              />
              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/60" />
            </div>

            {/* Text */}
            <div className="flex h-[45%] flex-col gap-2 bg-gradient-to-t from-slate-950 via-slate-950/95 to-slate-900/90 px-4 py-3">
              <span className="w-fit rounded-full bg-gradient-to-r from-emerald-200 to-cyan-200 px-2.5 py-0.5 text-[9px] font-bold tracking-[0.14em] text-slate-900 uppercase">
                IITP Fest
              </span>
              <h3 className="text-base font-semibold leading-tight text-slate-50">
                {FEST_DATA[current].title}
              </h3>
              <p className="line-clamp-3 text-[11px] leading-snug text-slate-300">
                {FEST_DATA[current].description}
              </p>
            </div>

            {/* Shimmer sweep on entry */}
            <motion.div
              className="pointer-events-none absolute inset-0 z-20"
              initial={{ x: "-100%", opacity: 0.6 }}
              animate={{ x: "120%", opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
              style={{
                background:
                  "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)",
              }}
            />
          </motion.article>
        </AnimatePresence>

        {/* Arrow buttons */}
        <button
          aria-label="Previous"
          onClick={() => goTo(current - 1, -1)}
          className="absolute left-0 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/60 bg-slate-900/70 text-slate-300 backdrop-blur-sm transition-all active:scale-90"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          aria-label="Next"
          onClick={() => goTo(current + 1, 1)}
          className="absolute right-0 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/60 bg-slate-900/70 text-slate-300 backdrop-blur-sm transition-all active:scale-90"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Progress dots */}
      <div className="mt-8 flex items-center justify-center gap-1.5">
        {FEST_DATA.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to card ${i + 1}`}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className="relative h-1.5 overflow-hidden rounded-full transition-all duration-300"
            style={{ width: i === current ? 28 : 6 }}
          >
            <span className="absolute inset-0 rounded-full bg-slate-700" />
            {i === current && (
              <motion.span
                layoutId="dot-fill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Counter */}
      <p className="mt-3 text-center text-[10px] tracking-widest text-slate-500">
        {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </p>
    </div>
  );
}

// Lightweight image-only peek card content
function PeekContent({ item }: { item: (typeof FEST_DATA)[0] }) {
  return (
    <div className="relative h-full w-full">
      <Image src={item.image} alt={item.title} fill sizes="230px" className="object-cover" draggable={false} />
      <div className="absolute inset-0 bg-slate-950/50" />
    </div>
  );
}

const cardVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 280 : -280,
    rotate: dir > 0 ? 12 : -12,
    opacity: 0,
    scale: 0.85,
  }),
  center: {
    x: 0,
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 28 },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -260 : 260,
    rotate: dir > 0 ? -10 : 10,
    opacity: 0,
    scale: 0.85,
    transition: { duration: 0.22, ease: "easeIn" },
  }),
};