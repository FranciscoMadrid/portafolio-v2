import StaggerFadeText from '@/layout/animations/StaggerFadeText';
import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface ProjectDetailProps {
  className?: string,
  title: string,
  site: string,
  github?: string,
  tags: { category: string; }[],
  content: string,
  images: {img: string;}[]
}
export default function ProjectDetail({className, title, content, tags, github, images, site}:ProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState(images[0].img)
  const [view, setView] = useState(false);

  const handleSelect = (selected: string) => {
    setSelectedImage(selected)
  }

  const handleView = () => {
    setView(!view)
  }

  const handleViewClose = () => {
    setView(false)
  }
  return (
    <div className={`${className} min-h-screen w-full p-10 py-20`}>
      <div className='flex flex-col w-full h-full max-w-5xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 items-center justify-between'>
          <StaggerFadeText 
            text={title}
            delay={0.3}
            className='text-white flex [text-shadow:6px_6px_0px_rgba(0,0,0,.3)] font-bold text-4xl md:text-5xl lg:text-6xl'/>
          {/* Buttons */}
          <div className='flex flex-row gap-10 py-5 items-center justify-start md:justify-end'>
            {github && (
              <a 
                href={github}
                target="_blank"
                className='p-1 px-5 border-3 border-white/80 text-black flex transition-colors ease-in-out duration-200 hover:bg-black hover:text-white flex-row gap-5 bg-white w-fit items-center rounded-full'>
                <FaGithub
                  className='w-6 h-6 md:h-10 md:2-10'
                  size={36}/>
                <p className='font-extrabold'>Code</p>
              </a>
            )}
            <a 
              href={site}
              target="_blank"
              className='p-1 px-5 border-3 border-white/80 text-black flex transition-colors ease-in-out duration-200 hover:bg-black hover:text-white flex-row gap-5 bg-white w-fit items-center rounded-full'>
              <FaGlobe
                className='w-6 h-6 md:h-10 md:2-10'
                size={36}/>
              <p className='font-extrabold'>Site</p>
            </a>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-[60%_40%] gap-5'>
          {/* Image Gallery */}
          <div className='flex flex-col gap-5'>
            <div className='w-full h-75 md:h-150 border-2 cursor-pointer'
              onClick={handleView}>
              <img 
                loading='lazy'
                alt={`${selectedImage}`}
                className='w-full h-full object-cover'
                src={selectedImage}/>
            </div>
            <div className='flex flex-wrap gap-5 w-full'>
              {images.map((img, index) => (
                <div key={index} className='w-20 h-20 md:w-30 md:h-30 cursor-pointer border-2 hover:border-white ease-in-out transition-colors duration-150'>
                  <img
                    loading='lazy'
                    alt={`${img.img}`}
                    onClick={() => handleSelect(img.img)}
                    className='w-full h-full object-cover'
                    src={img.img}/>
                </div>
              ))}
            </div>
          </div>
          {/* Content side */}
          <div className='flex flex-col gap-5'>
            <p className='font-medium [text-shadow:2px_2px_0px_rgba(0,0,0,.3)] leading-relaxed tracking-wide text-white text-lg md:text-xl lg:text-2xl'>
              {content}
            </p>
            <div className='flex flex-wrap gap-5 items-center'>
              {tags.map((tag, index) => (
                <div 
                  key={index}
                  className='p-1 px-5 border-3 border-black/60 hover:border-black text-white flex transition-colors ease-in-out duration-200 hover:bg-white/80 hover:text-black flex-row gap-5 bg-black/50 w-fit items-center rounded-full'>
                  <p className='font-extrabold'>{tag.category}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      {/* Singular Image View */}
      <AnimatePresence mode='wait'>
        {view && (
          <motion.div className='fixed top-0 left-0 h-full w-full bg-black/60 z-[251]'
            onClick={handleViewClose}
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}>
            <div className='relative w-full h-full p-2'>
              {/* Image View */}
              <div 
                className='absolute flex flex-col w-[95%] h-[95%] md:w-[85%] md:h-[85%] top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2'>
                <div className='w-full h-full flex justify-center items-center'>
                  <img
                    onClick={(e) => e.stopPropagation()}
                    loading='lazy'
                    alt={`${selectedImage}`}
                    className='w-fit h-fit md:h-full object-center'
                    src={selectedImage}
                  />
                </div>
              </div>
              <div 
                className='place-self-end p-2 group rounded-full w-fit bg-black/50 hover:bg-white transition-colors ease-in-out duration-200 cursor-pointer'
                onClick={handleViewClose}>
                <IoClose 
                  className='text-white/50 group-hover:text-black'
                  size={28}/>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
