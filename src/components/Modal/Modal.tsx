import React from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {
  isOpen: boolean
  children: React.ReactNode
  showCloseOption?: boolean | true
  onClose?: () => void
}

export default function Modal ({ isOpen, showCloseOption, onClose, children }: ModalProps): JSX.Element | null {
  const modalRoot = document.getElementById('modal-root') as HTMLElement
  if (!isOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <div className='w-screen h-screen bg-[#23233286] fixed top-0 overflow-x-hidden z-[50000] flex items-center'>
      <div className='m-auto bg-slate-600 w-1/3 relative rounded-lg h-1/3 shadow-2xl'>
        {(showCloseOption === true) && <div className='relative h-[12%] border-b-2'>
          <p className='text-4xl absolute right-2'>
            &times;
          </p>
        </div>}
        <div className={`w-full ${showCloseOption === true ? 'h-[88%]' : 'h-full'} flex flex-col items-center justify-center`}>
          {children}
        </div>
      </div>
    </div>,
    modalRoot
  )
}
