'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import NavLink from './NavLink'

const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'Projects',
  route: '/projects'
}]

export function Header (): JSX.Element {
  const pathname = usePathname()

  return (
    <header className='fixed top-0 left-0 right-0 items-center justify-around flex flex-col md:flex-row w-full lg:w-[80vw] mx-auto  h-[15vh]'>
      <Link href={'/'} className='h-[60%]'>
        <Image
          className='h-full'
          src='https://s3.amazonaws.com/santiagosaavedra.com.co/Firma-02.svg'
          alt='Santiago_Saavedra_Logo'
          width={264}
          height={80}
          priority
        />
      </Link>
      <nav className='block m-auto w-3/4 overflow-x-auto md:inline md:w-auto md:m-0 overflow-y-hidden'>
        <ul className='inline-flex justify-center items-center w-full'>
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
