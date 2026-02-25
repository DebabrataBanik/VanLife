import { BrowserRouter, Routes, Route, Link } from "react-router"
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to='/'>#VANLIFE</Link>
        <nav>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer>
        Ⓒ 2026 #VANLIFE
      </footer>
    </BrowserRouter>
  )
}