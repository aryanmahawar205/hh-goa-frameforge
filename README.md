# HH Goa FrameForge 2026

A modern, mobile-first web tool designed for the HH Goa 2026 Frame / ID Card Generator challenge.

Upload a photo, tell us what you build, and instantly get your personalized HH Goa 2026 builder identity card, ready to download and share on X.

## Features

- **No Authentication Required:** Instantly jump into the builder flow. No sign-ups or emails needed.
- **Client-Side Processing:** Your photos never leave your browser. They are processed entirely on your device for absolute privacy and speed.
- **Robust Photo Handling:**
  - Supports standard JPG and PNG.
  - Features native client-side HEIC/HEIF conversion (perfect for modern iPhones) using `heic2any`.
  - Automatic cropping/fitting without stretching using CSS `object-fit`.
- **Intelligent Title Generation:** A unique builder title (e.g. *AI Alchemist*, *Protocol Architect*) is deterministically generated based on your name and stack.
- **High Quality Image Export:** Generates an actual, shareable `PNG` directly in the browser via `html-to-image`, rendered at 2x scaling for retina screens.
- **X Sharing Native Support:** Uses the native Mobile Web Share API when possible to seamlessly post the image, and provides an intentional manual fallback for Desktop browsers.

## Project Architecture

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** `lucide-react`
- **Image Processing:** `heic2any` (HEIC decoding), `html-to-image` (DOM rendering)

### Core Components
- `BuilderFlow`: Central state manager integrating the upload, form, preview, and export actions.
- `ImageUpload`: Drag-and-drop zone handling file parsing.
- `BuilderForm`: Clean, accessible inputs for personalization.
- `IdCard`: The visually polished "Format B" social media asset preview.
- `ShareActions`: Action bar orchestrating high-resolution image rendering and native sharing.

## Setup Instructions (Local & Codespaces)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000` in your browser.

## Limitations & Technical Decisions

- **X (Twitter) Sharing Constraint:** It is technically impossible to attach a raw local file blob to an X (Twitter) intent URL on Desktop without first uploading it to a centralized backend. As requested, to maintain a 100% backend-free and secure experience, Desktop users are provided a high-quality download, followed by an Intent link containing their pre-filled hashtag, allowing them to manually drop their image into the post. Mobile devices using the native Share API work flawlessly.
- **HEIC Conversion Delay:** `heic2any` operations block briefly while decoding large iPhone photos on the client side. A loading state dynamically communicates this to the user without crashing the app.