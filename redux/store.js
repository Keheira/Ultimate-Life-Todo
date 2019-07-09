import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducers/index'
import INITIAL_STATE from './defaultState'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

let store = createStore(persistedReducer, INITIAL_STATE)
let persistor = persistStore(store)

export { store, persistor }

