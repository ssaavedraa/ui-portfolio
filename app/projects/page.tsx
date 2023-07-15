import { Metadata } from 'next';
import { fetchGithubProjects } from '../../services/projectsService';
import { metadata } from '../layout';
import ProjectCard from '../ui/ProjectCard/ProjectCard';
import Link from 'next/link';

export default async function Projects () {
  const { deployed, notDeployed } = await fetchGithubProjects()

  return (
    <div className='w-[95%] lg:w-[97%] m-auto overflow-y-auto h-[72vh] lg:h-[82vh] mt-[15vh] pb-2 absolute left-0 right-0'>
      <p className='text-6xl my-4 text-center'>Projects</p>
      <hr className='w-3/4 border-[1px] border-[#ffffff5d] m-auto'/>
      <p className='text-4xl my-4 text-center'>Deployed Projects</p>
      <div className='m-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:items-stretch md:gap-6 justify-center w-full md:w-[95%] 2xl:w-[80vw]'>
        {!deployed.length && <p>No projects found</p>}
        {deployed.map(({ id, name, url, httpClone, sshClone, languages, deployed, deploymentUrl }) => (
          <Link href={(deploymentUrl) as string} key={id} className='inline'>
            <ProjectCard
              id={id}
              name={name}
              url={url}
              httpClone={httpClone}
              sshClone={sshClone}
              languages={languages}
              deployed={deployed}
              deploymentUrl={deploymentUrl}
            />
          </Link>
          ))}
      </div>
      <p className='text-4xl mb-4 mt-8 text-center'>Not Deployed Projects</p>
      <div className='m-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:items-stretch md:gap-6 flex-wrap justify-center h-auto w-full md:w-[95%] 2xl:w-[80vw]'>
        {!notDeployed.length && <p>No projects found</p>}
        {notDeployed.map(({ id, name, url, httpClone, sshClone, languages, deployed, deploymentUrl }) => (
          <Link href={url} key={id}>
            <ProjectCard
              id={id}
              name={name}
              url={url}
              httpClone={httpClone}
              sshClone={sshClone}
              languages={languages}
              key={id}
              deployed={deployed}
              deploymentUrl={deploymentUrl}
            />
          </Link>
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
