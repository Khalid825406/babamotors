"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  wordDelay?: number;
  scroll?: boolean;
}

const container = {
  hidden: {},
  visible: (wordDelay: number) => ({
    transition: { staggerChildren: wordDelay },
  }),
};

const word = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function AnimatedText({
  text,
  className,
  delay = 0,
  as = "span",
  wordDelay = 0.08,
  scroll = false,
}: AnimatedTextProps) {
  const words = text.split(" ");
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      {...(scroll
        ? { whileInView: "visible", viewport: { once: true, margin: "-80px" } }
        : { animate: "visible" })}
      variants={container}
      custom={wordDelay}
      transition={{ delayChildren: delay }}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={word} className="inline-block mr-[0.28em]">
          {w}
        </motion.span>
      ))}
    </MotionTag>
  );
}
