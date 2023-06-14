'use client'

import Link from 'next/link';

interface navLinkProps {
  label: string
  route: string
  pathname: string
}

export default function NavLink({ label, route, pathname }: navLinkProps) {
  return (
    <li
      key={route}
      className={`inline-block text-2xl md:text-3xl font-[500] px-2 md:px-6 ${route === pathname ? 'text-[#0ef]' : 'text-white'}`}>
      <Link href={route}>
        {label}
      </Link>
    </li>
  )
}