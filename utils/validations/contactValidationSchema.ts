const validateName = (value: string): string | void => {
  if (value.length === 0) {
    return 'Name is required'
  }

  if (value.length < 3) {
    return 'Please enter a valid name'
  }
}

const validateEmail = (value: string): string | void => {
  const emailRegEx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g

  if (value.length === 0) {
    return 'Email is required'
  }

  if (!emailRegEx.test(value)) {
    return 'Please enter a valid email'
  }
}

const validateMessage = (value: string): string | void => {
  if (value.length === 0) {
    return 'Message is required'
  }

  if (value.length < 20) {
    return 'Please enter a message longer than 20 characters'
  }
}

const contactValidationSchema = {
  name: validateName,
  email: validateEmail,
  message: validateMessage
}

export default contactValidationSchema
