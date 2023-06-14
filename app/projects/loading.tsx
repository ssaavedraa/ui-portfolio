import ProjectCardSkeleton from '../ui/ProjectCard/ProjectCardSkeleton';

export default function Loading () {
  const skeletonCards = Array(6).fill(0)

  return (
    <div className='w-[95%] lg:w-[97%] m-auto overflow-x-hidden h-[85vh] mt-[15vh]'>
    <p className='text-6xl my-4 text-center'>Projects</p>
    <div className='m-auto flex flex-col md:flex-row flex-wrap justify-center overflow-y-auto scroll lg:h-[75vh] w-full 2xl:w-[60vw]'>
      {
        skeletonCards.map((index: number) => (<ProjectCardSkeleton key={index}/>))
      }
    </div>
  </div>
  )
}