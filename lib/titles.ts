const titles = [
  "AI Alchemist",
  "Protocol Architect",
  "Code Cartographer",
  "Frontend Wizard",
  "Backend Sorcerer",
  "Data Voyager",
  "Systems Builder",
  "Product Hacker",
  "Open Source Nomad",
  "Cloud Architect",
  "Debugging Wizard",
  "Agent Builder",
  "Infrastructure Architect",
  "Protocol Builder",
  "Creative Technologist",
  "Web3 Pioneer",
  "Logic Weaver",
  "UI/UX Sorcerer",
];

// Simple deterministic hash function for string
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

export function generateBuilderTitle(name: string, stack: string): string {
  if (!name && !stack) return "Builder";

  // Combine name and stack to create a deterministic hash
  const combined = `${name.toLowerCase().trim()}-${stack.toLowerCase().trim()}`;
  const hash = hashString(combined);

  // Pick a title based on the hash
  return titles[hash % titles.length];
}