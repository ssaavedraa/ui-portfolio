import axios from 'axios'

export const postFormData = async <FormData>(data: FormData, endpoint: string): Promise<void> => {
  try {
    await axios.post(`https://api.santiagosaavedra.com.co/${endpoint}`, data)
  } catch (error: any) {
    throw error
  }
}
