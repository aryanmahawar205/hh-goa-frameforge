"use client";

import { useState, useMemo, useRef } from "react";
import { ImageUpload } from "./image-upload";
import { BuilderForm } from "./builder-form";
import { generateBuilderTitle } from "@/lib/titles";
import { IdCard } from "./id-card";
import { ShareActions } from "./share-actions";

export function BuilderFlow() {
  const [photoDataUrl, setPhotoDataUrl] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [stack, setStack] = useState("");
  const [team, setTeam] = useState("");

  const builderTitle = useMemo(() => generateBuilderTitle(name, stack), [name, stack]);

  const [isProcessingImage, setIsProcessingImage] = useState(false);
  const [isGeneratingExport, setIsGeneratingExport] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!cardRef.current) return;

    setIsGeneratingExport(true);
    setErrorMsg(null);

    try {
      const { exportCardToImage } = await import("@/lib/export-image");
      const dataUrl = await exportCardToImage(cardRef.current);

      const link = document.createElement("a");
      link.download = `HH-Goa-2026-${name.replace(/\s+/g, '-').toLowerCase() || 'builder'}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("Failed to export image.");
      }
    } finally {
      setIsGeneratingExport(false);
    }
  };

  const handleShareX = async () => {
    if (!cardRef.current) return;

    setIsGeneratingExport(true);
    setErrorMsg(null);

    try {
      const { exportCardToImage } = await import("@/lib/export-image");
      const dataUrl = await exportCardToImage(cardRef.current);
      const text = `Just got my HH Goa 2026 Builder ID.\n\nBuilding with ${stack || 'amazing tech'} and bringing the builder energy to Goa.\n\n#FrameInGoa`;

      const { shareToX } = await import("@/lib/share");
      await shareToX(dataUrl, text);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("Failed to share.");
      }
    } finally {
      setIsGeneratingExport(false);
    }
  };

  const handleImageChange = async (file: File | null) => {
    setErrorMsg(null);

    if (file) {
      setIsProcessingImage(true);
      try {
        const { processImageFile } = await import("@/lib/image-processing");
        const url = await processImageFile(file);
        setPhotoDataUrl(url);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setErrorMsg(err.message);
        } else {
          setErrorMsg("Failed to process image.");
        }
        setPhotoDataUrl(null);
      } finally {
        setIsProcessingImage(false);
      }
    } else {
      setPhotoDataUrl(null);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      <div className="space-y-6">
        {/* Left Column: Form & Upload */}
        <div className="bg-[#111111] border border-[#222] rounded-xl p-6 space-y-6">
          <h2 className="text-xl font-semibold text-white">Create My ID</h2>

          <ImageUpload
            onImageChange={handleImageChange}
            currentPhoto={photoDataUrl}
          />

          {isProcessingImage && (
            <p className="text-sm text-blue-400 animate-pulse">Processing image...</p>
          )}

          {errorMsg && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-md text-sm">
              {errorMsg}
            </div>
          )}

          <BuilderForm
            name={name}
            stack={stack}
            team={team}
            onNameChange={setName}
            onStackChange={setStack}
            onTeamChange={setTeam}
          />
        </div>
      </div>

      <div className="space-y-6 flex flex-col items-center">
        {/* Right Column: Preview & Actions */}
        <div className="bg-[#111111] border border-[#222] rounded-xl p-6 w-full flex flex-col items-center justify-center min-h-[400px]">
          <IdCard
            ref={cardRef}
            photo={photoDataUrl}
            name={name}
            stack={stack}
            team={team}
            title={builderTitle}
          />

          <ShareActions
            onDownload={handleDownload}
            onShareX={handleShareX}
            isGenerating={isGeneratingExport}
            disabled={!photoDataUrl || !name || !stack}
          />
        </div>
      </div>
    </div>
  );
}