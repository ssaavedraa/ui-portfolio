'use client'

import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import { postFormData } from '../../../services/formService'
import { RequestStatus } from '../../../types/types'

type FormHook<FormData, FormErrors> = {
  formData: FormData
  formErrors: FormErrors
  isSubmitButtonDisabled: boolean
  status: RequestStatus
  handleFormDataChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleFormSubmission: (event: FormEvent) => void
}

type UseFormParams<FormData> = {
  formDataInitialState: FormData,
  validationSchema: object,
  postEndpoint: string,
  openModal: () => void,
  closeModal: () => void
}

const useForm = <FormData, FormErrors> ({
    formDataInitialState,
    validationSchema,
    postEndpoint,
    openModal,
    closeModal
  }: UseFormParams<FormData>
): FormHook<FormData, FormErrors> => {
  const [formData, setFormData] = useState<FormData>(formDataInitialState)
  const [formErrors, setFormErrors] = useState<FormErrors>({} as FormErrors)
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState<boolean>(true)
  const [status, setStatus] = useState<RequestStatus>(RequestStatus.Waiting)

  const validateInputData = (value: string, property: string) => {
    if (property in validationSchema) {
      const validationErrors = (validationSchema as any)[property](value)

      if (validationErrors) {
        setFormErrors((prevState) => ({
          ...prevState,
          [property]: ''
        }))
      }

      setFormErrors((prevState) => ({
        ...prevState,
        [property]: validationErrors
      }))
    }
  }

  const validateFormData = () => {
    Object.entries(formData as Record<string, string>)
      .forEach(([property, value]) => { validateInputData(value, property) })
  }

  const handleFormDataChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { value, name } = event.target

    validateInputData(value, name)

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleFormSubmission = async (event: FormEvent) => {
    event.preventDefault()

    setStatus(RequestStatus.Loading)

    validateFormData()

    openModal()

    try {
      if (!postEndpoint) {
        throw new Error('Request endpoint not set')
      }

      await postFormData(formData, postEndpoint)

      setStatus(RequestStatus.Success)

      setFormData(formDataInitialState)
    } catch (error: any) {
      setStatus(RequestStatus.Error)

      console.error('Error: ', error.message)
    } finally {
      setTimeout(() => {
        closeModal()
      }, 2000);
    }
  }

  useEffect(() => {
    const hasErrors = Object
      .values(formErrors as object)
      .some(error => error !== undefined)

    const hasEmptyValues = Object
      .values(formData as object)
      .some(input => input === '')

    setIsSubmitButtonDisabled(hasErrors || hasEmptyValues)
  }, [formErrors, formData])

  return {
    formData,
    formErrors,
    isSubmitButtonDisabled,
    handleFormDataChange,
    handleFormSubmission,
    status
  }
}

export default useForm
