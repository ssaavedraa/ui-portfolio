'use client'

import { useEffect } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'

interface ProjectCardProps {
  id: number
  name: string
  url: string
  httpClone: string
  sshClone: string
  languages: { language: string, percentage: string }[]
  deployed: boolean
  deploymentUrl?: string
}

export default function ProjectCard ({ name, url, languages, deployed, deploymentUrl }: ProjectCardProps, key: number): JSX.Element {
  const iframeId = `${name}-iframe`

  useEffect(() => {
    if (deployed) {
      const viewportWidth = window.innerWidth
      const cardElement = document.getElementById(name)

      const cardWidth = cardElement?.clientWidth

      const iframe = document.getElementById(iframeId)
      const iframeScale = cardWidth! / viewportWidth
      const iframeHeight = iframe?.clientHeight

      const iframeContainer = document.getElementById(`${iframeId}-container`)

      iframe!.style.transform = `scale(${iframeScale})`
      iframeContainer!.style.height = `${iframeHeight! * iframeScale}px`
    }
  }, [])

  return (
    <div
      className='w-full overflow-clip rounded-lg card-shadow scroll overflow-y-auto h-full bg-[#4948483d] hover:cursor-pointer my-2 md:my-0'
      key={key}
      id={name}
    >
      {deployed && (
        <div className='w-full h-auto overflow-clip rounded-b-lg'>
          <div className='w-screen h-screen' id={`${iframeId}-container`}>
            <iframe src={deploymentUrl} className='w-full aspect-[9/16] md:aspect-square lg:aspect-video pointer-events-none origin-top-left' id={iframeId}></iframe>
          </div>
        </div>
      )}
      <p className='text-3xl text-ellipsis overflow-hidden whitespace-nowrap text-center mt-4'>{name}</p>
      <div className='mt-4 m-4'>
        {
          languages.map(({ language, percentage }, index) => (
            <ProgressBar key={index} data={language} percentage={percentage} />
          ))
        }
      </div>
    </div>
  )
}
