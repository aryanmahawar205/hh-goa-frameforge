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
          "relative w-full max-w-[400px] aspect-[4/5] bg-[#0d0d0d] rounded-3xl overflow-hidden flex flex-col",
          "border border-[#333] shadow-2xl font-sans"
        )}
        style={{
          // We use a CSS variable to make the export look exactly the same
          // even if the user zooms or shrinks the page
          containerType: "inline-size",
        }}
      >
        {/* Top Decorative Border */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

        {/* Header: HH Goa 2026 */}
        <div className="flex justify-between items-center p-6 pb-2 z-10">
          <div className="flex flex-col">
            <span className="font-space font-bold text-xl tracking-tight text-white">
              HH GOA 2026
            </span>
            <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold mt-1">
              Builder Identity
            </span>
          </div>
        </div>

        {/* Photo Container */}
        <div className="flex-1 w-full px-6 py-4 flex items-center justify-center relative">
          <div className="w-full h-full relative rounded-2xl overflow-hidden bg-[#1a1a1a] border border-[#222]">
            {photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={photo}
                alt="Builder photo"
                className="w-full h-full object-cover object-center"
                crossOrigin="anonymous" // Important for html-to-image
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center flex-col text-gray-600 gap-2">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-600 mb-2" />
                <span className="text-sm font-medium">No photo uploaded</span>
              </div>
            )}

            {/* Subtle Gradient Overlay on Photo to ensure text legibility if we wanted floating text */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Builder Details */}
        <div className="p-6 pt-0 z-10 flex flex-col items-center text-center">
          <h2
            className={cn(
              "font-space font-bold text-3xl leading-tight text-white uppercase tracking-tight mb-1",
              !name && "text-gray-600"
            )}
            style={{
              wordBreak: "break-word",
            }}
          >
            {name || "YOUR NAME"}
          </h2>

          <div className="flex items-center gap-2 mt-2">
            {stack && (
              <span className="bg-[#222] text-gray-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-[#333]">
                {stack}
              </span>
            )}
          </div>

          <div className="mt-4 w-full pt-4 border-t border-[#333] flex justify-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold tracking-wide uppercase text-sm">
              {title}
            </span>
          </div>
        </div>
      </div>
    );
  }
);

IdCard.displayName = "IdCard";