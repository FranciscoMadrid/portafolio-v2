import React from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform, type Variants } from "motion/react"
import FadeInWrapper from './FadeInWrapper'

interface TechstackEntryProps{
  className?: string
}
export default function TechstackEntry() {
  const leftContiainer:Variants = {
    initial: {
      y: 0
    },
    animate: {
      y: 40,
      transition:{
        duration: .5,
        ease: 'easeInOut',
        delay: 0.8
      }
    }
  }
  const rightContiainer:Variants = {
    initial: {
      y: 0
    },
    animate: {
      y: -40,
      transition:{
        duration: .5,
        ease: 'easeInOut',
        delay: 0.8
      }
    }
  }
  return (
    <FadeInWrapper className='flex flex-row text-white h-full items-center text-5xl md:text-7xl lg:text-7xl font-bold'>
      <motion.div
        variants={leftContiainer}
        initial={'initial'}
        whileInView={'animate'}
        viewport={{once: true}}
        className='bg-primary-dark [text-shadow:6px_6px_0px_rgba(0,0,0,.3)] p-3 shadow-[10px_10px_0px_rgba(0,0,0,0.3)]'>
          <p>TECH</p>
        </motion.div>
      <motion.div 
        variants={rightContiainer}
        initial={'initial'}
        whileInView={'animate'}
        viewport={{once: true}}
        className='bg-secondary-dark [text-shadow:6px_6px_0px_rgba(0,0,0,.3)] p-3 shadow-[10px_10px_0px_rgba(0,0,0,0.3)]'>
          <p>STACK</p>
        </motion.div>
    </FadeInWrapper>
  )
}
