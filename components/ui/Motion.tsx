"use client";

import type { PropsWithChildren } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right";

type MotionRevealProps = PropsWithChildren<{
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
}>;

function getOffset(direction: Direction) {
  if (direction === "left") return { x: -24, y: 0 };
  if (direction === "right") return { x: 24, y: 0 };
  return { x: 0, y: 24 };
}

export function MotionReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
}: MotionRevealProps) {
  const reduce = useReducedMotion();
  const offset = getOffset(direction);

  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? { opacity: 1 } : { opacity: 0, ...offset }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduce ? 0 : duration, delay: reduce ? 0 : delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

type MotionStaggerProps = PropsWithChildren<{
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}>;

export function MotionStagger({
  children,
  className,
  delayChildren = 0.05,
  staggerChildren = 0.1,
}: MotionStaggerProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: reduce ? undefined : { delayChildren, staggerChildren },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

type MotionItemProps = PropsWithChildren<{
  className?: string;
}>;

export function MotionItem({ children, className }: MotionItemProps) {
  const reduce = useReducedMotion();
  const variants: Variants = reduce
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
      };

  return (
    <motion.div className={cn(className)} variants={variants}>
      {children}
    </motion.div>
  );
}
