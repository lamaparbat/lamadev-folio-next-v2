

type Link = {
  site: string,
  github?: string
}

export interface CardType {
  title: string,
  description: string,
  image: string,
  link: Link,
  id: number
}