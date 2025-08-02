import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Content = () => {
  // const { theme } = useTheme();
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{
      padding: '20px',
      background: theme === 'light' ? '#f5f5f5' : '#222',
      color: theme === 'light' ? '#000' : '#fff'
    }}>
      <p>Bienvenido a la aplicación. El tema actual es: {theme}.</p>
    </div>
  );
};

export default Content;