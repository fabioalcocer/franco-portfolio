import { useContext } from 'react'
import Image from 'next/image'
import javascript from '../public/assets/skills/javascript.png'
import react from '../public/assets/skills/react.png'
import redux from '../public/assets/skills/redux.png'
import node from '../public/assets/skills/node.png'
import express from '../public/assets/skills/express.png'
import postgresql from '../public/assets/skills/postgresql.png'
import html from '../public/assets/skills/html.png'
import css from '../public/assets/skills/css.png'
import sequelize from '../public/assets/skills/sequelize.png'
import tailwind from '../public/assets/skills/tailwind.png'
import bootstrap from '../public/assets/skills/bootstrap.png'
import typescript from '../public/assets/skills/typescript.png'
import next from '../public/assets/skills/next.png'
import dart from '../public/assets/skills/dart.png'
import swift from '../public/assets/skills/swift.png'
import vsc from '../public/assets/skills/vsc.png'
import npm from '../public/assets/skills/npm.png'
import github from '../public/assets/skills/github.png'
import figma from '../public/assets/skills/figma.png'
import adobexd from '../public/assets/skills/adobexd.png'
import notion from '../public/assets/skills/notion.png'
import jira from '../public/assets/skills/jira.png'
import trello from '../public/assets/skills/trello.png'
import { LanguageContext } from '../context/LanguageContext'

