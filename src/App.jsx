import { Routes, Route, NavLink } from 'react-router-dom'
import Historia from './pages/Historia.jsx'
import Praias from './pages/Praias.jsx'
import Zoologico from './pages/Zoologico.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './styles/app.css'

export default function App() {
  return (
    <div className="app">
      <Header />

      <nav className="nav">
        <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''} end>História</NavLink>
        <NavLink to="/praias" className={({isActive}) => isActive ? 'active' : ''}>Praias</NavLink>
        <NavLink to="/zoologico" className={({isActive}) => isActive ? 'active' : ''}>Zoológico</NavLink>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<Historia />} />
          <Route path="/praias" element={<Praias />} />
          <Route path="/zoologico" element={<Zoologico />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
