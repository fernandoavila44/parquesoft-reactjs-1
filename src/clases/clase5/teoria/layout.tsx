import Content from "./components/Content";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

const Layout = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Content />
    </ThemeProvider>
  );
};

export default Layout;