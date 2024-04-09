import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Tour from "./pages/Tour"

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Tour />} />
      </Routes>
    </Router>
  )
}

export default App
