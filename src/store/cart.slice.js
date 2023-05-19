import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	bicyclesInCart: []
}

const cartSlice = createSlice({
	name: 'cart', initialState, reducers: {
		addBicycleInCart: (state, action) => {
			state.bicyclesInCart.push(action.payload)
		}, removeBicycleInCart: (state, action) => {
			state.bicyclesInCart = state.bicyclesInCart.filter(bicycle => bicycle.id !== action.payload)
		}, increaseQuantity: (state, action) => {
			const item = state.bicyclesInCart.find((bicycle) => bicycle.id === action.payload);
			if (item) {
				item.quantity += 1;
			}
		}, decreaseQuantity: (state, action) => {
			const item = state.bicyclesInCart.find((bicycle) => bicycle.id === action.payload);
			if (item && item.quantity > 1) {
				item.quantity -= 1;
			}
		}
	}
})

export const {addBicycleInCart, removeBicycleInCart, increaseQuantity, decreaseQuantity} = cartSlice.actions

export default cartSlice.reducer