export interface FormDataInterface {
  name: string
  email: string
  message: string
}

export interface FormDataErrorsInterface extends Partial<FormDataInterface> {}
