import { NavLink, Outlet } from "react-router-dom";

interface ClaseLayoutProps {
  claseNumber: number;
  claseTitle: string;
}

const ClaseLayout = ({ claseNumber, claseTitle }: ClaseLayoutProps) => {
  return (
    <div>
      <h1>Clase {claseNumber}: {claseTitle}</h1>
      <nav style={{ margin: "20px 0" }}>
        <NavLink 
          to={`/clase${claseNumber}/teoria`}
          style={({ isActive }) => ({
            marginRight: "20px",
            padding: "10px 15px",
            backgroundColor: isActive ? "#007bff" : "#f8f9fa",
            color: isActive ? "white" : "#007bff",
            textDecoration: "none",
            borderRadius: "5px",
            border: isActive ? "none" : "1px solid #007bff"
          })}
        >
          Teoría
        </NavLink>
        <NavLink 
          to={`/clase${claseNumber}/practica`}
          style={({ isActive }) => ({
            padding: "10px 15px",
            backgroundColor: isActive ? "#28a745" : "#f8f9fa",
            color: isActive ? "white" : "#28a745",
            textDecoration: "none",
            borderRadius: "5px",
            border: isActive ? "none" : "1px solid #28a745"
          })}
        >
          Práctica
        </NavLink>
      </nav>
      <div style={{ marginTop: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default ClaseLayout;
