import axios from 'axios'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/internal/operators/catchError'
import { type FormDataInterface } from '../types/types'

const { VITE_BACKEND_URL: baseUrl } = import.meta.env as Record<string, string>

export const postFormData = (data: FormDataInterface): Observable<any> => {
  return new Observable((observer) => {
    axios
      .post(`${baseUrl}/email/send-contact`, data)
      .then((response) => {
        observer.next(response.data)
        observer.complete()
      })
      .catch((error) => {
        observer.error(error)
      })
  }).pipe(
    catchError((error) => {
      console.error('Error while sending message', error.message)
      return throwError(() => error)
    })
  )
}
