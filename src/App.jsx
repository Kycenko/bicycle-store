import {Provider} from 'react-redux'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import BicyclePage from './pages/BicyclePage/BicyclePage.jsx'
import CartPage from './pages/CartPage/CartPage.jsx'
import CommentsPage from './pages/CommentsPage/CommentsPage.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import FavoritePage from './pages/FavoritePage/FavoritePage.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import {persistor} from './store/store.js'
import './styles/main.scss'
import {PersistGate} from "redux-persist/integration/react";
import store from './store/store.js'

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<HomePage/>}/>
						<Route path='/bicycle/:id' element={<BicyclePage/>}/>
						<Route path='/cart' element={<CartPage/>}/>
						<Route path='/favorites' element={<FavoritePage/>}/>
						<Route path='/comments' element={<CommentsPage/>}/>
						<Route element={<ErrorPage/>} path={'*'}/>
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	)
}

export default App
