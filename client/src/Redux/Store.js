 
import   cartSlice   from './CartRducer/CartReducer'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import  LoginSlice  from './UserReducer/UserSlice'
import  globalSlice   from './GobalState/GobalState'
import  getAlluser  from './GetAllUserReducer/GetUserSlice'
import  getAllProduct  from './GetAllProductReducer/GetAllProductLSlice'
 


const reducers = combineReducers({
  cart: cartSlice,
  
  LoginInUser:LoginSlice,
  GlobalState:globalSlice,
  GetAllUser: getAlluser,
  GetALLProduct:getAllProduct,
     
 });
 

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist:["GetALLProduct","GetAllUser"]
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
