import { NavLink, Outlet } from 'react-router-dom'
import "./App.module.scss";

function App() {

  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/clase1">JSX</NavLink>
        <NavLink to="/clase2">Componentes</NavLink>
        <NavLink to="/clase3">Ciclo de vida y eventos</NavLink>
      </nav>
      
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </>
  )
}

export default App
