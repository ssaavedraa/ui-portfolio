import { type LanguageProps } from './types'
import './Language.css'

export default function Language ({ language, percentage }: LanguageProps, key: string): JSX.Element {
  return (
    <div className='w-full flex flex-col md:flex-row flex-nowrap m-auto items-start md:items-center'>
      <span className='inline mx-2 md:w-[20%] text-right'>{language}</span>
      <div className='w-full md:w-[80%] flex flex-row'>
        <div className='w-[80%] border-opacity-10 h-3 m-2 rounded-lg inner-shadow'>
          <div style={{ width: `${percentage}%` }} className='bg-[#00eeffd2] h-full rounded-lg shine' />
        </div>
        <span className='w-[20%]'>{percentage}%</span>
      </div>
    </div>
  )
}
