import { useContext } from "react";
import { ThemeContext, useTheme } from "../context/ThemeContext";

const Navbar = () => {
  // const { theme, toggleTheme } = useTheme();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>Mi Aplicación</h1>
      <button onClick={toggleTheme}>
        Cambiar a {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </nav>
  );
};

export default Navbar;