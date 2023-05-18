import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import './index.scss'
import {Provider} from "react-redux";
import {store} from "./store/store.js";
import BicyclePage from "./pages/BicyclePage/BicyclePage.jsx";

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage/>}/>
					<Route path='/bicycle/:id' element={<BicyclePage/>}/>
					<Route element={<div>Page not found!</div>} path={'*'}/>
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}

export default App
