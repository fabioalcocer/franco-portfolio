import Image from 'next/image'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { HiMenuAlt3, HiOutlineX } from 'react-icons/hi'
import { LanguageContext } from '../context/LanguageContext'
import logo from '../public/fdlogo.png'

export default function Navbar() {
  const { texts, handleLanguage } = useContext(LanguageContext)
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const handleLanguageF = (e) => {
    handleLanguage(e)
    handleNav()
  }

  return (
    <nav className='fixed w-full h-20 shadow-lg z-[100] bg-white'>
      <main className='flex justify-between items-center max-w-7xl mx-auto h-full px-6 2xl:px-2'>
        {' '}
        {/* Here is the lg navbar */}
        <section className='flex gap-8'>
          <Image
            src={logo}
            alt='logo'
            width='32px'
            height='32px'
          />
          <div className='hidden md:flex items-center gap-8'>
            <Link
              offset={-200}
              href='/#header'
            >
              <p className='font-semibold text-sm text-blue-600 uppercase hover:text-pink-600 hover:scale-105 duration-200 cursor-pointer'>
                {texts.navbarHome}
              </p>
            </Link>
            <Link href='/#myself'>
              <p className='font-semibold text-sm text-blue-600 uppercase hover:text-pink-600 hover:scale-105 duration-200 cursor-pointer'>
                {texts.navbarMyself}
              </p>
            </Link>
            <Link href='/#projects'>
              <p className='font-semibold text-sm text-blue-600 uppercase hover:text-pink-600 hover:scale-105 duration-200 cursor-pointer'>
                {texts.navbarProjects}
              </p>
            </Link>
            <Link href='/#skills'>
              <p className='font-semibold text-sm text-blue-600 uppercase hover:text-pink-600 hover:scale-105 duration-200 cursor-pointer'>
                {texts.navbarSkills}
              </p>
            </Link>
          </div>
        </section>
        <section className='flex'>
          <ul className='hidden md:flex items-center gap-8'>
            <div className='flex gap-3'>
              <Link
                href='https://drive.google.com/file/d/14mwcYLoMeCfHkqBqd-u8TLnfAcE8QEaM/view?usp=sharing'
                download
              >
                <a
                  className='py-2 px-4 font-semibold text-blue-600 uppercase border border-blue-600 rounded-lg shadow-md shadow-blue-200 cursor-pointer hover:scale-105 hover:shadow-blue-300 ease-in-out duration-200'
                  target='_blank'
                >
                  {texts.navbarButtonCV}
                </a>
              </Link>
              <Link href='/#contact'>
                <button className='py-2 px-4 font-semibold text-[#EFF0F3] uppercase bg-pink-600 rounded-lg shadow-md shadow-pink-200 cursor-pointer hover:scale-105 hover:shadow-pink-300 ease-in-out duration-200'>
                  {texts.navbarButtonContact}
                </button>
              </Link>
              <div className='flex items-center ml-4 space-x-2'>
                <button
                  className='border border-gray-500/50 rounded-sm w-6 hover:shadow-md'
                  value='es'
                  onClick={handleLanguage}
                >
                  🇪🇸
                </button>
                <button
                  className='border border-gray-500/50 rounded-sm px-1 hover:shadow-md'
                  value='en'
                  onClick={handleLanguage}
                >
                  🇺🇲
                </button>
              </div>
            </div>
          </ul>
          {/* Here is the sm burger menu for the navbar */}
          <div
            onClick={handleNav}
            className='md:hidden cursor-pointer text-blue-600'
          >
            <HiMenuAlt3 size={24} />
          </div>
        </section>
      </main>
      {/* Drawer menu for sm devices */}
      <main
        className={
          nav
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-slate-900/80'
            : null
        }
      >
        {/* This is the blur of the bg */}
        <div
          className={
            nav
              ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:[40%] h-screen bg-[#EFF0F3] p-10 ease-in duration-300'
              : 'fixed left-[-100%] top-0 p-10 ease-out duration-500'
          }
        >
          <section>
            <div className='flex w-full items-center justify-between'>
              <Image
                src={logo}
                alt='logo'
                width='40px'
                height='40px'
              />
              <span
                onClick={handleNav}
                className='rounded-full shadow-md shadow-pink-200 p-2 cursor-pointer'
              >
                <HiOutlineX />
              </span>
            </div>
          </section>
          <section>
            <div className='flex w-full mt-8 mb-4 gap-10'>
              <button
                value='es'
                onClick={(e) => {
                  handleLanguage(e)
                  handleNav()
                }}
              >
                🇪🇸
              </button>
              <button
                value='en'
                onClick={handleLanguageF}
              >
                🇺🇲
              </button>
            </div>
            <div className='flex flex-col py-2'>
              <ul>
                <Link href='/#header'>
                  <li
                    onClick={handleNav}
                    className='py-4 font-semibold text-sm text-blue-600 uppercase'
                  >
                    {texts.navbarHome}
                  </li>
                </Link>
                <Link href='/#myself'>
                  <li
                    onClick={handleNav}
                    className='py-4 font-semibold text-sm text-blue-600 uppercase'
                  >
                    {texts.navbarMyself}
                  </li>
                </Link>
                <Link href='/#projects'>
                  <li
                    onClick={handleNav}
                    className='py-4 font-semibold text-sm text-blue-600 uppercase'
                  >
                    {texts.navbarProjects}
                  </li>
                </Link>
                <Link href='/#skills'>
                  <li
                    onClick={handleNav}
                    className='py-4 font-semibold text-sm text-blue-600 uppercase'
                  >
                    {texts.navbarSkills}
                  </li>
                </Link>
                <Link href='/#contact'>
                  <li
                    onClick={handleNav}
                    className='py-4 font-semibold text-sm text-blue-600 uppercase'
                  >
                    {texts.navbarButtonContact}
                  </li>
                </Link>
              </ul>
              <section className='pt-8'>
                <h6 className='tracking-widest text-blue-600 uppercase'>
                  {texts.navbarWTC}
                </h6>
                <div className='flex w-full my-4 items-center justify-between'>
                  <div className='p-3 rounded-full shadow-sm shadow-pink-200 cursor-pointer'>
                    <Link href='/'>
                      <a
                        href='https://www.linkedin.com/in/franco-dangelo/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaLinkedinIn />
                      </a>
                    </Link>
                  </div>
                  <Link href=''>
                    <a
                      href='https://github.com/franodangelo'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='p-3 rounded-full shadow-sm shadow-pink-200 cursor-pointer'>
                        <FaGithub />
                      </div>
                    </a>
                  </Link>
                  <div className='p-3 rounded-full shadow-sm shadow-pink-200 cursor-pointer'>
                    <Link href='/'>
                      <a
                        href='https://twitter.com/techfrano'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaTwitter />
                      </a>
                    </Link>
                  </div>
                </div>
              </section>
              <button className='w-full mt-8 py-2 px-4 font-semibold text-blue-600 uppercase border border-blue-600 rounded-lg shadow-md shadow-blue-200 cursor-pointer hover:scale-105 ease-in-out duration-300'>
                <a
                  href='https://drive.google.com/file/d/1bnItJ1HsNa4XnA-M67K5LFuSu4FZFuEa/view?usp=sharing'
                  download
                  target='_blank'
                  rel='noreferrer'
                >
                  {texts.navbarButtonCV}
                </a>
              </button>
            </div>
          </section>
        </div>
      </main>
    </nav>
  )
}
