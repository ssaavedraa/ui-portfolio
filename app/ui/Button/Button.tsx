'use client'

interface ButtonProps {
  message: string
  onClick?: (event: React.FormEvent) => void
  isButtondisabled?: boolean | false
  backgroundColor?: string
}

export default function Button ({ message, isButtondisabled, onClick, backgroundColor }: ButtonProps): JSX.Element {
  return (
    <button
      className={`${backgroundColor || 'bg-[#00eeffd3]'} rounded-lg py-2 px-4 my-2 md:mx-2 font-bold w-full lg:w-[50%] text-xl disabled:opacity-50 text-[#1f242d]`}
      disabled={isButtondisabled}
      onClick={onClick}
    >
      {message}
    </button>
  )
}