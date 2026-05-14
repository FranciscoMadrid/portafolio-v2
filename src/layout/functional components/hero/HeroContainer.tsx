import React from 'react'

export default function HeroContainer() {
  return (
    <section className='min-h-screen relative flex flex-col'>
      {/* Fullstack Dev Text */}
      <div className=' absolute left-0 top-0 p-5'>
        <div className='grid grid-cols-3 font-bold'>
          <span className='text-7xl text-primary-darker col-span-full'>
            Fullstack Dev
          </span>
          <span className='text-3xl text-primary-main col-span-2'>
            Turning ideas,
          </span>
          <div className='flex flex-wrap items-center col-span-full gap-2'>
            <span className='text-3xl text-primary-main'>
              into
            </span>
            <span className='text-6xl text-primary-dark row-span-2'>
              TOOLS
            </span>
          </div>
        </div>
      </div>
      {/* Data Analyst Text */}
      <div className='absolute right-0 bottom-0 p-5 '>
        <div className='flex flex-col font-bold '>
          <span className='text-3xl text-secondary-main'>
            Crafting stories,
          </span>
          <div className='flex flex-wrap items-center gap-2'>
            <span className='text-3xl text-secondary-main'>
              for a new
            </span>
            <span className='text-6xl text-secondary-dark row-span-2'>
              PERSPECTIVE
            </span>
          </div>
          <span className='text-7xl text-secondary-darker col-span-full'>
            Data Analyst
          </span>
        </div>
      </div>
    </section>
  )
}
