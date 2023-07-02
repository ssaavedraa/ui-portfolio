const validateFullName = (value: string): string | void => {
  if (value.length === 0) {
    return 'Name is required'
  }

  if (value.split(' ').length < 2) {
    return 'Please enter first and last name'
  }
}

const validateRole = (value: string): string | void => {
  if (value.length === 0) {
    return 'Role is required'
  }
}

const validateCompany = (value: string): string | void => {
  if (value.length === 0) {
    return 'Company is required'
  }
}

const validateLinkedInUrl = (value: string): string | void => {
  console.log('🚀 ~ file: recommendValidationSchema.ts:24 ~ validateLinkedinUrl ~ value:', value)
  const linkedInUrlRegex = /https:\/\/www\.linkedin\.com\/in\/([A-Za-z0-9_-]+)/

  if (value.length === 0) {
    return 'LinkedIn url is required'
  }

  if (!linkedInUrlRegex.test(value)) {
    return 'Please enter a valid LinkedIn url'
  }
}

const validateRecommendationMessage = (value: string): string | void => {
  if (value.length === 0) {
    return 'Recommendation message is required'
  }

  if (value.length < 20) {
    return 'Please enter a recommendation message longer than 20 characters'
  }
}

const recommendValidationSchema = {
  'full-name': validateFullName,
  'linkedIn-url': validateLinkedInUrl,
  role: validateRole,
  company: validateCompany,
  recommendationMessage: validateRecommendationMessage
}

export default recommendValidationSchema
