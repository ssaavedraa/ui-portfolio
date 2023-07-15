import ProjectCardSkeleton from '../ui/ProjectCard/ProjectCardSkeleton';

export default function Loading () {
  const skeletonCards = Array(6).fill(0)

  return (
    <div className='w-[95%] m-auto overflow-x-auto mt-[15vh] pb-2'>
    <p className='text-6xl my-4 text-center'>Projects</p>
    <div className='m-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:items-stretch md:gap-6 w-full 2xl:w-[80vw]'>
      {
        skeletonCards.map((index: number) => (<ProjectCardSkeleton key={index}/>))
      }
    </div>
  </div>
  )
}