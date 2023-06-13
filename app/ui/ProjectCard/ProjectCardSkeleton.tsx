export default function ProjectCardSkeleton () {
  return (
    <div className='w-[95%] lg:w-[45%] p-4 m-2 lg:m-3 rounded-lg card-shadow h-auto md:h-56 bg-[#4948483d]'>
      <div className=' animate-pulse'>
        <div className='w-full h-[36px] bg-[#6e70705d] rounded-md'/>
        <div className='mt-4 mb-6'>
          <div className='h-4 w-auto bg-[#6e70705d] m-4 rounded-lg'/>
          <div className='h-4 w-auto bg-[#6e70705d] m-4 rounded-lg'/>
          <div className='h-4 w-auto bg-[#6e70705d] m-4 rounded-lg'/>
          <div className='h-4 w-auto bg-[#6e70705d] m-4 rounded-lg'/>
        </div>
      </div>
    </div>
  )
}