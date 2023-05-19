import { useState } from 'react'
import logo from '../../assets/Firma-02.svg'
import { styleVariables } from '../../utils/styleVariables'
import './Header.css'

export function Header (): JSX.Element {
  const navBarItems = [
    'Home',
    'About',
    'Skills',
    'Portfolio',
    'Contact'
  ]
  const sections = document.querySelectorAll('section')
  const navLinks = document.querySelectorAll('.navbar a')

  const [currentElement, setCurrentElement] = useState<string>('')
  const [navbarBackground, setNavbarBackground] = useState<boolean>(false)

  window.onscroll = () => {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop

      if ((window.scrollY >= sectionTop - 60)) {
        if (section.getAttribute('id') != null) {
          setCurrentElement((): string => section.getAttribute('id') as string)
        }
      }

      setNavbarBackground(() => window.scrollY > 10)
    })

    navLinks.forEach((link) => {
      link.classList.remove('active')

      if (link.classList.contains(`${currentElement}-link`)) {
        link.classList.add('active')
      }
    })
  }

  return (
    <header className={`${navbarBackground ? 'header' : 'header transparent'}`}>
      <a href="#">
        <img src={logo} alt="santiago-saavedra-logo" className="logo" width={300} height={102}/>
      </a>

      <nav className="navbar">
        {
          navBarItems.map((item, index) => (
            <a
              href={`#${item.toLowerCase()}`}
              style={styleVariables('index')}
              key={index}
              className={`${item.toLowerCase()}-link ${index === 0 ? 'active' : ''}`}
            >
              {item}
            </a>
          ))
        }
      </nav>
    </header>
  )
}
