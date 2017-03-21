import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import initReducer from './reducers/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(initState){
  return createStore(initReducer, initState, composeEnhancers(applyMiddleware(thunk)))
}

export const store = configureStore({})
