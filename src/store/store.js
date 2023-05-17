import {configureStore} from "@reduxjs/toolkit";
import {bicycleApi} from "./bicycle.api.js";

export const store = configureStore({
	reducer: {
		[bicycleApi.reducerPath]: bicycleApi.reducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(bicycleApi.middleware)
})