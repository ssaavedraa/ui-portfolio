import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineGithub } from 'react-icons/ai'
import { ImLinkedin2 } from 'react-icons/im'

import TypedComponent from './ui/Typed/TypedComponent'

export default function Home (): JSX.Element {
  const typedWords = [
    'Fullstack Developer'
  ]

  return (
    <section className="relative w-full md:w-[70vw] max-w-[1920px] h-[85vh] mt-[15vh] flex justify-center items-center mx-auto overflow-y-auto lg:overflow-y-hidden" id='home'>
      <div className="absolute lg:relative px-6 md:px-0 pb-6 md:pb-0 w-full bottom-0 lg:w-1/2 md:bg-transparent md:rounded-none bg-gradient-to-b from-transparent from-10% via-[#1f242de7] to-[#1f242d] h-auto">
        <h1 className='text-[20px] md:text-[26px] font-bold'>Hello, it&apos;s me</h1>
        <h2 className='text-[34px] md:text-[40px] font-bold my-2 text-clip'>Santiago Saavedra A.</h2>
        <h3 className='text-[20px] md:text-[26px] font-bold'>And I&apos;m a <TypedComponent words={typedWords}/></h3>
        <p className='text-base tracking-normal'>Welcome to my digital domain! Prepare to be enthralled by the captivating portfolio of a multi-talented creative mind. This website is a testament of my <strong className='text-[#0ef]'>passion and expertise</strong> in web development.</p>
        <div className="text-[#0ef] my-6">
          <Link
            className='inline-flex justify-center border-2 border-solid border-[#0ef] rounded-full text-lg mr-2'
            href="https://github.com/ssaavedraa"
            aria-label='Github'
            target='_blank'
            rel='noreferrer'
          >
            <AiOutlineGithub className='w-6 h-6 m-2'/>
          </Link>
          <Link
            className='inline-flex justify-center border-2 border-[#0ef] rounded-full text-lg ml-2'
            href="https://www.linkedin.com/in/ssaavedraa"
            aria-label='LinkedIn'
            target='_blank'
            rel='noreferrer'
          >
            <ImLinkedin2 className='w-6 h-6 m-2'/>
          </Link>
        </div>
        <a
          href='https://s3.amazonaws.com/santiagosaavedra.com.co/CV+SANTIAGO+SAAVEDRA+2023.pdf'
          download='CV_Santiago_Saavedra'
          target='_blank'
          rel='noreferrer'
          aria-label='DownloadCV'
          className='btn rounded-lg text-lg font-medium button-shadow inline-block px-8 py-2 bg-[#0ef] text-[#1f242d]'
        >
          Download CV
        </a>
      </div>
      <div className="absolute -z-10 top-0 md:w-auto md:relative contrast-[1.17] h-[85vh]">
        <Image
          className='h-full w-auto mx-auto transform lg:scale-x-[-1] blue-shadow'
          src='https://s3.amazonaws.com/santiagosaavedra.com.co/profile.webp'
          alt="profile-picture"
          width={485}
          height={856}
          priority
        />
      </div>
    </section>
  )
}
