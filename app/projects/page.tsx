import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { GithubProject, fetchGithubProjects } from '../../services/projectsService';
import ProjectCard from '../ui/ProjectCard/ProjectCard';



export default async function Home () {
  const projects = await fetchGithubProjects()

  return (
    <div className='w-[95%] lg:w-[97%] m-auto overflow-x-hidden h-[85vh] mt-[15vh]'>
      <p className='text-6xl my-4 text-center'>Projects</p>
      <div className='m-auto flex flex-col md:flex-row flex-wrap justify-center overflow-y-auto scroll lg:h-[75vh] w-full 2xl:w-[60vw]'>
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
    </div>
  )
}
