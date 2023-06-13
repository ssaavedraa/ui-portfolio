export const validateName = (value: string): string => {
  if (value.length === 0) {
    return 'This field is required'
  }

  if (value.length < 3) {
    return 'Please enter a valid name'
  }

  return ''
}

export const validateEmail = (value: string): string => {
  const emailRegEx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g

  if (value.length === 0) {
    return 'This field is required'
  }

  if (!emailRegEx.test(value)) {
    return 'Please enter a valid email'
  }

  return ''
}

export const validateMessage = (value: string): string => {
  if (value.length === 0) {
    return 'This field is required'
  }

  if (value.length < 20) {
    return 'Please enter a message longer than 20 characters'
  }

  return ''
}
