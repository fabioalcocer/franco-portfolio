import React, { useContext } from 'react'
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { LanguageContext } from '../context/LanguageContext'

export default function Contact() {
  const { texts } = useContext(LanguageContext)

  return (
    <main
      id='contact'
      className='flex h-screen w-full items-center px-8 py-16 text-center md:text-left'
    >
      <div className='m-auto max-w-7xl flex flex-col gap-8 '>
        <section className='col-span-2'>
          <h4 className='py-2 text-base font-light uppercase tracking-widest text-slate-800'>
            🤙 {texts.contactSection}
          </h4>
          <h1 className='py-4 font-extrabold text-blue-600'>
            {texts.contactH1}
          </h1>
          <p className='py-2 text-sm font-normal text-slate-700 md:text-lg'>
            {texts.contactP}
          </p>
        </section>
        <section className='mt-4 md:mt-0'>
          <div className='m-auto flex flex-col justify-between gap-4 md:gap-8'>
            <div className='flex items-center justify-between gap-8'>
              <h6 className='font-medium'>
                <strong className='text-blue-600'>
                  {texts.contactPhone}
                </strong>
                : +541122857609
              </h6>
              <div className='cursor-pointer rounded-full p-4 shadow-md shadow-blue-200 duration-200 ease-in-out hover:scale-105 hover:shadow-pink-300'>
                <a
                  href='https://wa.me/541122857609'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
            <div className='flex items-center justify-between gap-8'>
              <h6 className='font-medium'>
                <strong className='text-blue-600'>Mail</strong>:
                ffrancodangelo@gmail.com
              </h6>
              <div className='cursor-pointer rounded-full p-4 shadow-md shadow-blue-200 duration-200 ease-in-out hover:scale-105 hover:shadow-pink-300'>
                <a
                  href='mailto:ffrancodangelo@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <HiMail />
                </a>
              </div>
            </div>
            <div className='flex items-center justify-between gap-8'>
              <h6 className='font-medium'>
                <strong className='text-blue-600'>Linkedin</strong>:
                in/franco-dangelo/
              </h6>
              <div className='cursor-pointer rounded-full p-4 shadow-md shadow-blue-200 duration-200 ease-in-out hover:scale-105 hover:shadow-pink-300'>
                <a
                  href='https://www.linkedin.com/in/franco-dangelo/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
