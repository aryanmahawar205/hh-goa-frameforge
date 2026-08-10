import heic2any from "heic2any";

export async function processImageFile(file: File): Promise<string> {
  const isHeic = file.type === "image/heic" || file.type === "image/heif" || file.name.toLowerCase().endsWith(".heic");

  let finalBlob: Blob = file;

  if (isHeic) {
    try {
      const convertedBlob = await heic2any({
        blob: file,
        toType: "image/jpeg",
        quality: 0.8,
      });

      // Handle cases where heic2any returns an array of blobs (animations)
      finalBlob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
    } catch (error) {
      console.error("HEIC conversion failed:", error);
      throw new Error("Failed to convert HEIC image. Please try a JPG or PNG.");
    }
  }

  // Convert to Base64 Data URL instead of Object URL
  // This bypasses html-to-image's strict CORS and caching limitations
  // which often cause net::ERR_FILE_NOT_FOUND when generating blobs
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(finalBlob);
  });
}
