import profilePicture from '../../assets/profile.png'
import { styleVariables } from '../../utils/styleVariables'
import { TypedComponent } from '../Typed/TypedComponent'

export function About (): JSX.Element {
  const typedWords = [
    'Fullstack Developer'
  ]

  return (
    <section className="home" id='about'>
      <div className="home-content">
        <h3>Hello, it&apos;s me</h3>
        <h1>Santiago Saavedra A.</h1>
        <h3>And I&apos;m a <TypedComponent words={typedWords}/></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="social-media">
          <a href="#" style={styleVariables('index')}>
            <i className='bx bxl-github'></i>
          </a>
          <a href="#" style={styleVariables('index')}>
            <i className='bx bxl-linkedin' ></i>
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
