export default function Contact (): JSX.Element {
  return (
    <div className='w-[80vw] m-auto'>
      <p className='text-[50px] text-center py-8'>Get in touch with me</p>
      <form className='m-auto flex flex-col items-center'>
        <div className='w-full md:w-1/2'>
          <label className='block mt-4 mb-2 w-full text-xl' htmlFor="Name">Your name</label>
          <input className='w-full py-2 px-4 rounded-lg text-black text-lg bg-[#FFFFFF]' type="text" name="" id="Name" />
        </div>
        <div className='w-full md:w-1/2'>
          <label className='block mt-4 mb-2 w-full text-xl' htmlFor="email">Your email</label>
          <input className='w-full py-2 px-4 rounded-lg text-black text-lg bg-[#FFFFFF]' type="text" name="" id="email" />
        </div>
        <div className='w-full md:w-1/2'>
          <label className='block mt-4 mb-2 w-full text-xl' htmlFor="message">Your message</label>
          <textarea className='w-full py-2 px-4 rounded-lg text-black text-lg bg-[#FFFFFF]' name="message" id="message" cols={30} rows={10}></textarea>
        </div>
        <div className='my-4 m-auto w-full md:w-1/2 flex  flex-col-reverse md:flex-row flex-nowrap justify-evenly'>
          <button className='bg-cyan-600 rounded-lg py-2 px-4 my-2 md:mx-2 font-bold w-full md:w-[40%] text-xl'>Send email</button>
          <button className='bg-cyan-600 rounded-lg py-2 px-4 my-2 md:mx-2 font-bold w-full md:w-[40%] text-xl'>Send WhatsApp message</button>
        </div>
      </form>
    </div>
  )
}
