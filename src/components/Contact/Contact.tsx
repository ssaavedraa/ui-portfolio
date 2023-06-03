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
      next: (response) => {
        setModalContent(<Success message={'Message sent successfully!'}></Success>)
        setFormData(formDataInitialState)
        console.log('Success', response)
      },
      error: (error) => {
        setModalContent(<Error message={error.message} />)
        console.error('Error', error.message)
      },
      complete: () => {
        setTimeout(() => {
          setOpenModal(false)
        }, 1500)
      }
    })
  }

  useEffect(() => {
    if (openModal) {
      setModalContent(<Loader message='Sending message' />)
    }
  }, [openModal])

  return (
    <>
      <div className='w-[80vw] m-auto'>
        <form className='m-auto flex flex-col items-center' onSubmit={handleFormSubmission}>
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

          <div className='w-full md:w-1/2'>
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
          <div className='my-4 m-auto w-full md:w-1/2 flex  flex-col-reverse md:flex-row flex-nowrap justify-evenly'>
            <SubmitButton
              message='Send Email'
              isButtondisabled={isSubmitButtonDisabled}
              onClick={handleFormSubmission}
            />
            <SubmitButton
              message='Send WhatsApp message'
              isButtondisabled={isSubmitButtonDisabled}
            />
          </div>
        </form>
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
