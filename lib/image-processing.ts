import heic2any from "heic2any";

export async function processImageFile(file: File): Promise<string> {
  const isHeic = file.type === "image/heic" || file.type === "image/heif" || file.name.toLowerCase().endsWith(".heic");

  if (isHeic) {
    try {
      const convertedBlob = await heic2any({
        blob: file,
        toType: "image/jpeg",
        quality: 0.8,
      });

      // Handle cases where heic2any returns an array of blobs (animations)
      const blobToUse = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
      return URL.createObjectURL(blobToUse);
    } catch (error) {
      console.error("HEIC conversion failed:", error);
      throw new Error("Failed to convert HEIC image. Please try a JPG or PNG.");
    }
  }

  return URL.createObjectURL(file);
}