'use client'

import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function TypedComponent ({ words }: { words: string[] }): JSX.Element {
  const typedElement = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: words,
      startDelay: 1000,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 500
    })

    return () => {
      typed.destroy()
    }
  }, [words])

  return (
    <>
      <span ref={typedElement}/>
    </>
  )
}
