import { useState, useEffect } from 'react'
import { validateEmail, validateMessage, validateName } from './formValidations/formValidations'
import InputField from './InputField/InputField'
import SubmitButton from './SubmitButton/SubmitButton'
import { type FormDataErrorsInterface, type FormDataInterface } from '../../types/types'
import { postFormData } from '../../services/formService'
import Modal from '../Modal/Modal'
import Loader from '../Modal/Loader/Loader'
import Success from '../Modal/Success/Success'
import Error from '../Modal/Error/Error'

const formDataInitialState: FormDataInterface = {
  name: '',
  email: '',
  message: ''
}

export default function Contact (): JSX.Element {
  const [formData, setFormData] = useState<FormDataInterface>(formDataInitialState)
  const [formErrors, setFormErrors] = useState<FormDataErrorsInterface>({})

  const [isSubmitButtonDisabled, setIssubmitButtonDisabled] = useState<boolean>(true)

  const [openModal, setOpenModal] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<JSX.Element>(<Loader message='Sending Message'/>)

  const validateForm = (value: string, property: string): void => {
    const validationFunctions: Record<string, (value: string) => string> = {
      name: validateName,
      email: validateEmail,
      message: validateMessage
    }

    if (property in validationFunctions) {
      setFormErrors((prevState: FormDataErrorsInterface): FormDataErrorsInterface => ({
        ...prevState,
        [property]: validationFunctions[property](value)
      }))
    }
  }

  const handleFormDataChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { value, name } = event.target

    validateForm(value, name)

    setFormData((prevState: FormDataInterface): FormDataInterface => ({
      ...prevState,
      [name]: value
    }))
  }

  useEffect(() => {
    setIssubmitButtonDisabled(
      !(Object.values(formErrors).every(value => value === '') &&
        Object.values(formData).every(value => value !== ''))
    )
  }, [formErrors, formData])

  const handleFormSubmission = (event: React.FormEvent): void => {
    event.preventDefault()

    setOpenModal(true)

    postFormData(formData).subscribe({
      next: (_response) => {
        setModalContent(<Success message={'Message sent successfully!'}></Success>)
        setFormData(formDataInitialState)
      },
      error: (error) => {
        setModalContent(<Error message={error.message} />)
      },
      complete: () => {
        setTimeout(() => {
          setOpenModal(false)
        }, 1500)
      }
    })
  }

  const handleWhatsAppContact = (): void => {
    const encodedName = encodeURIComponent((formData.name.length > 0) ? formData.name : '"name"')
    const encodedEmail = encodeURIComponent((formData.email.length > 0) ? formData.email : 'your-email')
    const encodedMessage = encodeURIComponent(formData.message)
    const { VITE_PHONE_NUMBER } = import.meta.env as Record<string, string>

    const encodedMessageHeader = `Hi Santiago! I'm ${encodedName} <${encodedEmail}>%0D%0A`

    const whatsAppUrl = `https://api.whatsapp.com/send?phone=${VITE_PHONE_NUMBER}&text=${encodedMessageHeader}Message:${encodedMessage}`

    window.open(whatsAppUrl, '_blank')
  }

  useEffect(() => {
    if (openModal) {
      setModalContent(<Loader message='Sending message' />)
    }
  }, [openModal])

  return (
    <>
      <div className='w-[80vw] m-auto'>
        <p className='text-6xl my-4 text-center'>Get in contact with me</p>
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

          <div className='w-full lg:w-1/2'>
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
            {(formErrors.message != null) && <small className='block pt-2 text-red-500'>{formErrors.message}</small>}
          </div>
        </form>
        <div className='my-4 m-auto w-full lg:w-1/2 flex  flex-col-reverse md:flex-row flex-nowrap justify-evenly'>
          <SubmitButton
            message='Send Email'
            isButtondisabled={isSubmitButtonDisabled}
            onClick={handleFormSubmission}
          />
          <SubmitButton
            message='Send WhatsApp message'
            onClick={handleWhatsAppContact}
          />
        </div>
      </div>
      <Modal
        isOpen={openModal}
        showCloseOption={false}
      >
        {modalContent}
      </Modal>
    </>
  )
}
