import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import './index.scss'
import {Provider} from "react-redux";
import {store} from "./store/store.js";
const App = () =>  {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  
  )
}

export default App
