'use client'

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
  return (
    <div
      className='w-full overflow-x-clip rounded-lg card-shadow scroll overflow-y-auto h-full bg-[#4948483d] lg4:hover:scale-105 hover:cursor-pointer'
      key={key}
    >
      {deployed && (
        <div className='w-screen h-[291px] overflow-clip rounded-b-lg'>
          <iframe src={deploymentUrl} frameBorder="0" className='w-full aspect-video pointer-events-none scale-[44%] origin-top-left'></iframe>
        </div>)}
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
