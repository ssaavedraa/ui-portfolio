import { Metadata } from 'next';
import { fetchGithubProjects } from '../../services/projectsService';
import { metadata } from '../layout';
import ProjectCard from '../ui/ProjectCard/ProjectCard';

export default async function Projects () {
  const projects = await fetchGithubProjects()

  return (
    <div className='w-[95%] lg:w-[97%] m-auto overflow-y-auto h-[72vh] lg:h-[82vh] mt-[15vh] pb-2 absolute left-0 right-0'>
      <p className='text-6xl my-4 text-center'>Projects</p>
      <div className='m-auto flex flex-col md:flex-row flex-wrap justify-center h-auto w-full 2xl:w-[60vw]'>
        {projects.map(({ id, name, url, httpClone, sshClone, languages }) => (
            <ProjectCard
              id={id}
              name={name}
              url={url}
              httpClone={httpClone}
              sshClone={sshClone}
              languages={languages}
              key={id}
            />
          ))}
      </div>
    </div>
  )
}

export function generateMetadata (): Metadata {
  return {
    ...metadata,
    title: 'Santiago Saavedra A. | Projects',
    description: 'Step into my world of creativity and expertise as you explore my diverse portfolio, showcasing impressive projects, innovative designs, and cutting-edge technology.',
    openGraph: {
      ...metadata.openGraph,
      title: '',
      description: 'Step into my world of creativity and expertise as you explore my diverse portfolio, showcasing impressive projects, innovative designs, and cutting-edge technology.',
      url: 'https://santiagosaavedra.com.co/projects'
    }
  }
}
