import * as htmlToImage from "html-to-image";

export async function exportCardToImage(node: HTMLElement): Promise<string> {
  // Try to use highly reliable PNG generation
  // We use a specific pixel ratio to ensure the output is crisp on all devices
  try {
    const dataUrl = await htmlToImage.toPng(node, {
      quality: 1.0,
      pixelRatio: 2, // 2x for retina/social media sharpness
      skipFonts: false,
      cacheBust: true,
      style: {
        transform: "scale(1)",
        margin: "0",
      },
    });
    return dataUrl;
  } catch (error) {
    console.error("Failed to generate image from DOM", error);
    throw new Error("Could not generate image. Please try again.");
  }
}
