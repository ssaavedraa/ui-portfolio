import { AiOutlineCheckCircle } from 'react-icons/ai'

export default function Success ({ message }: { message: string }): JSX.Element {
  return (
    <div>
      <AiOutlineCheckCircle className='h-[100px] w-[100px] m-auto text-green-500'/>
      <span className='mt-2 block'>{message}</span>
    </div>
  )
}
