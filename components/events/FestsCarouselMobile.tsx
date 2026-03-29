"use client";

import Image from "next/image";
import { FEST_DATA } from "./FestsCarousel3D";

export default function FestsCarouselMobile() {
  return (
    <div className="relative w-full rounded-[2rem] border border-slate-200/70 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.14),transparent_38%),radial-gradient(circle_at_82%_70%,rgba(6,182,212,0.18),transparent_40%),linear-gradient(155deg,#041125,#102748)] py-8 shadow-xl overflow-hidden">
      {/* Background blurs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
        <div className="absolute -left-10 top-1/4 h-32 w-32 rounded-full bg-cyan-300/30 blur-2xl" />
        <div className="absolute -right-6 bottom-16 h-40 w-40 rounded-full bg-emerald-300/25 blur-2xl" />
      </div>

      <div className="mb-6 px-6 text-center">
        <h3 className="text-xl font-bold tracking-wide text-slate-50">Explore Fests</h3>
        <p className="mt-1 text-xs text-slate-300 flex items-center justify-center gap-2">
          <span>&larr;</span> Swipe to explore <span>&rarr;</span>
        </p>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative flex w-full snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 pt-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          ::-webkit-scrollbar { display: none; }
        `}} />
        
        {FEST_DATA.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="relative h-[360px] w-[250px] shrink-0 snap-center overflow-hidden rounded-3xl border border-cyan-100/30 bg-slate-950/85 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-sm"
          >
            <div className="relative h-[50%] w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="250px"
                className="object-cover"
                draggable={false}
              />
            </div>
            <div className="flex h-[50%] flex-col gap-2 bg-linear-to-t from-slate-950 via-slate-950/95 to-slate-900/90 px-4 py-4">
              <span className="w-fit rounded-full bg-linear-to-r from-emerald-200 to-cyan-200 px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] text-slate-900 uppercase">
                IITP Fest
              </span>
              <h3 className="text-lg font-semibold text-slate-50">{item.title}</h3>
              <p className="line-clamp-3 pr-1 text-sm leading-snug text-slate-200">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
