export default function Loader ({ message }: { message: string }): JSX.Element {
  return (
    <div>
      <div className='h-[100px] w-[100px] border-8 rounded-full border-[#ffffff67] border-t-blue-600 animate-spin m-auto'/>
      <span className='mt-2 block'>{message}</span>
    </div>
  )
}
