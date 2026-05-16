import siteConfig from "@/config/siteConfig.json"
import { useMotionValueEvent, useScroll, motion, type Variants } from "motion/react"
import React, { useState } from 'react'

export default function DesktopNavbar() {
  const { scrollY } = useScroll()
  const [scrollTrigger, setScrollTrigger] = useState(false)

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0
    if (current < previous && current > 300) {
      setScrollTrigger(true)
    } else {
      setScrollTrigger(false)
    }
  })

  const navbarVariant: Variants = {
    initial: {
      y: '-100%',
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        duration: .2
      }
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: .2
      }
    }
  }

  return (
    <>
      <div className="hidden md:flex flex-row w-full gap-5 p-4 justify-between items-center">
        <a href="#start">
          <img 
            loading="eager"
            width={80} 
            height={80}
            alt="rightside.png"
            src={'/images/logo main.png'}
          />
        </a>
        <ul className="flex flex-row gap-2 items-center">
          {siteConfig.nav.map((nav, index) => (
            <li key={index} className={`text-2xl font-semibold tracking-tighter group hover:scale-110 transition-all duration-300`}>
              <a 
                className={`${index % 2 === 0 ? 'hover:text-primary-main' : 'hover:text-secondary-main'}`}
                href={`#${nav.section}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <motion.div 
        className="fixed top-0 left-0 z-250 border-b-4 border-black bg-white hidden md:block w-full"
        variants={navbarVariant}
        initial={'initial'}
        animate={scrollTrigger ? 'animate' : 'initial'}>
        <div className="flex flex-row w-full gap-5 p-4 justify-between max-w-7xl mx-auto items-center">
          <a href="#start">
            <img 
              loading="eager"
              width={80} 
              height={80}
              alt="rightside.png"
              src={'/images/logo main.png'}
            />
          </a>
          <ul className="flex flex-row gap-2 items-center">
            {siteConfig.nav.map((nav, index) => (
              <li key={index} className={`text-2xl font-semibold tracking-tighter group`}>
                <a 
                  className={`${index % 2 === 0 ? 'hover:text-primary-main' : 'hover:text-secondary-main'} transition-all duration-300`}
                  href={`#${nav.section}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  )
}
