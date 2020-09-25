import { combineReducers } from 'redux'
//adding persistence to root-reducer
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' //this is saying I want to use 'localstorage'.We can
//also use sessionstorage by importing sessionstorage

import userReducer from './user/user-reducer'
import cartReducer from './cart/cart-reducer'
import directoryReducer from './directory/directory-reducer'
import shopReducer from './shop/shop-reducer'

const persistConfig = {
  //this is the configuration for the redux-persist to use.
  key: 'root',
  storage,
  whitelist: ['cart'], //this is just saying what reducers we want to persist.
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
})

export default persistReducer(persistConfig, rootReducer) //exporting new form of rootreducer with persistence capabilities.
