import { FetchReturn } from "@nuxt/content/types/query-builder"

export interface Project extends FetchReturn {
  name: string
  order: number

  technologies?: string[]

  links?: {
    github?: string
    web?: string
  }
}
