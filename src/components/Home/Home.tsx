import profilePicture from '../../assets/profile.png'
import { styleVariables } from '../../utils/styleVariables'
import { TypedComponent } from '../Typed/TypedComponent'
import { AiOutlineGithub } from 'react-icons/ai'
import { ImLinkedin2 } from 'react-icons/im'
import './Home.css'

export function Home (): JSX.Element {
  const typedWords = [
    'Fullstack Developer'
  ]

  return (
    <section className="home" id='home'>
      <div className="home-content">
        <h3>Hello, it&apos;s me</h3>
        <h1>Santiago Saavedra A.</h1>
        <h3>And I&apos;m a <TypedComponent words={typedWords}/></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="social-media">
          <a href="https://github.com/ssaavedraa" style={styleVariables('index')}>
            <AiOutlineGithub />
          </a>
          <a href="https://www.linkedin.com/in/ssaavedraa" style={styleVariables('index')}>
            <ImLinkedin2 />
          </a>
        </div>
        <button className='btn'>Download CV</button>
      </div>
      <div className="home-img">
        <img src={profilePicture} alt="profile-picture" />
      </div>
    </section>
  )
}
