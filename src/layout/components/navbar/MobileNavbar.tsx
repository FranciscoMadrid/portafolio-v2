import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, type Variants } from 'motion/react';
import siteConfig from "@/config/siteConfig.json"


export default function MobileNavbar() {
  const [toggle, setToggle] = useState(false)
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
    const handleToggle = () => {
    setToggle(!toggle)
  }
  const handleClose = () => {
    setToggle(false)
  }

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

  const menuVariant: Variants = {
    initial: {
      y: '-100%'
    },
    animate: {
      y: 0,
      transition: {
        ease: 'easeInOut',
        duration: .3
      }
    },
    exit: {
      y: '-100%',
      transition: {
        ease: 'easeInOut',
        duration: .2
      }
    }
  }

  return (
    <motion.div 
      className="block md:hidden fixed top-0 left-0 w-full z-50"
      variants={navbarVariant}
      initial={'intial'}
      animate={scrollTrigger ? 'animate' : 'initial'}
      >
      <div className='relative'>
        
        {/* Sliding Menu */}
        <AnimatePresence>
          {toggle && (
            <motion.div 
              className='absolute top-0 left-0 w-full h-screen bg-white z-10 pt-20'
              variants={menuVariant}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className='w-full bg-background h-1'/>
              <ul className='w-full h-full flex flex-col gap-10 p-5 py-10'>
                {siteConfig.nav.map((nav, index) => (
                  <li 
                    className='flex flex-col gap-2'
                    key={index}>
                    <a
                      onClick={handleClose}
                      href={`#${nav.section}`}>
                      <p className='font-light text-5xl '>{nav.title}</p>
                      <div className='bg-black h-1 w-full rounded-full'/>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navbar */}
        <div className='flex items-center justify-between p-2 px-5 h-20 bg-white relative z-20'>
          <a href="#start">
            <img 
              loading="eager"
              width={80} 
              height={80}
              alt="logo"
              src={'/images/logo main.png'}
            />
          </a>

          <FaBars
            onClick={handleToggle}
            className='cursor-pointer'
            size={36}
          />
        </div>

      </div>
    </motion.div>
  )
}