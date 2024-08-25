import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  getDecks() {
    return instance.get<GetDecksResponseType>('/v2/decks')
  },
  setDeck(params: SetDeckParams) {
    return instance.post<DeckType>('/v1/decks', params)
  },
}

export type GetDecksResponseType = {
  items: DeckType[]
  pagination: PaginationType
}
export type SetDeckParams = {
  name:string
}
export type AuthorType = {
  id: string
  name: string
}
export type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}
export type DeckType = {
  isFavorite: boolean
  author: AuthorType
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: Date
  updated: Date
  cardsCount: number
}

