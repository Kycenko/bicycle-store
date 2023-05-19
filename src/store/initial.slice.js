import {createSlice} from "@reduxjs/toolkit";


const initialState = {
	currentPage: 1,
	category: '',
	search: ''
}

const initialSlice = createSlice({
	name: 'bicycles',
	initialState,
	reducers: {
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload
		},
		setCategory: (state, action) => {
			state.category = action.payload
		},
		setSearch: (state, action) => {
			state.search = action.payload
		}
	}
})

export const {setCurrentPage, setCategory, setSearch} = initialSlice.actions
export default initialSlice.reducer