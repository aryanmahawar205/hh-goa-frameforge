# AGENTS.md

## Project

HH Goa FrameForge is a mobile-first web application for the HH Goa 2026 Frame / ID Card Generator challenge.

The primary experience is Format B: a personalized Builder ID Card generated from a user's photo, name, stack/role, and a generated builder title.

The application must provide a frictionless flow:

Upload Photo → Personalize → Generate → Preview → Download / Share to X

The project is initially developed and tested locally and through GitHub Codespaces. Deployment is explicitly out of scope until the local version is complete and verified.

---

## Primary Goal

Build a polished, production-quality-feeling prototype rather than a generic CRUD application or a basic image overlay.

The final generated graphic must feel intentionally designed for HH Goa 2026 and should be something a participant would genuinely want to share on social media.

The uploaded person/photo must remain the visual hero.

---

## Engineering Principles

### 1. User experience first

The application should be extremely simple:

1. Upload photo
2. Enter minimal details
3. Generate
4. Preview
5. Download or share

Avoid unnecessary steps.

Do not introduce authentication, accounts, email collection, databases, or signup flows unless a later requirement absolutely requires them.

---

### 2. Client-first architecture

Prefer client-side processing wherever practical.

The MVP should not require a backend for:

- Photo processing
- Image cropping/fitting
- Card rendering
- Builder title generation
- Downloading the generated image

Avoid unnecessary API calls.

---

### 3. Real image output

The generated graphic must be exportable as an actual PNG/JPEG image file.

The application must not merely display an HTML card and call that the final output.

Preview and exported output should be generated from the same rendering logic wherever practical so that they remain visually consistent.

---

### 4. Real-world photos

Never assume the user has already cropped their photo.

The application should support:

- Portrait photos
- Landscape photos
- Square photos
- Off-center photos
- Different aspect ratios
- Typical phone-camera images
- JPG
- JPEG
- PNG
- HEIC / HEIF

Images should never be stretched.

Use appropriate cover/contain/cropping logic and graceful fallback behavior.

---

### 5. Mobile-first

Most users will access the application from a phone.

Prioritize:

- Touch-friendly controls
- Large buttons
- Easy photo upload
- Responsive preview
- No horizontal overflow
- Fast interaction
- Clear visual hierarchy
- Easy download/share

Desktop should also have a polished experience.

---

### 6. Visual quality

Do not build a generic badge and paste an HH Goa logo onto it.

The design should have a cohesive visual system:

- Typography
- Layout
- Borders
- Shapes
- Decorative elements
- Photo treatment
- HH Goa 2026 identity
- Builder-oriented language
- Strong hierarchy

The result should immediately feel like an event/community identity graphic.

---

### 7. Avoid overengineering

Do not introduce:

- Microservices
- Databases
- Authentication
- Complex state management
- Unnecessary backend APIs
- Unnecessary infrastructure

unless the implementation genuinely requires them.

Prefer a simple, maintainable architecture.

---

## Recommended Technology Direction

Preferred stack unless investigation reveals a strong reason otherwise:

- Next.js
- React
- TypeScript
- Tailwind CSS
- HTML Canvas / OffscreenCanvas for image rendering where appropriate
- Client-side HEIC conversion
- Lucide or equivalent lightweight icon library

Use modern stable versions compatible with the environment.

Do not blindly follow these recommendations if a better technical approach is clearly justified.

---

## Primary Feature

Format B — Builder ID Card

The card should contain:

- Uploaded photo
- Name
- Stack / role
- Generated builder title
- HH Goa 2026 identity
- Event/community visual treatment

Example builder titles:

- AI Alchemist
- Protocol Architect
- Code Cartographer
- Frontend Wizard
- Backend Sorcerer
- Data Voyager
- Systems Builder
- Product Hacker
- Open Source Nomad
- Cloud Architect
- Agent Builder
- Infrastructure Architect
- Creative Technologist

Titles should feel playful and builder-oriented rather than corporate.

---

## Secondary Feature

Format A — PFP Frame / Overlay

This should only be implemented after Format B is polished and fully functional.

Do not sacrifice the quality of Format B merely to implement both formats.

---

## Required Flow

The application should support:

1. Landing page
2. Photo upload
3. Automatic image handling
4. Minimal personalization
5. Builder title generation
6. Live/final preview
7. Real image export
8. Download
9. Share to X

No login wall.

No signup gate.

No unnecessary onboarding.

---

## X Sharing

The application should provide a Share to X action with a pre-filled caption containing:

#FrameInGoa

The implementation must be technically honest about X's limitations.

Do not falsely claim that a browser-generated local image has been attached to an X post if the browser cannot actually attach it through the chosen mechanism.

If direct image attachment cannot be reliably achieved client-side, implement the best technically valid sharing flow available and clearly structure the application so a future backend/share endpoint can support generated OG images.

---

## Performance

The experience should feel near-instant.

Avoid unnecessary:

- Network requests
- Server-side image processing
- Heavy dependencies
- Blocking loading screens

Image generation should happen within seconds for normal phone photos.

---

## Privacy

Prefer processing photos locally in the browser.

Do not persist user photos.

Do not add analytics or tracking unless explicitly requested later.

---

## Development Environment

The initial target is:

- Local development
- GitHub Codespaces

Deployment is NOT part of the current task.

Do not spend implementation time on production hosting until explicitly requested.

---

## Quality Standard

Do not stop after making the happy path work.

Test:

- JPG
- JPEG
- PNG
- HEIC/HEIF
- Portrait
- Landscape
- Square
- Off-center images
- Large phone photos
- Empty form states
- Invalid files
- Very long names
- Long stack/role strings
- Mobile viewport
- Desktop viewport
- Downloaded image
- Share flow
- Build
- Lint
- TypeScript

The application should not break because of unusual but valid user input.

---

## Code Quality

Prefer:

- Clear naming
- Small focused components
- Reusable utilities
- Strong TypeScript typing
- Accessible controls
- Semantic HTML
- Maintainable CSS
- Minimal duplication

Do not write unnecessarily complicated abstractions.

---

## Important Implementation Rule

Before implementation, inspect the existing repository and environment.

Do not immediately start writing code.

In Review/Plan mode:

1. Analyze the requirements.
2. Inspect the repository.
3. Determine the best architecture.
4. Identify technical risks.
5. Determine how image rendering/export should work.
6. Determine how HEIC support should work.
7. Determine the X share limitations and best implementation.
8. Plan responsive UX.
9. Plan testing.
10. Propose the files/components to create.
11. Explain dependencies.
12. Identify anything requiring a decision before implementation.

After the plan is approved, implement the complete application end-to-end.

---

## Definition of Done

The project is not considered complete merely because the development server starts.

Done means:

- The application is visually polished.
- Format B works end-to-end.
- Users can upload real photos.
- HEIC is handled.
- Photos of different aspect ratios work.
- Builder information is editable.
- Builder titles are generated.
- HH Goa 2026 visual identity is clear.
- Preview works.
- Final image can be downloaded.
- X sharing works as far as browser/platform constraints allow.
- Mobile experience is polished.
- Desktop experience is polished.
- No authentication is required.
- No signup is required.
- Build passes.
- Lint passes.
- TypeScript passes.
- Major edge cases have been tested.
- README documents the final implementation and local setup.

Only after this should Format A or additional enhancements be considered.
