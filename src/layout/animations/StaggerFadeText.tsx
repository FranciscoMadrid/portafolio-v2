import { motion, type Variants } from "motion/react";

interface StaggerFadeTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function StaggerFadeText({
  text,
  className = "",
  delay = 0,
}: StaggerFadeTextProps) {
  return (
    <motion.p
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delayChildren: delay }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
}