import { store } from '../store'

export const UPDATE_TITLE = 'UPDATE_TITLE'

export function updateTitle(data) {
  const dispatch = store.dispatch
  dispatch({ type: UPDATE_TITLE, data })
}