import rootReducer from './root-reducer'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
//adding redux-saga middleware
import createSagaMiddleware from 'redux-saga'
//adding persistence
import { persistStore } from 'redux-persist'
//importing sagas
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default { store, persistor }
