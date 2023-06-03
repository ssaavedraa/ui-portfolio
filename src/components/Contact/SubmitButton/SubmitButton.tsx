interface SubmitButtonInterface {
  message: string
  onClick?: (event: React.FormEvent) => void
  isButtondisabled?: boolean | false
}
export default function SubmitButton ({ message, isButtondisabled, onClick }: SubmitButtonInterface): JSX.Element {
  return (
    <button
      className='bg-cyan-600 rounded-lg py-2 px-4 my-2 md:mx-2 font-bold w-full md:w-[40%] text-xl disabled:opacity-50'
      disabled={isButtondisabled}
      onClick={onClick}
    >
      {message}
    </button>
  )
}
