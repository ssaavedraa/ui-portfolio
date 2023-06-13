import profilePicture from '../../assets/profile.webp'
import { styleVariables } from '../../utils/styleVariables'
import { TypedComponent } from './Typed/TypedComponent'
import { AiOutlineGithub } from 'react-icons/ai'
import { ImLinkedin2 } from 'react-icons/im'
import CV from '../../assets/CV.pdf'
import './Home.css'

export function Home (): JSX.Element {
  const typedWords = [
    'Fullstack Developer'
  ]

  return (
    <section className="home" id='home'>
      <div className="home-content">
        <h3>Hello, it&apos;s me</h3>
        <h3 className='name'>Santiago Saavedra A.</h3>
        <h3>And I&apos;m a <TypedComponent words={typedWords}/></h3>
        <p>Welcome to my digital domain! Prepare to be enthralled by the captivating portfolio of a multi-talented creative mind. This website is a testament of my <strong>passion and expertise</strong> in web development.</p>
        <div className="social-media">
          <a href="https://github.com/ssaavedraa" style={styleVariables('index')} aria-label='Github' target='_blank' rel='noreferrer'>
            <AiOutlineGithub />
          </a>
          <a href="https://www.linkedin.com/in/ssaavedraa" style={styleVariables('index')} aria-label='LinkedIn' target='_blank' rel='noreferrer'>
            <ImLinkedin2 />
          </a>
        </div>
        <a
          href={CV}
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
        <img className='w-1/2' src={profilePicture} alt="profile-picture" width={642} height={856}/>
      </div>
    </section>
  )
}
