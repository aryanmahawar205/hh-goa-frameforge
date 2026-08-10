"use client";

import { Download, Loader2, Send } from "lucide-react";

interface ShareActionsProps {
  onDownload: () => void;
  onShareX: () => void;
  isGenerating: boolean;
  disabled: boolean;
}

export function ShareActions({
  onDownload,
  onShareX,
  isGenerating,
  disabled,
}: ShareActionsProps) {
  return (
    <div className="flex flex-col gap-3 w-full mt-6">
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <button
          onClick={onDownload}
          disabled={disabled || isGenerating}
          className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-space font-bold uppercase tracking-wider text-sm transition-all ${
            disabled || isGenerating
              ? "bg-neutral-800 cursor-not-allowed text-neutral-500"
              : "bg-yellow-400 text-black hover:bg-yellow-300 hover:-translate-y-0.5 active:translate-y-0 shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_25px_rgba(250,204,21,0.4)]"
          }`}
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              GENERATING
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              DOWNLOAD ID
            </>
          )}
        </button>

        <button
          onClick={onShareX}
          disabled={disabled || isGenerating}
          className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-space font-bold uppercase tracking-wider text-sm transition-all ${
            disabled || isGenerating
              ? "bg-neutral-800 cursor-not-allowed text-neutral-500"
              : "bg-black border border-neutral-700 text-white hover:bg-neutral-900 hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
          }`}
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              WAIT...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              SHARE TO X
            </>
          )}
        </button>
      </div>

      {/* Contextual hint for desktop users */}
      <p className="text-[10px] sm:text-xs text-neutral-500 text-center px-4 font-medium mt-2">
        Desktop users: Download first, then attach manually if sharing to X.
      </p>
    </div>
  );
}
