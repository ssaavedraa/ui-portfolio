import axios from 'axios'

export const postFormData = async <FormData>(data: FormData, endpoint: string): Promise<void> => {
  try {
    await axios.post(`api/${endpoint}`, data)
  } catch (error: any) {
    throw error
  }
}
