interface SubmitButtonInterface {
  message: string
  onClick?: (event: React.FormEvent) => void
  isButtondisabled?: boolean | false
}
export default function SubmitButton ({ message, isButtondisabled, onClick }: SubmitButtonInterface): JSX.Element {
  return (
    <button
      className='bg-[#0ef] rounded-lg py-2 px-4 my-2 md:mx-2 font-normal w-full md:w-[40%] text-xl text-[#1f242d] disabled:opacity-50 disabled:shadow-none button-shadow'
      disabled={isButtondisabled}
      onClick={onClick}
    >
      {message}
    </button>
  )
}
