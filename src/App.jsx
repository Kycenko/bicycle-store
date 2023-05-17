import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import './index.scss'
const App = () =>  {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
