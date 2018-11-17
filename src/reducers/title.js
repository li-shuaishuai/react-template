import { UPDATE_TITLE } from '../actions/title'

const initialState = 'hello world!'

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return action.data
    default:
      return state
  }
}