export async function shareToX(dataUrl: string, text: string) {
  // Mobile Web Share API
  if (navigator.share) {
    try {
      // We convert the dataUrl back to a File object for the native share intent
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      const file = new File([blob], "HH-Goa-2026-ID.png", { type: "image/png" });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          text: text,
          files: [file],
        });
        return { success: true, method: 'native' };
      }
    } catch (error) {
      console.log("Native share failed or was cancelled", error);
    }
  }

  // Fallback for Desktop (or browsers without File share support)
  // X Intent URLs CANNOT attach local files directly.
  // We trigger the intent, but the user MUST manually attach the downloaded image.
  const intentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(intentUrl, "_blank");
  return { success: true, method: 'intent_fallback' };
}