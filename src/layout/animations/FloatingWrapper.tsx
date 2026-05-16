import React, { type ReactNode, useMemo } from "react"
import { motion } from "motion/react"

interface FloatingWrapperProps {
  children: ReactNode
  reverse?: boolean
  delay?: number
  className?: string
  intensity?: number
}

export default function FloatingWrapper({
  children,
  className,
  reverse = false,
  delay = 0,
  intensity = 1,
}: FloatingWrapperProps) {

  const animation = useMemo(() => {
    const random = (min: number, max: number) =>
      Math.random() * (max - min) + min

    const multiplier = reverse ? -1 : 1

    return {
      y: [
        0,
        random(-18, -10) * multiplier * intensity,
        random(-6, 6) * intensity,
        random(10, 18) * multiplier * intensity,
        0,
      ],
      x: [
        0,
        random(-10, -4) * multiplier * intensity,
        random(4, 10) * intensity,
        random(-8, 8) * multiplier * intensity,
        0,
      ],
      rotate: [
        0,
        random(-4, -1) * multiplier,
        random(1, 3),
        random(-3, 3),
        0,
      ],
      scale: [1, 1.015, 0.99, 1.01, 1],
    }
  }, [reverse, intensity])

  return (
    <motion.div
      className={className}
      animate={animation}
      transition={{
        duration: 8 + Math.random() * 6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay,
      }}
      style={{
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  )
}
