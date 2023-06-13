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
    <section className="relative w-[90vw] max-w-[1920px]" id='home'>
      <div className="home-content">
        <h1>Hello, it&apos;s me</h1>
        <h2 className='name'>Santiago Saavedra A.</h2>
        <h3>And I&apos;m a <TypedComponent words={typedWords}/></h3>
        <p>Welcome to my digital domain! Prepare to be enthralled by the captivating portfolio of a multi-talented creative mind. This website is a testament of my <strong>passion and expertise</strong> in web development.</p>
        <div className="social-media">
          <Link href="https://github.com/ssaavedraa" aria-label='Github' target='_blank' rel='noreferrer'>
            <AiOutlineGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/ssaavedraa" aria-label='LinkedIn' target='_blank' rel='noreferrer'>
            <ImLinkedin2 />
          </Link>
        </div>
        <a
          href='https://s3.amazonaws.com/santiagosaavedra.com.co/CV+SANTIAGO+SAAVEDRA+2023.pdf'
          download='CV_Santiago_Saavedra'
          target='_blank'
          rel='noreferrer'
          aria-label='DownloadCV'
          className='btn rounded-lg text-lg font-normal button-shadow'
        >
          Download CV
        </a>
      </div>
      <div className="home-img">
        <Image
          className='w-1/2'
          src='https://s3.amazonaws.com/santiagosaavedra.com.co/profile.webp'
          alt="profile-picture"
          width={642}
          height={856}
        />
      </div>
    </section>
  )
}
