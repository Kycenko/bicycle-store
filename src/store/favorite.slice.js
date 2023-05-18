import {createSlice} from "@reduxjs/toolkit";


const initialState = {
	bicyclesInFavorite: []
}

const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addBicycleInFavorite: (state, action) => {
			state.bicyclesInFavorite.push(action.payload)
		},
		removeBicycleInFavorite: (state, action) => {
			state.bicyclesInFavorite.filter(bicycle => bicycle.id !== action.payload)
		}
	}
})
export const {addBicycleInFavorite, removeBicycleInFavorite} = favoriteSlice.actions

export default favoriteSlice.reducer