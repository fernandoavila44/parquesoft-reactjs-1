const BasicRouting = () => {
    return (
        <div style={{ color: '#212529' }}>
            <h3 style={{ color: '#212529' }}>🛣️ Rutas Básicas en React Router</h3>

            <div style={{ marginTop: '20px', color: '#212529' }}>
                <h4 style={{ color: '#212529' }}>Conceptos Fundamentales:</h4>
                <ul style={{ lineHeight: '1.8', color: '#212529' }}>
                    <li><strong>BrowserRouter:</strong> Componente principal que envuelve toda la aplicación</li>
                    <li><strong>Routes:</strong> Contenedor para todas las rutas</li>
                    <li><strong>Route:</strong> Define una ruta individual con su componente</li>
                    <li><strong>Link:</strong> Navegación declarativa sin recargar la página</li>
                </ul>
            </div>

            <div style={{
                backgroundColor: '#282c34',
                color: '#61dafb',
                padding: '15px',
                borderRadius: '5px',
                marginTop: '20px',
                fontFamily: 'monospace',
                fontSize: '14px',
                overflowX: 'auto'
            }}>
                <pre>{`// Configuración básica en main.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>

// Navegación con Link
import { Link } from 'react-router-dom';

<nav>
  <Link to="/">Inicio</Link>
  <Link to="/about">Acerca de</Link>
  <Link to="/contact">Contacto</Link>
</nav>`}</pre>
            </div>

            <div style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: '#d1ecf1',
                borderLeft: '4px solid #0c5460',
                borderRadius: '4px',
                color: '#0c5460'
            }}>
                <strong>💡 Tip:</strong> Las rutas se evalúan en orden. Usa <code>index</code> para rutas por defecto
                y el atributo <code>path</code> para definir la URL.
            </div>
        </div>
    );
};

export default BasicRouting;
