import { cache } from 'react'

const { apiBaseUrl } = process.env

export interface GithubProject {
  id: number
  name: string
  url: string
  httpClone: string
  sshClone: string
  languages: { language: string, percentage: string }[]
}

export const fetchGithubProjects = cache(async (): Promise<GithubProject[]> => {
  try {
    const response = await fetch(`${apiBaseUrl}/github/starred`, { cache: 'no-store' })

    return response.json()
  } catch (error) {
    console.error(error)
    return []
  }
})