"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface IdCardProps {
  photo: string | null;
  name: string;
  stack: string;
  title: string;
}

export const IdCard = forwardRef<HTMLDivElement, IdCardProps>(
  ({ photo, name, stack, title }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full max-w-[400px] aspect-[4/5] bg-neutral-950 rounded-3xl overflow-hidden flex flex-col",
          "border border-white/10 shadow-2xl font-sans"
        )}
      >
        {/* Goa Topography / Geometric Motifs Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{
          backgroundImage: `
            radial-gradient(circle at 100% 0%, rgba(250, 204, 21, 0.4) 0%, transparent 40%),
            radial-gradient(circle at 0% 100%, rgba(59, 130, 246, 0.4) 0%, transparent 40%)
          `
        }} />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }} />

        {/* Diagonal cut corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400 z-0" style={{
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
        }} />

        {/* Header: HH Goa 2026 */}
        <div className="flex justify-between items-start p-6 pb-2 z-10 relative">
          <div className="flex flex-col">
            <span className="font-space font-black text-2xl tracking-tighter text-white">
              HH GOA 2026
            </span>
            <span className="text-[10px] text-yellow-400 uppercase tracking-[0.2em] font-bold mt-0.5">
              Builder Identity
            </span>
          </div>

          <div className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center backdrop-blur-sm">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Photo Container */}
        <div className="flex-1 w-full px-6 py-2 flex items-center justify-center relative z-10">
          <div className="w-full h-full relative overflow-hidden group rounded-2xl bg-neutral-900 border-2 border-white/10 shadow-inner">
            {photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={photo}
                alt="Builder photo"
                className="w-full h-full object-cover object-center filter contrast-125 saturate-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center flex-col text-neutral-600 gap-3">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-neutral-700 mb-2 flex items-center justify-center">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <span className="text-sm font-semibold tracking-wide uppercase">No photo</span>
              </div>
            )}

            {/* Tech UI overlay corners */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/30" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/30" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/30" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/30" />

            {/* Gradient Overlay for bottom text integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Builder Details */}
        <div className="px-6 pb-6 pt-4 z-10 relative flex flex-col items-center text-center">
          {/* Builder Title (The "Hero" element) */}
          <div className="mb-3 transform -translate-y-6">
            <span className="inline-block bg-yellow-400 text-black font-space font-bold text-xs uppercase tracking-[0.15em] px-4 py-1.5 rounded-sm shadow-[0_0_15px_rgba(250,204,21,0.5)]">
              {title || "Awaiting Title"}
            </span>
          </div>

          <h2
            className={cn(
              "font-space font-black text-3xl md:text-4xl leading-none text-white uppercase tracking-tight mb-2 filter drop-shadow-md",
              !name && "text-neutral-600"
            )}
            style={{
              wordBreak: "break-word",
            }}
          >
            {name || "YOUR NAME"}
          </h2>

          <div className="flex items-center gap-2 mt-1 mb-2">
            {stack && (
              <span className="text-blue-400 text-sm font-bold uppercase tracking-wider font-space">
                {stack}
              </span>
            )}
          </div>

          <div className="w-full flex justify-between items-end mt-4 pt-4 border-t border-white/10">
            <div className="text-left flex flex-col">
                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Event</span>
                <span className="text-xs text-neutral-300 font-semibold uppercase tracking-wider">India</span>
            </div>
            <div className="text-right flex flex-col items-end">
                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Share</span>
                <span className="text-xs text-yellow-400 font-semibold uppercase tracking-wider">#FrameInGoa</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

IdCard.displayName = "IdCard";
