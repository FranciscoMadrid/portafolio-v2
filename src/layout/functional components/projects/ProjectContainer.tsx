import React from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform, type Variants } from "motion/react"
import ProjectDetail from './ProjectDetail'
import projectInfo from '@/config/projectConfig.json'

export default function ProjectContainer() {
  const containerVariant: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: .2
      }
    }
  }
  const underlineVariant: Variants = {
    initial: {
      scaleX: 0
    },
    animate: {
      scaleX: 1,
      transition: {
        ease: 'easeOut',
        duration: .8,
      }
    }
  }
  return (
    <>
      <div className="flex flex-col gap-2 max-w-7xl mx-auto p-5">
        <div className='w-fit flex flex-col gap-2'>
          <p className="text-7xl font-bold [text-shadow:6px_6px_0px_rgba(0,0,0,.3)] text-white">PROJECTS</p>
          <motion.div
            variants={containerVariant}
            initial={'initial'}
            whileInView={'animate'}
            viewport={{once: true, amount: 'all'}}
            className="flex flex-col gap-3 items-start">
            <motion.div variants={underlineVariant} className="h-4 origin-left w-full shadow-[6px_6px_0px_rgba(0,0,0,0.3)] bg-white"/>
            <motion.div variants={underlineVariant} className="h-4 origin-left w-1/2 shadow-[6px_6px_0px_rgba(0,0,0,0.3)] bg-white"/>
            <motion.div variants={underlineVariant} className="h-4 origin-left w-1/4 shadow-[6px_6px_0px_rgba(0,0,0,0.3)] bg-white"/>
          </motion.div>
        </div>
      </div>
      {projectInfo.map((project, index) => (
        <ProjectDetail
          key={index}
          className={index % 2 === 0 ? 'bg-primary-main' : 'bg-secondary-main'}
          content={project.content}
          images={project.images}
          site={project.site}
          tags={project.tags}
          title={project.title}
          github={project.github}
        />
      ))}
    </>
  )
}
