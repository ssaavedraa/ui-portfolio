interface InputFieldInterface {
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: string
}

export default function InputField ({ name, value, onChange, errorMessage }: InputFieldInterface): JSX.Element {
  return (
    <div className='w-full lg:w-1/2'>
      <label
        className='block mt-4 mb-2 w-full text-xl'
        htmlFor={name}
      >
          {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        className='w-full py-2 px-4 rounded-lg text-black text-lg bg-[#FFFFFF]'
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      {(errorMessage !== null) && <small className='block pt-2 text-red-500'>{errorMessage}</small>}
    </div>
  )
}
