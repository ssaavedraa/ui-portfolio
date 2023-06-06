import axios from 'axios'
import { Observable, catchError, throwError } from 'rxjs'

const { VITE_BACKEND_URL: baseUrl } = import.meta.env as Record<string, string>

export const fetchGithubProjects = (): Observable<any> => {
  return new Observable((observer) => {
    axios
      .get(`${baseUrl}/github/starred`)
      .then((response) => {
        observer.next(response.data)
        observer.complete()
      })
      .catch((error) => {
        observer.error(error)
        observer.complete()
      })
  }).pipe(
    catchError((error) => {
      console.error('Error retrieving data: ', error.message)
      return throwError(() => error)
    })
  )
}
