import { Dispatch } from 'redux'
import { decksAPI, SetDeckParams } from './decks-api'
import { getDecksAC, setDeckAC } from './decks-reducer'

export const getDecksTC = () => (dispatch: Dispatch) =>
  decksAPI.getDecks().then((res) => {
    dispatch(getDecksAC(res.data.items))
  })

export const addDeckTC = (params: SetDeckParams) => async (dispatch: Dispatch) =>{
  return decksAPI.setDeck(params).then((res) => {
    dispatch(setDeckAC(res.data))
  })}
