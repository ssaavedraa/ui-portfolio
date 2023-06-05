import testData from '../../../testData.json'
import ProjectCard from './Card/Card'
import './Projects.css'

export default function Projects (): JSX.Element {
  return (
    <div className='w-[80vw] lg:w-[97%] m-auto'>
      <p className='text-6xl my-4 text-center'>Projects</p>
      <div className='flex flex-col md:flex-row flex-wrap justify-center overflow-y-auto scroll lg:h-[90vh]'>
        {
          testData.map(({ id, name, url, httpClone, sshClone, languages }) => (
            <ProjectCard
              id={id}
              name={name}
              url={url}
              httpClone={httpClone}
              sshClone={sshClone}
              languages={languages}
              key={id}
            />
          ))
        }
      </div>
    </div>
  )
}
