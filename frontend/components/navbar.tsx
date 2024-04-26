"use client";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../src/utils/cn";
import Link from "next/link";

import { IconCalendarMonth } from "@tabler/icons-react";
import logo4 from "../src/assets/logo4.png";
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <>
       <img
        src={logo4}
        alt="Your Company Logo"
        className="fixed mt-1 z-50 h-41 w-96 max-h-24 max-w-24 mr-4"
      />
      <AnimatePresence mode="wait">
        <motion.div
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-full w-2/5 min-w-2/3 fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
            className
          )}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-xl text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-xl">{navItem.name}</span>
            </Link>
          ))}
          <Link
            key={`link=${233}`}
            href="#"
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-xl text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">
              {
                <IconCalendarMonth className="h-4 w-4 text-neutral-500 dark:text-white" />
              }
            </span>
            <span className="hidden sm:block text-xl">Schedule Call</span>
          </Link>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
