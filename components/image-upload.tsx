"use client";

import { useState, useRef } from "react";
import { UploadCloud, X } from "lucide-react";

interface ImageUploadProps {
  onImageChange: (file: File | null) => void;
  currentPhoto: string | null;
}

export function ImageUpload({ onImageChange, currentPhoto }: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onImageChange(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onImageChange(e.target.files[0]);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onImageChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-300 mb-2">Photo</label>
      <div
        className={`relative border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center transition-colors cursor-pointer text-center group ${
          isDragging ? "border-blue-500 bg-blue-500/10" : "border-gray-700 bg-[#1a1a1a] hover:border-gray-500"
        } ${currentPhoto ? "border-transparent bg-transparent p-0 overflow-hidden" : "min-h-[160px]"}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !currentPhoto && fileInputRef.current?.click()}
      >
        <input
          type="file"
          accept="image/png, image/jpeg, image/heic, image/heif"
          className="hidden"
          ref={fileInputRef}
          onChange={handleChange}
        />

        {currentPhoto ? (
          <div className="relative w-full h-48 rounded-xl overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentPhoto}
              alt="Uploaded photo preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button
                onClick={handleRemove}
                className="bg-red-500/80 hover:bg-red-500 text-white p-2 rounded-full transition-colors flex items-center gap-2 px-4"
              >
                <X className="w-4 h-4" /> Remove
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <UploadCloud className="w-6 h-6 text-gray-400" />
            </div>
            <p className="text-sm font-medium text-white mb-1">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-500">JPG, PNG, or HEIC</p>
          </>
        )}
      </div>
    </div>
  );
}