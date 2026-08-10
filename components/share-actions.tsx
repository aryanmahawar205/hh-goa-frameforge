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
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <button
          onClick={onDownload}
          disabled={disabled || isGenerating}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-white transition-all ${
            disabled || isGenerating
              ? "bg-gray-800 cursor-not-allowed text-gray-500"
              : "bg-blue-600 hover:bg-blue-500 hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-500/25"
          }`}
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              Download Image
            </>
          )}
        </button>

        <button
          onClick={onShareX}
          disabled={disabled || isGenerating}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold transition-all ${
            disabled || isGenerating
              ? "bg-gray-800 cursor-not-allowed text-gray-500"
              : "bg-black border border-[#333] text-white hover:bg-[#111] hover:scale-[1.02] active:scale-95 shadow-lg shadow-white/5"
          }`}
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Wait...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Share to X
            </>
          )}
        </button>
      </div>

      {/* Contextual hint for desktop users */}
      <p className="text-[10px] sm:text-xs text-gray-500 text-center px-4">
        On desktop, you may need to download the image first and attach it manually when sharing.
      </p>
    </div>
  );
}