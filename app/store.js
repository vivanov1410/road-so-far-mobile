import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

export function configureStore(initialState = {}) {
  const enhancers = [
    applyMiddleware(thunk),
  ]

  const store = createStore(rootReducer, initialState, compose(...enhancers))

  return store
}
