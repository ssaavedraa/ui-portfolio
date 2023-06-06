import { useState, useEffect } from 'react'

import ProjectCard from './Card/Card'
import './Projects.css'
import { fetchGithubProjects } from '../../services/projectsService'
import Loader from '../Modal/Loader/Loader'
import Error from '../Modal/Error/Error'

import { type ProjectCardProps } from './Card/types'

export default function Projects (): JSX.Element {
  const [projects, setProjects] = useState<ProjectCardProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string>('')

  useEffect(() => {
    setIsLoading(true)
    fetchGithubProjects().subscribe({
      next: (response) => {
        setProjects(response)
        setIsLoading(false)
      },
      error: (error) => {
        setErrorMessage(error.message)
        setIsLoading(false)
      }
    })
  }, [])

  return (
    <div className='w-[95%] lg:w-[97%] m-auto overflow-x-hidden'>
      <p className='text-6xl my-4 text-center'>Projects</p>
      {
        projects.length === 0
          ? (
            <div className='w-full h-[40vh] flex items-center justify-center'>
              {isLoading && <Loader message='Fetching projects...' />}
              {errorMessage.length > 0 && !isLoading && <Error message={errorMessage} />}
            </div>
            )
          : (
            <div className='m-auto flex flex-col md:flex-row flex-wrap justify-center overflow-y-auto scroll lg:h-[90vh] w-full 2xl:w-[60vw]'>
              {
                projects.map(({ id, name, url, httpClone, sshClone, languages }) => (
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
            )
      }
    </div>
  )
}
