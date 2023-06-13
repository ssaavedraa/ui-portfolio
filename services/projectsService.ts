const { BACKEND_URL } = process.env

export interface GithubProject {
  id: number
  name: string
  url: string
  httpClone: string
  sshClone: string
  languages: { language: string, percentage: string }[]
}

export async function fetchGithubProjects (): Promise<GithubProject[]> {
  const response = await fetch(`${BACKEND_URL}/github/starred`, { cache: 'no-store'})

  return response.json()
}