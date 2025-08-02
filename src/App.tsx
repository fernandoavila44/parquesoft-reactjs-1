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
        <NavLink to="/clase4">Hooks de performance</NavLink>
        <NavLink to="/clase5">Props Drilling y useContext</NavLink>
        <NavLink to="/clase6">useEffect y data fetching</NavLink>
        <NavLink to="/clase7">useReducer y estados complejos</NavLink>
      </nav>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </>
  )
}

export default App
