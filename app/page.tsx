import { BuilderFlow } from "@/components/builder-flow";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 flex flex-col items-center">
      <header className="w-full max-w-5xl mb-8 text-center md:text-left flex flex-col items-center md:items-start">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white font-space">
          HH Goa 2026
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Build your HH Goa identity. Upload your photo. Tell us what you build. Get your Builder ID.
        </p>
      </header>

      <section className="w-full max-w-5xl">
        <BuilderFlow />
      </section>
    </main>
  );
}
