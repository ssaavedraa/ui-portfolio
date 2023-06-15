import axios from 'axios'

const { apiBaseUrl } = process.env

export const postFormData = async <FormData>(data: FormData, endpoint: string): Promise<void> => {
  try {
    await axios.post(`${apiBaseUrl}/${endpoint}`, data)
  } catch (error: any) {
    throw error
  }
}
