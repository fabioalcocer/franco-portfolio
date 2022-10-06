import React, { useContext } from 'react'
import Image from 'next/image'
import me from '../public/assets/profilepic.jpg'
import { LanguageContext } from '../context/LanguageContext'

export default function Myself() {
  const { texts } = useContext(LanguageContext)

  return (
    <main
      id='myself'
      className='flex w-full items-center py-16 px-8 text-center md:h-screen md:text-left'
    >
      <div className='m-auto max-w-[1280px] grid-cols-3 items-center gap-8 md:grid'>
        <section className='col-span-2'>
          <h4 className='py-2 text-base font-light uppercase tracking-widest text-slate-800'>
            👦 {texts.myselfSection}
          </h4>
          <h2 className='py-4 font-extrabold leading-[1.2] text-blue-600'>
            {texts.myselfH1}
          </h2>
          <p className='py-2 text-sm font-normal text-slate-600 md:text-lg'>
            {texts.myselfP}
          </p>
          <a
            href='https://www.linkedin.com/in/franco-dangelo/'
            target='_blank'
            rel='noreferrer'
          >
            <span className='cursor-pointer font-semibold text-pink-600 underline'>
              {texts.myselfP2}
            </span>
          </a>
        </section>
        <div className='my-4 h-auto w-full items-center justify-center rounded-lg p-4 shadow-lg shadow-blue-200'>
          <Image
            className='rounded-xl'
            src={me}
            alt='picture of Frano'
            layout='responsive'
            width={80}
            height={80}
          />
        </div>
      </div>
    </main>
  )
}
