import { useEffect, useState } from 'react'
import { decksAPI, DecksType } from '../decks-api'
import s from './DecksList.module.css'

export const DecksList = () => {
  const [state, setState] = useState<DecksType[]>()
  useEffect(() => {
    decksAPI.getDecks().then((res) => {
      setState(res.data.items)
    })
  }, [])
  console.log(state)

  return <ul className={s.list}></ul>
}
