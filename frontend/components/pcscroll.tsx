import React from "react";
import { ContainerScroll } from "../pages/scroll-animation"
import { motion } from "framer-motion";
import { cn } from "../src/utils/cn";

const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1   px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};

interface HeroScrollProps {}

export const HeroScrollDemo: React.FC<HeroScrollProps> = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <div className="text-4xl font-semibold text-black dark:text-white">
            We unlock your brand&apos;s potential to scale using <br />
              <div className="text-4xl md:text-[4rem] my-5 font-bold leading-none">
              <Highlight className="text-black dark:text-white">
          Tech and Content.
        </Highlight>
              </div>
            </div>
          </>
        }
      >
        <img
          src="/src/assets/logo4.png" // Assuming the image is in the src/assets folder
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
