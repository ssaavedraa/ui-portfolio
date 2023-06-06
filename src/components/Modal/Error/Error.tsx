import { RxCrossCircled } from 'react-icons/rx'

export default function Error ({ message }: { message: string }): JSX.Element {
  return (
    <div className='flex flex-col items-center justify-center'>
      <RxCrossCircled className='h-[100px] w-[100px] m-auto text-red-500'/>
      <span className='mt-2 block'>{message}</span>
    </div>
  )
}
