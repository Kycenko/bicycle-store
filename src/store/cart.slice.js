import {createSlice} from "@reduxjs/toolkit";


const initialState = {
	bicyclesInCart: []
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addBicycleInCart: (state, action) => {
			state.bicyclesInCart.push(action.payload)
		},
		removeBicycleInCart: (state, action) => {
			state.bicyclesInCart.filter(bicycle => bicycle.id !== action.payload)
		}
	}
})

export const {addBicycleInCart, removeBicycleInCart} = cartSlice.actions

export default cartSlice.reducer