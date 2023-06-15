'use client'

import { RxCrossCircled } from 'react-icons/rx'
import { AiOutlineCheckCircle } from 'react-icons/ai'

import Button from '../ui/Button/Button'
import InputField from '../ui/InputField/InputField'
import useForm from '../ui/hooks/useForm'
import contactValidationSchema from '../../utils/validations/contactValidationSchema'
import Modal from '../ui/Modal/Modal'
import useModal from '../ui/hooks/useModal'
import { FormEvent, useEffect, useState } from 'react'
import { RequestStatus } from '../../types/types'
import Spinner from '../ui/Spinner/Spinner'

type ContactFormData = {
  name: string
  email: string
  message: string
}

type ContactFormErrors = Partial<ContactFormData>

export default function Contact () {
  const initialFormState: ContactFormData ={
    name: '',
    email: '',
    message: ''
  }

  const [modalIcon, setModalIcon] = useState<JSX.Element | null>(null)
  const [modalMessage, setModalMessage] = useState<string | undefined>(undefined)

  const { openModal, closeModal, isModalOpen } = useModal()

  const {
    formData,
    formErrors,
    handleFormDataChange,
    handleFormSubmission,
    isSubmitButtonDisabled,
    status
  } = useForm<ContactFormData, ContactFormErrors>({
    formDataInitialState: initialFormState,
    validationSchema: contactValidationSchema,
    postEndpoint: 'email/contact',
    openModal,
    closeModal
  })

  const handleWhatsappMessage = (event: FormEvent) => {
    event.preventDefault()

    const encodedName = encodeURIComponent((formData.name.length > 0) ? formData.name : '"name"')
    const encodedEmail = encodeURIComponent((formData.email.length > 0) ? formData.email : 'your-email')
    const encodedMessage = encodeURIComponent(formData.message)
    const { phoneNumber } = process.env

    const encodedMessageHeader = `Hi Santiago! I'm ${encodedName} <${encodedEmail}>%0D%0A`

    const whatsAppUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessageHeader}Message:${encodedMessage}`

    window.open(whatsAppUrl, '_blank')
  }

  useEffect(() => {
    switch (status) {
      case RequestStatus.Loading:
        setModalIcon(<Spinner />)
        setModalMessage('Sending email...')
        break
      case RequestStatus.Success:
        setModalIcon(<AiOutlineCheckCircle className='h-[100px] w-[100px] m-auto text-green-500'/>)
        setModalMessage('Email sent successfully.')
        break
      case RequestStatus.Error:
        setModalIcon(<RxCrossCircled className='h-[100px] w-[100px] m-auto text-red-500'/>)
        setModalMessage('An error ocurred sending the email...')
        break
    }
  }, [status])

  return (
    <>
      <div className='w-[80vw] 2xl:w-[50vw] m-auto h-[85vh] mt-[15vh]'>
        <form className='m-auto flex flex-col items-center'>
          <InputField
            name='name'
            value={formData.name}
            onChange={handleFormDataChange}
            errorMessage={formErrors.name}
          />

          <InputField
            name='email'
            value={formData.email}
            onChange={handleFormDataChange}
            errorMessage={formErrors.email}
          />

          <div className='w-full lg:w-2/3'>
            <label
              className='block mt-4 mb-2 w-full text-xl'
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className='w-full py-2 px-4 rounded-lg text-black text-lg bg-[#FFFFFF]'
              name="message"
              id="message"
              cols={30}
              rows={10}
              value={formData.message}
              onChange={handleFormDataChange}
            />
            <small className='block h-[20px] text-red-500'>{formErrors.message}</small>
          </div>
          <div className='my-4 m-auto w-full lg:w-2/3 flex  flex-col-reverse md:flex-row flex-nowrap justify-evenly'>
            <Button
              message='Send Email'
              isButtondisabled={isSubmitButtonDisabled}
              onClick={handleFormSubmission}
            />
            <Button
              message='Send WhatsApp message'
              backgroundColor='bg-[#25D366]'
              onClick={handleWhatsappMessage}
            />
          </div>
        </form>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        showCloseOption={false}
        modalIcon={modalIcon}
        modalMessage={modalMessage}
       />
    </>
  )
}