export default function Skills() {
  const { texts } = useContext(LanguageContext)

  return (
    <main
      id='skills'
      className='w-full md:h-full py-24'
    >
      <div className='flex flex-col max-w-[1280px] h-full mx-auto justify-center items-center md:items-start'>
        <h4 className='py-2 font-light text-base text-slate-800 uppercase tracking-widest'>
          📚 {texts.skillsSection}
        </h4>
        <h2 className='my-4 py-4 font-extrabold text-blue-600'>
          {texts.skillsH1}
        </h2>
        <section className='grid w-full p-4 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <div className='p-4 shadow-md shadow-yellow-200 bg-white rounded-lg hover:scale-105 hover:-0 ease-in-out duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-between items-center'>
              <span className='m-auto'>
                <Image
                  src={javascript}
                  alt='JavaScript logo'
                  width='64px'
                  height='64px'
                />
              </span>
              <h6>JavaScript</h6>
            </div>
          </div>
          <div className='p-4 shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 hover:-0 ease-in-out duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-between items-center'>
              <span className='m-auto'>
                <Image
                  src={react}
                  alt='React logo'
                  width='64px'
                  height='64px'
                />
              </span>
              <h6>React</h6>
            </div>
          </div>
          <div className='p-4 shadow-md shadow-violet-200 bg-white rounded-lg hover:scale-105 hover:-0 ease-in-out duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-between items-center'>
              <span className='m-auto'>
                <Image
                  src={redux}
                  alt='Redux logo'
                  width='64px'
                  height='64px'
                />
              </span>
              <h6>Redux</h6>
            </div>
          </div>
          <div className='p-4 shadow-md shadow-green-200 bg-white rounded-lg hover:scale-105 hover:-0 ease-in-out duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-between items-center'>
              <span className='m-auto'>
                <Image
                  src={node}
                  alt='node.js logo'
                  width='64px'
                  height='64px'
                />
              </span>
              <h6>node.js</h6>
            </div>
          </div>
          <div className='p-4 shadow-md rounded-lg bg-white hover:scale-105 hover:-0 ease-in-out duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-between items-center'>
              <span className='m-auto'>
                <Image
                  src={express}
                  alt='Express logo'
                  width='64px'
                  height='64px'
                />
              </span>
              <h6>Express</h6>
            </div>
          </div>
          <div className='p-4 shadow-md shadow-blue-200 bg-white rounded-lg hover:scale-105 hover:-0 ease-in-out duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-between items-center'>
              <span className='m-auto'>
                <Image
                  src={postgresql}
                  alt='PostgreSQL logo'
                  width='64px'
                  height='64px'
                />
              </span>
              <h6>PostgreSQL</h6>
            </div>
          </div>
          <div className='p-4 shadow-md shadow-blue-200 bg-white rounded-lg hover:scale-105 hover:-0 ease-in-out duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-between items-center'>
              <span className='m-auto'>
                <Image
                  src={sequelize}
                  alt='Sequelize logo'
                  width='64px'
                  height='70px'
                />
              </span>
              <h6>Sequelize</h6>
            </div>
          </div>
          <div className='p-4 items-center shadow-md bg-white rounded-lg hover:scale-105 hover:-0 ease-in-out duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-between items-center'>
              <span className='m-auto'>
                <Image
                  src={next}
                  alt='Next.js logo'
                  width='80px'
                  height='56px'
                />
              </span>
              <h6>Next.js</h6>
            </div>
          </div>
          <div className='p-4 shadow-md shadow-orange-200 bg-white rounded-lg hover:scale-105 hover:-0 ease-in-out duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-between items-center'>
              <span className='m-auto'>
                <Image
                  src={html}
                  alt='HTML logo'
                  width='64px'
                  height='64px'
                />
              </span>
              <h6>HTML</h6>
            </div>
          </div>
          <div className='p-4 shadow-md shadow-blue-200 bg-white rounded-lg hover:scale-105 hover:-0 ease-in-out duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-between items-center'>
              <span className='m-auto'>
                <Image
                  src={css}
                  alt='CSS logo'
                  width='64px'
                  height='64px'
                />
              </span>
              <h6>CSS</h6>
            </div>
          </div>
          <div className='p-4 shadow-md shadow-teal-200 bg-white rounded-lg hover:scale-105 hover:-0 ease-in-out duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-between items-center'>
              <span className='m-auto'>
                <Image
                  src={tailwind}
                  alt='tailwindcss logo'
                  width='64px'
                  height='64px'
                />
              </span>
              <h6>tailwindcss</h6>
            </div>
          </div>
          <div className='p-4 shadow-md shadow-purple-200 bg-white rounded-lg hover:scale-105 hover:-0 ease-in-out duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-between items-center'>
              <span className='m-auto'>
                <Image
                  src={bootstrap}
                  alt='Bootstrap logo'
                  width='80px'
                  height='64px'
                />
              </span>
              <h6>Bootstrap</h6>
            </div>
          </div>
        </section>
        <h6 className='my-8 py-4 font-extrabold text-blue-600'>
          {texts.skillsH2}
        </h6>
        <section className='grid w-full p-4 gap-4 md:grid-cols-3'>
          <div className='p-4 shadow-md shadow-blue-200 bg-white rounded-lg hover:scale-105 hover:-0 ease-in-out duration-300'>
            <div className='flex gap-5 justify-center items-center'>
              <span className=''>
                <Image
                  src={typescript}
                  alt='TypeScript logo'
                  width='48px'
                  height='48px'
                />
              </span>
              <h6>TypeScript</h6>
            </div>
          </div>
					<div className='p-4 shadow-md shadow-blue-200 bg-white rounded-lg hover:scale-105 hover:-0 ease-in-out duration-300'>
            <div className='flex gap-5 justify-center items-center'>
              <span className=''>
                <Image
                  src={dart}
                  alt='Dart logo'
                  width='48px'
                  height='48px'
                />
              </span>
              <h6>Dart</h6>
            </div>
          </div>
					<div className='p-4 shadow-md shadow-blue-200 bg-white rounded-lg hover:scale-105 hover:-0 ease-in-out duration-300'>
            <div className='flex gap-5 justify-center items-center'>
              <span className=''>
                <Image
                  src={swift}
                  alt='Swift logo'
                  width='48px'
                  height='48px'
                />
              </span>
              <h6>Swift</h6>
            </div>
          </div>
        </section>
        <h6 className='my-8 py-4 self-center font-extrabold text-blue-600'>
          {texts.skillsH3}
        </h6>
        <section className='grid md:w-[50%] mx-4 p-4 self-center divide-y-2 rounded-lg bg-white shadow-md'>
          <div className='p-4'>
            <div className='flex gap-2 justify-between items-center'>
              <h6 className='basis-2/5 text-xs md:text-base'>
                {texts.skillsSh1}
              </h6>
              <div className='flex gap-4'>
                <span className='m-auto'>
                  <Image
                    src={vsc}
                    alt='Visual Studio Code logo'
                    width='48px'
                    height='48px'
                  />
                </span>
                <span className='m-auto'>
                  <Image
                    src={npm}
                    alt='npm logo'
                    width='56px'
                    height='48px'
                  />
                </span>
                <span className='m-auto'>
                  <Image
                    src={github}
                    alt='Github logo'
                    width='48px'
                    height='48px'
                  />
                </span>
              </div>
            </div>
          </div>
          <div className='p-4'>
            <div className='flex gap-2 justify-between items-center'>
              <h6 className='basis-2/5 text-xs md:text-base'>
                {texts.skillsSh2}
              </h6>
              <div className='flex gap-4'>
                <span className='m-auto'>
                  <Image
                    src={figma}
                    alt='Figma logo'
                    width='48px'
                    height='48px'
                  />
                </span>
                <span className='m-auto'>
                  <Image
                    src={adobexd}
                    alt='AdobeXd logo'
                    width='48px'
                    height='48px'
                  />
                </span>
              </div>
            </div>
          </div>
          <div className='p-4'>
            <div className='flex gap-2 justify-between items-center'>
              <h6 className='basis-2/5 text-xs md:text-base'>
                {texts.skillsSh3}
              </h6>
              <div className='flex gap-4'>
                <span className='m-auto'>
                  <Image
                    src={notion}
                    alt='Notion logo'
                    width='48px'
                    height='48px'
                  />
                </span>
                <span className='m-auto'>
                  <Image
                    src={jira}
                    alt='Jira logo'
                    width='48px'
                    height='48px'
                  />
                </span>
                <span className='m-auto'>
                  <Image
                    src={trello}
                    alt='Trello logo'
                    width='48px'
                    height='48px'
                  />
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
