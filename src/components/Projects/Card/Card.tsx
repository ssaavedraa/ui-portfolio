import Language from '../Language/Language'
import { type ProjectCardProps } from './types'
import './Card.css'

export default function ProjectCard ({ name, url, languages }: ProjectCardProps, key: number): JSX.Element {
  return (
    <div
      className='w-full m-4 lg:w-[45%] p-4 rounded-lg lg:m-3 card-shadow scroll overflow-y-auto overflow-x-hidden h-56 bg-[#4948483d] hover:scale-105 hover:cursor-pointer'
      key={key}
      onClick={() => { window.location.href = url }}
    >
      <p className='text-3xl text-ellipsis overflow-hidden whitespace-nowrap text-center'>{name}</p>
      <div className='mt-4 mb-6'>
        {
          languages.map(({ language, percentage }, index) => (
            <Language key={index} language={language} percentage={percentage} />
          ))
        }
      </div>
    </div>
  )
}
