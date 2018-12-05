import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from '../reducers'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

export const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer)