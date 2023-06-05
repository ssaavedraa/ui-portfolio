import { type LanguageProps } from '../Language/types'

export interface ProjectCardProps {
  id: number
  name: string
  url: string
  httpClone: string
  sshClone: string
  languages: LanguageProps[]
}
