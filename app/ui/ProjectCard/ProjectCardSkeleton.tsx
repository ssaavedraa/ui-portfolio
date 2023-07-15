export default function ProjectCardSkeleton () {
  return (
    <div className='w-full h-auto rounded-lg card-shadow bg-[#4948483d] overflow-clip my-2 md:my-0'>
      <div className=' animate-pulse'>
        <div className='w-full h-[250px] mb-4 bg-[#6e70705d] rounded-b-lg'/>
        <div className='mx-2 w-[95%] h-[36px] bg-[#6e70705d] rounded-md'/>
        <div className='mt-4 mx-4 mb-6'>
          <div className='h-4 w-auto bg-[#6e70705d] m-4 rounded-lg'/>
          <div className='h-4 w-auto bg-[#6e70705d] m-4 rounded-lg'/>
          <div className='h-4 w-auto bg-[#6e70705d] m-4 rounded-lg'/>
          <div className='h-4 w-auto bg-[#6e70705d] m-4 rounded-lg'/>
        </div>
      </div>
    </div>
  )
}