import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {bicycleApi} from "./bicycle.api.js";
import cartReducer from './cart.slice.js'
import favoriteReducer from './favorite.slice.js'
import initialReducer from "./initial.slice.js";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		favorite: favoriteReducer,
		initial: initialReducer,
		[bicycleApi.reducerPath]: bicycleApi.reducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(bicycleApi.middleware)
})