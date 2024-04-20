import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="h-[50rem] w-full bg-transparent  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}

      <p className="text-9xl sm:text-9xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        CREVO
      </p>
    </div>
  );
}
