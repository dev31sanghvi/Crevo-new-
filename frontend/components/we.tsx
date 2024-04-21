"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../pages/we-highlight";

export function HeroHighlightDemo() {
  return (

    <HeroHighlight>

      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }} id="ehe"
        className="text-5xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        We unlock your brand&apos;s potential to scale using
        {" "}
        <Highlight className="text-black dark:text-white">
          Tech and Content.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
