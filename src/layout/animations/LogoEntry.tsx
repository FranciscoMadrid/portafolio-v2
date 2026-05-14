import React, { type ReactNode } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform, type Variants } from "motion/react"

interface LogoEntryProps {
  children: ReactNode,
  xDistance?: string,
  yDistance?: string
}
export default function LogoEntry({children, xDistance = '20vw', yDistance = '20vh'}:LogoEntryProps) {
  const containerVariant:Variants = {
    initial: {
      x: 0
    },
    animate: {
      x: [0, xDistance, xDistance],
      y: [0, 0, yDistance],
      transition: {
        ease: 'easeInOut',
        duration: 2,
        times: [0, 0.5, 1],
        delay: 0.5
      }
    }
  }
  return (
    <motion.div
      variants={containerVariant}
      initial={'initial'}
      animate={'animate'}
    >
      {children}
    </motion.div>
  )
}
