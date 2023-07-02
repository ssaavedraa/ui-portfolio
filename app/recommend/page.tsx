'use client'

import { useEffect, useState } from 'react';
import recommendValidationSchema from '../../utils/validations/recommendValidationSchema';
import InputField from '../ui/InputField/InputField';
import Modal from '../ui/Modal/Modal';
import useForm from '../ui/hooks/useForm';
import useModal from '../ui/hooks/useModal';
import { RequestStatus } from '../../types/types';
import Spinner from '../ui/Spinner/Spinner';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { RxCrossCircled } from 'react-icons/rx';
import Link from 'next/link';
import Button from '../ui/Button/Button';

type RecommendFormData = {
  'full-name': string
  'linkedIn-url': string
  role: string
  recommendationMessage: string
  company: string
}

type RecommendFormErrors = Partial<RecommendFormData>

export default function Recommend () {
  const initialFormState: RecommendFormData = {
    "full-name": '',
    "linkedIn-url": '',
    recommendationMessage: '',
    role: '',
    company: ''
  }

  const [modalIcon, setModalIcon] = useState<JSX.Element | null>(null)
  const [modalMessage, setModalMessage] = useState<string | undefined>(undefined)

  const { closeModal, isModalOpen, openModal } = useModal()

  const {
    formData,
    formErrors,
    handleFormDataChange,
    handleFormSubmission,
    isSubmitButtonDisabled,
    status
  } = useForm<RecommendFormData, RecommendFormErrors>({
    formDataInitialState: initialFormState,
    validationSchema: recommendValidationSchema,
    postEndpoint: 'recommend',
    openModal,
    closeModal
  })

  useEffect(() => {
    switch (status) {
      case RequestStatus.Loading:
        setModalIcon(<Spinner />)
        setModalMessage('Sending email...')
        break
      case RequestStatus.Success:
        setModalIcon(<AiOutlineCheckCircle className='h-[100px] w-[100px] m-auto text-green-500'/>)
        setModalMessage('Recommendation saved.')
        break
      case RequestStatus.Error:
        setModalIcon(<RxCrossCircled className='h-[100px] w-[100px] m-auto text-red-500'/>)
        setModalMessage('An error ocurred saving the recommendation...')
        break
    }
  }, [status])

  return (
    <article className='flex flex-row flex-nowrap items-center justify-center w-[80vw] m-auto'>
      <section  className='w-1/2 2xl:w-[50vw] m-auto h-[85vh] mt-[15vh] px-3'>
        {/* TODO componentize form using children */}
        <form className='m-auto flex flex-col items-center justify-center w-full h-full'>
          <InputField
            name='full-name'
            value={formData['full-name']}
            onChange={handleFormDataChange}
            errorMessage={formErrors['full-name']}
          />
          <InputField
            name='role'
            value={formData.role}
            onChange={handleFormDataChange}
            errorMessage={formErrors.role}
          />
          <InputField
            name='company'
            value={formData.company}
            onChange={handleFormDataChange}
            errorMessage={formErrors.company}
          />
          <InputField
            name='linkedIn-url'
            value={formData['linkedIn-url']}
            onChange={handleFormDataChange}
            errorMessage={formErrors['linkedIn-url']}
          />
          {/* TODO componentize textarea */}
          <div className='w-full lg:w-2/3'>
            <label
              className='block mt-4 mb-2 w-full text-xl'
              htmlFor="recommendationMessage"
            >
              Write a recommendation
            </label>
            <textarea
              className='w-full h-auto py-2 px-4 rounded-lg text-black text-lg bg-[#FFFFFF]'
              name="recommendationMessage"
              cols={30}
              rows={5}
              value={formData.recommendationMessage}
              onChange={handleFormDataChange}
            />
            <small className='block h-[20px] text-red-500'>{formErrors.recommendationMessage}</small>
          </div>
        </form>
      </section>
      {/* Preview component */}
      <section className='w-1/2 2xl:w-[50vw] m-auto h-[85vh] mt-[15vh] px-3 flex justify-center items-center grow-0 flex-col'>
        <div className='bg-[#252b36] p-4 rounded-lg card-shadow w-full h-auto my-3'>
          {
            formData['linkedIn-url'] ?
            (
              <Link className='text-[#0ef] text-4xl' href={formData['linkedIn-url']}>{formData['full-name'] || 'Your Name'}</Link>
            ) :
            (
              <h1 className='text-[#0ef] text-4xl'>{formData['full-name'] || 'Your Name'}</h1>
            )
          }
          <h2 className='text-md text-gray-400'>{formData.role || 'Your Role'} - {formData.company || 'Your company'}</h2>
          <p className='text-lg mt-3 line-clamp-5 '>{formData.recommendationMessage || 'Your recommendation message'}</p>
        </div>
        <Button
          message='Save recommendation'
          isButtondisabled={isSubmitButtonDisabled}
          onClick={handleFormSubmission}
        />
      </section>
      <Modal
        isModalOpen={isModalOpen}
        showCloseOption={false}
        modalIcon={modalIcon}
        modalMessage={modalMessage}
       />
    </article>
  )
}