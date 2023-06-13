'use client'

import ProgressBar from '../ProgressBar/ProgressBar'

interface ProjectCardProps {
  id: number
  name: string
  url: string
  httpClone: string
  sshClone: string
  languages: { language: string, percentage: string }[]
}

export default function ProjectCard ({ name, url, languages }: ProjectCardProps, key: number): JSX.Element {
  return (
    <div
      className='w-[95%] m-2 lg:w-[45%] p-4 rounded-lg lg:m-3 card-shadow scroll overflow-y-auto overflow-x-hidden h-auto md:h-56 bg-[#4948483d] lg4:hover:scale-105 hover:cursor-pointer'
      key={key}
      // onClick={() => { window.location.href = url }}
    >
      <p className='text-3xl text-ellipsis overflow-hidden whitespace-nowrap text-center'>{name}</p>
      <div className='mt-4 mb-6'>
        {
          languages.map(({ language, percentage }, index) => (
            <ProgressBar key={index} data={language} percentage={percentage} />
          ))
        }
      </div>
    </div>
  )
}
