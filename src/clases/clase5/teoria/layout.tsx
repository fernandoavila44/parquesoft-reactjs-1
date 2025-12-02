import Content from "./components/Content";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

const Layout = () => {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Content />
        <Content />
        <Content />
        <Content />
      </ThemeProvider>
    </>
  );
};

export default Layout;