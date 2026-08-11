"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface IdCardProps {
  photo: string | null;
  name: string;
  stack: string;
  team: string;
  title: string;
}

export const IdCard = forwardRef<HTMLDivElement, IdCardProps>(
  ({ photo, name, stack, team, title }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full max-w-[400px] aspect-[4/5] bg-[#0a192f] rounded-[2rem] overflow-hidden flex flex-col",
          "border-4 border-[#ffb703] shadow-2xl font-sans"
        )}
      >
        {/* Tropical Gradient Background */}
        <div className="absolute inset-0 z-0 pointer-events-none" style={{
          background: `linear-gradient(135deg, rgba(10, 25, 47, 1) 0%, rgba(2, 48, 71, 0.9) 50%, rgba(33, 158, 188, 0.4) 100%)`
        }} />

        {/* Sun Motif */}
        <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-[#fb8500] rounded-full z-0 opacity-80 blur-xl" />

        {/* Palm Silhouette (Simplified via SVG for export safety) */}
        <svg className="absolute bottom-0 left-0 w-32 h-32 opacity-10 z-0 text-[#8ecae6]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M10 100 Q30 70 50 30 Q60 50 80 60 Q60 70 50 100" />
          <path d="M50 30 Q70 20 90 30 Q70 40 50 50" />
          <path d="M50 30 Q40 10 20 10 Q30 30 50 50" />
        </svg>

        {/* Tech Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(to right, #ffb703 1px, transparent 1px),
            linear-gradient(to bottom, #ffb703 1px, transparent 1px)
          `,
          backgroundSize: '16px 16px'
        }} />

        {/* Decorative code motif */}
        <div className="absolute top-6 right-6 z-10 text-[#8ecae6] text-xs font-mono opacity-50 flex flex-col items-end">
          <span>{"< />"}</span>
          <span>{`// GOA`}</span>
        </div>

        {/* Header: HH Goa 2026 */}
        <div className="flex justify-between items-start p-6 pb-2 z-10 relative">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-space font-black text-2xl tracking-tighter text-white">
                HH GOA 2026
              </span>
            </div>
            <span className="text-[10px] text-[#ffb703] uppercase tracking-[0.2em] font-bold mt-1 inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-[#fb8500] rounded-full animate-pulse inline-block" /> BUILD MODE: ON
            </span>
          </div>
        </div>

        {/* Photo Container */}
        <div className="flex-1 w-full px-6 py-4 flex items-center justify-center relative z-10">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56">
            {/* Decorative Offset Border */}
            <div className="absolute inset-0 bg-[#fb8500] rounded-[2rem] transform translate-x-2 translate-y-2" />
            <div className="absolute inset-0 bg-[#219ebc] rounded-[2rem] transform -translate-x-2 -translate-y-2 opacity-50" />

            {/* Main Photo Area */}
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-[#023047] border-4 border-[#ffb703] z-10 shadow-lg">
              {photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={photo}
                  alt="Builder photo"
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center flex-col text-[#8ecae6] gap-2">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <span className="text-xs font-semibold tracking-wide uppercase">No photo</span>
                </div>
              )}
            </div>

            {/* Builder Title Sticker (overlapping photo) */}
            <div className="absolute -bottom-4 -right-4 z-20 transform rotate-3">
              <div className="bg-[#ffb703] text-[#023047] font-space font-black text-sm uppercase px-4 py-2 rounded-xl border-2 border-[#023047] shadow-[4px_4px_0_0_#023047] whitespace-nowrap">
                {title || "Awaiting Title"}
              </div>
            </div>
          </div>
        </div>

        {/* Builder Details */}
        <div className="px-6 pb-6 pt-2 z-10 relative flex flex-col">

          <h2
            className={cn(
              "font-space font-black text-3xl md:text-4xl leading-tight text-white uppercase tracking-tight mb-1 drop-shadow-md",
              !name && "text-white/40"
            )}
            style={{ wordBreak: "break-word" }}
          >
            {name || "YOUR NAME"}
          </h2>

          <div className="flex flex-col gap-1 mb-4">
            {stack && (
              <span className="text-[#8ecae6] text-sm font-bold uppercase tracking-widest font-mono">
                {`> STACK: `}<span className="text-white">{stack}</span>
              </span>
            )}

            {team && (
              <span className="text-[#8ecae6] text-sm font-bold uppercase tracking-widest font-mono">
                {`> TEAM: `}<span className="text-[#ffb703]">{team}</span>
              </span>
            )}
          </div>

          <div className="w-full flex justify-between items-end mt-2 pt-4 border-t-2 border-white/20 border-dashed">
            <div className="text-left flex flex-col gap-0.5">
                <span className="text-[9px] text-[#8ecae6] font-bold uppercase tracking-[0.2em] font-mono">Location</span>
                <span className="text-xs text-white font-semibold uppercase tracking-wider">GOA, IN</span>
            </div>
            <div className="text-right flex flex-col gap-0.5 items-end">
                <span className="text-[9px] text-[#8ecae6] font-bold uppercase tracking-[0.2em] font-mono">Status</span>
                <span className="text-xs text-[#ffb703] font-bold uppercase tracking-wider">#FrameInGoa</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

IdCard.displayName = "IdCard";
