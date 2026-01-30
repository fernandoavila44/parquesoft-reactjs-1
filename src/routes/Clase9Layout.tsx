import { Outlet } from "react-router-dom";

const Clase9Layout = () => {
    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h2>Clase 9: Patrones Avanzados de React</h2>
            <p>En esta sección exploraremos HOCs, Custom Hooks, Render Props y el patrón Container-Presenter.</p>
            <hr />
            <Outlet />
        </div>
    );
};

export default Clase9Layout;
