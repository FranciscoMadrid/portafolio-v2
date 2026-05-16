import React, { type ReactNode } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform, type Variants } from "motion/react"

interface FadeInWrapperProps {
  children: ReactNode,
  className?: string,
  delay?: number,
}

export default function FadeInWrapper({children, className, delay}:FadeInWrapperProps) {
  const containerVariant:Variants = {
    initial: {
      opacity: 0,
      y: 18,
      scale: .98,
      filter: "blur(8px)"
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: .8,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }
    },
  }
  return (
    <motion.div 
      className={className}
      variants={containerVariant}
      initial={'initial'}
      whileInView={'animate'}
      viewport={{
        once: true,
        amount: .2
      }}>
      {children}
    </motion.div>
  )
}
