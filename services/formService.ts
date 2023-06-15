import axios from 'axios'

const { NEXT_PUBLIC_BACKEND_URL: apiBaseUrl } = process.env

export const postFormData = async <FormData>(data: FormData, endpoint: string): Promise<void> => {
  try {
    await axios.post(`${apiBaseUrl}/${endpoint}`, data)
  } catch (error: any) {
    throw error
  }
}
