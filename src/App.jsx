import { NavLink } from 'react-router-dom'
import "./App.module.scss";

function App() {

  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/clase1">JSX</NavLink>
        <NavLink to="/clase2">Manejo del DOM</NavLink>
      </nav>
    </>
  )
}

export default App
