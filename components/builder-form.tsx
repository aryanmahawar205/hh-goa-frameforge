"use client";

import { ChangeEvent } from "react";

interface BuilderFormProps {
  name: string;
  stack: string;
  onNameChange: (name: string) => void;
  onStackChange: (stack: string) => void;
}

export function BuilderForm({
  name,
  stack,
  onNameChange,
  onStackChange,
}: BuilderFormProps) {
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Limit to reasonable length
    onNameChange(e.target.value.slice(0, 30));
  };

  const handleStackChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Limit to reasonable length
    onStackChange(e.target.value.slice(0, 40));
  };

  return (
    <div className="space-y-4 w-full">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="e.g. Aryan Mahawar"
          className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="stack" className="block text-sm font-medium text-gray-300">
          Stack / Role
        </label>
        <input
          id="stack"
          type="text"
          value={stack}
          onChange={handleStackChange}
          placeholder="e.g. Full Stack + AI"
          className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
        />
      </div>
    </div>
  );
}