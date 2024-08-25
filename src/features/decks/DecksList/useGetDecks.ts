import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../app/store'
import { selectDecks } from '../decks-selectors'
import { getDecksTC } from '../decks-thunks'

export const useGetDecks = () => {
  const decks = useSelector(selectDecks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getDecksTC())
  }, [dispatch])

  return {
    decks,
  }
}
