import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './_components/Header'
import Home from './pages/Home'
import Pano from './pages/Pano'

function App() {
  return (
    <Router>
      <div className="scroll-smooth">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pano" element={<Pano />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
