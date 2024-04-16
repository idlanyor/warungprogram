import { BrowserRouter, Route, Routes } from "react-router-dom"
import Card from "./Components/Card"
import Navbar from "./Components/Navbar"
import Section from "./Components/Section"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<><Card /><Section /></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
