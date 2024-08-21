import { useEffect, useState } from 'react'
import { decksAPI, DeckType } from '../decks-api'
import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem'
import { useDispatch, useSelector } from 'react-redux'
import { setDecksAC } from '../decks-reducer'
import { AppRootState } from '../../../app/store'

export const DecksList = () => {
  const decks = useSelector<AppRootState, DeckType[]>((state) => state.decksReducer.decks)
  const dispatch = useDispatch()

  useEffect(() => {
    decksAPI.getDecks().then((res) => {
      dispatch(setDecksAC(res.data.items))
    })
  }, [])

  return (
    <ul className={s.list}>
      {decks.map((deck) => (
        <DeckItem key={deck.id} deck={deck} />
      ))}
    </ul>
  )
}
