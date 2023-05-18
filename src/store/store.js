import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {bicycleApi} from "./bicycle.api.js";
import cartReducer from './cart.slice.js'
import favoriteReducer from './favorite.slice.js'

const rootReducer = combineReducers({
	cart: cartReducer,
	favorite: favoriteReducer
})
export const store = configureStore({
	reducer: {
		rootReducer,
		[bicycleApi.reducerPath]: bicycleApi.reducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(bicycleApi.middleware)
})