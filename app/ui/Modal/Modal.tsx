'use client'

type ModalProps = {
  isModalOpen: boolean
  children?: React.ReactNode
  modalIcon?: JSX.Element | null
  modalMessage?: string
  showCloseOption?: boolean
  onClose?: () => void
}

export default function Modal ({
  isModalOpen,
  modalIcon,
  children,
  modalMessage,
  showCloseOption,
  onClose
}: ModalProps): JSX.Element | null {
  if (!isModalOpen) {
    return null
  }

  return (
    <div className='w-screen h-screen bg-[#23233286] fixed top-0 overflow-x-hidden z-[50000] flex items-center'>
      <div className='m-auto bg-slate-600 w-full md:w-1/3 relative rounded-lg h-1/3 shadow-2xl'>
        {(showCloseOption === true) && <div className='relative h-[12%] border-b-2'>
          {showCloseOption &&
            <p className='text-4xl absolute right-2' onClick={onClose}>
              &times;
            </p>}
        </div>}
        <div className={`w-full ${showCloseOption === true ? 'h-[88%]' : 'h-full'} flex flex-col items-center justify-center`}>
          {!children && <div className='flex-col flex items-center justify-center'>
              {modalIcon}
              {modalMessage && <span className='mt-2 block'>{modalMessage}</span>}
            </div>}
          {children}
        </div>
      </div>
    </div>
  )
}
