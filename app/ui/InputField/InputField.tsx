'use client'

interface InputFieldProps {
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: string
}

export default function InputField ({ name, value, onChange, errorMessage }: InputFieldProps): JSX.Element {
  return (
    <div className='w-full lg:w-2/3'>
      <label
        className='block mt-1 mb-2 w-full text-2xl'
        htmlFor={name}
      >
          {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        className='w-full py-1 mb-2 px-4 rounded-lg text-black text-lg bg-[#FFFFFF]'
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      <small className='block h-[20px] text-red-500'>{errorMessage}</small>
    </div>
  )
}