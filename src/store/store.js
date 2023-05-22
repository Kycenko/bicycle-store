import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {bicycleApi} from "./bicycle.api.js";
import cartReducer from './cart.slice.js'
import favoriteReducer from './favorite.slice.js'
import initialReducer from "./initial.slice.js";
import {
	persistStore, persistReducer,
	FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
	cart: cartReducer,
	favorite: favoriteReducer,
	initial: initialReducer,
	[bicycleApi.reducerPath]: bicycleApi.reducer
})

const persistConfig = {
	key: 'root',
	storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer
	,
	middleware: getDefaultMiddleware => getDefaultMiddleware({
		serializableCheck: {
			ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
		}
	}).concat(bicycleApi.middleware)
})
export const persistor = persistStore(store);
export default store