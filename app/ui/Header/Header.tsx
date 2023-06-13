'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


// import { useState } from 'react'
// import { styleVariables } from '../../../srcReact/utils/styleVariables'
import logo from '../../srcReact/assets/Firma-02.svg'
import NavLink from './NavLink'

const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'Projects',
  route: '/projects'
}
]

export function Header (): JSX.Element {
  // const sections = document.querySelectorAll('section')
  // const navLinks = document.querySelectorAll('.navbar a')

  // const [currentElement, setCurrentElement] = useState<string>('')
  // const [navbarBackground, setNavbarBackground] = useState<boolean>(false)

  // window.onscroll = () => {
  //   sections.forEach((section) => {
  //     const sectionTop = section.offsetTop

  //     if ((window.scrollY >= sectionTop - 60)) {
  //       if (section.getAttribute('id') != null) {
  //         setCurrentElement((): string => section.getAttribute('id') as string)
  //       }
  //     }

  //     setNavbarBackground(() => window.scrollY > 10)
  //   })

  //   navLinks.forEach((link) => {
  //     link.classList.remove('active')

  //     if (link.classList.contains(`${currentElement}-link`)) {
  //       link.classList.add('active')
  //     }
  //   })
  // }

  // return (
  //   <header className={`${navbarBackground ? 'header' : 'header transparent'}`}>
  //     <a href="#home">
  //       <img src={logo} alt="santiago-saavedra-logo" className="logo" width={300} height={90}/>
  //     </a>

  //     <nav className="navbar">
  //       {
  //         navBarItems.map((item, index) => (
  //           <a
  //             href={`#${item.toLowerCase()}`}
  //             key={index}
  //             className={`${item.toLowerCase()}-link ${index === 0 ? 'active' : ''}`}
  //           >
  //             {item}
  //           </a>
  //         ))
  //       }
  //     </nav>
  //   </header>
  // )

  const pathname = usePathname()

  return (
    <header className='fixed top-0 left-0 right-0 items-center justify-around flex w-full lg:w-[80vw] mx-auto h-[15vh]'>
      <Link href={'/'}>
        <Image
          src='https://s3.amazonaws.com/santiagosaavedra.com.co/Firma-02.svg'
          alt='Santiago_Saavedra_Logo'
          width={264}
          height={90}
        />
      </Link>
      <nav>
        <ul>
          {
            links.map(({ label, route }) => (
              <NavLink
                label={label}
                route={route}
                pathname={pathname}
                key={route}
              />
            ))
          }
        </ul>
      </nav>
    </header>
  )
}
