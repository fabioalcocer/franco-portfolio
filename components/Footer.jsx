import React, { useContext } from 'react'
import Image from 'next/image'
import react from '../public/assets/skills/react.png'
import next from '../public/assets/skills/next.png'
import tailwind from '../public/assets/skills/tailwind.png'
import { LanguageContext } from '../context/LanguageContext'

export default function Footer() {
  const { texts } = useContext(LanguageContext)

  return (
    <footer className='h-40 bg-white py-12 lg:py-0 lg:px-12'>
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between'>
        <div className='flex flex-wrap items-center justify-center gap-2 lg:flex-col lg:flex-nowrap'>
          <h1 className='text-center text-base font-medium text-blue-600'>
            {texts.footerCreated}
          </h1>
          <ul className='flex justify-between gap-2 lg:justify-evenly lg:gap-4'>
            <span className='flex items-center rounded-full p-2 shadow-lg shadow-blue-200'>
              <Image
                src={react}
                alt='Next.js logo'
                width='24px'
                height='24px'
              />
            </span>
            <span className='flex items-center rounded-full p-2 shadow-lg shadow-blue-200'>
              <Image
                src={next}
                alt='Next.js logo'
                width='24px'
                height='16px'
              />
            </span>
            <span className='flex items-center rounded-full p-2 shadow-lg shadow-blue-200'>
              <Image
                src={tailwind}
                alt='Next.js logo'
                width='24px'
                height='24px'
              />
            </span>
          </ul>
        </div>
        <div className='flex items-center gap-2 lg:flex-col'>
          <h2 className='text-sm font-medium text-blue-600 md:text-base'>
            {texts.footerThanks} 😀
          </h2>
          <p className='text-xs font-thin text-blue-600 md:text-sm'>
            {texts.footerUpdate} 03-10-2022
          </p>
        </div>
      </div>
    </footer>
  )
}
