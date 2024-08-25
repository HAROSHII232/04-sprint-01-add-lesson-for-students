import { DeckType } from './decks-api'

const initialState = {
  decks: [] as DeckType[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'GET-DECKS': {      
      return { ...state, decks: action.decks }
    }
    case 'ADD-DECK': {     
      return {  ...state, decks:[action.deck, ...state.decks] } 
    }
    default:
      return state
  }
}

type DecksActions = GetDecksACtionType | SetDecksACtionType
type GetDecksACtionType = ReturnType<typeof getDecksAC>
type SetDecksACtionType = ReturnType<typeof setDeckAC>

export const getDecksAC = (decks: DeckType[]) =>
  ({
    type: 'GET-DECKS',
    decks,
  }) as const

export const setDeckAC = (deck: DeckType) =>
  ({
    type: 'ADD-DECK',
    deck,
  }) as const
