import { useTheme } from "../context/ThemeContext";

const Content = () => {
  const { theme, toggleTheme } = useTheme();
  const oscuro = theme === "dark";

  return (
    <div
      style={{
        padding: 12,
        borderRadius: 10,
        background: oscuro ? "#1e293b" : "#f8fafc",
        color: oscuro ? "#f8fafc" : "#0f172a",
      }}
    >
      <p>El hijo lee el tema con useTheme. Nadie se lo pasó por props.</p>
      <button type="button" onClick={toggleTheme}>
        Cambiar a {oscuro ? "claro" : "oscuro"}
      </button>
    </div>
  );
};

export default Content;
