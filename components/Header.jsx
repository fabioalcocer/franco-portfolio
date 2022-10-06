import React, { useContext } from 'react'
import Link from 'next/link'
import { LanguageContext } from '../context/LanguageContext'
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Header() {
  const { texts } = useContext(LanguageContext)

  return (
    <header
      id='header'
      className='h-screen w-full text-center'
    >
      <main className='mx-auto flex h-full w-full items-center justify-center'>
        <section className='flex w-[80%] flex-col'>
          <p className='py-2 text-base font-light uppercase tracking-widest text-slate-800'>
            🚀 {texts.headerSection}
          </p>
          <h1 className='py-4 font-extrabold text-blue-600'>
            {texts.headerH1}
          </h1>
          <h4 className='py-2 font-light'>{texts.headerH2} 🇦🇷</h4>
          <div className='m-auto my-8 flex items-end justify-between gap-8 md:gap-16'>
            <div className='cursor-pointer rounded-full p-4 shadow-md shadow-blue-200 duration-200 ease-in-out hover:scale-105 hover:shadow-blue-300'>
              <Link href='/'>
                <a
                  href='https://www.linkedin.com/in/franco-dangelo/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaLinkedinIn className='text-2xl' />
                </a>
              </Link>
            </div>
            <Link href=''>
              <a
                href='https://github.com/franodangelo'
                target='_blank'
                rel='noreferrer'
              >
                <div className='cursor-pointer rounded-full p-4 shadow-md shadow-blue-200 duration-200 ease-in-out hover:scale-105 hover:shadow-blue-300'>
                  <FaGithub className='text-2xl' />
                </div>
              </a>
            </Link>
            <div className='cursor-pointer rounded-full p-4 shadow-md shadow-blue-200 duration-200 ease-in-out hover:scale-105 hover:shadow-blue-300'>
              <Link href=''>
                <a
                  href='https://twitter.com/techfrano'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaTwitter className='text-2xl' />
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </header>
  )
}
