const NestedRoutesExample = () => {
  return (
    <div style={{ color: '#212529' }}>
      <h3 style={{ color: '#212529' }}>🗂️ Rutas Anidadas (Nested Routes)</h3>

      <div style={{ marginTop: '20px', color: '#212529' }}>
        <p style={{ color: '#212529' }}>
          Las rutas anidadas permiten crear jerarquías de componentes que se renderizan
          dentro de otros componentes. Son útiles para layouts compartidos y navegación compleja.
        </p>
      </div>

      <div style={{
        backgroundColor: '#282c34',
        color: '#61dafb',
        padding: '15px',
        borderRadius: '5px',
        marginTop: '20px',
        fontFamily: 'monospace',
        fontSize: '13px',
        overflowX: 'auto'
      }}>
        <pre>{`// Configuración de rutas anidadas
import { Routes, Route, Outlet, Link } from 'react-router-dom';

// Layout padre
function DashboardLayout() {
  return (
    <div>
      <nav>
        <Link to="profile">Perfil</Link>
        <Link to="settings">Configuración</Link>
        <Link to="stats">Estadísticas</Link>
      </nav>
      
      {/* Aquí se renderizan las rutas hijas */}
      <Outlet />
    </div>
  );
}

// Configuración de rutas
<Routes>
  <Route path="/dashboard" element={<DashboardLayout />}>
    <Route index element={<DashboardHome />} />
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
    <Route path="stats" element={<Stats />} />
  </Route>
</Routes>

// URLs resultantes:
// /dashboard          -> DashboardLayout + DashboardHome
// /dashboard/profile  -> DashboardLayout + Profile
// /dashboard/settings -> DashboardLayout + Settings`}</pre>
      </div>

      <div style={{ marginTop: '20px', color: '#212529' }}>
        <h4 style={{ color: '#212529' }}>Componente Outlet:</h4>
        <p style={{ color: '#212529' }}>
          El componente <code>&lt;Outlet /&gt;</code> es crucial en rutas anidadas.
          Actúa como un placeholder donde se renderizan los componentes de las rutas hijas.
        </p>
      </div>

      <div style={{
        backgroundColor: '#282c34',
        color: '#61dafb',
        padding: '15px',
        borderRadius: '5px',
        marginTop: '15px',
        fontFamily: 'monospace',
        fontSize: '13px',
        overflowX: 'auto'
      }}>
        <pre>{`import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      <header>Header compartido</header>
      
      <main>
        {/* Las rutas hijas se renderizan aquí */}
        <Outlet />
      </main>
      
      <footer>Footer compartido</footer>
    </div>
  );
}`}</pre>
      </div>

      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#d4edda',
        borderLeft: '4px solid #28a745',
        borderRadius: '4px',
        color: '#155724'
      }}>
        <strong style={{ color: '#155724' }}>✅ Ventajas de Rutas Anidadas:</strong>
        <ul style={{ marginTop: '10px', lineHeight: '1.8' }}>
          <li>Compartir layouts entre múltiples páginas</li>
          <li>Mantener estado del componente padre</li>
          <li>Organización lógica de la estructura de rutas</li>
          <li>Navegación más intuitiva y jerárquica</li>
        </ul>
      </div>

      <div style={{ marginTop: '20px', color: '#212529' }}>
        <h4 style={{ color: '#212529' }}>Ejemplo Práctico - Este Curso:</h4>
        <p style={{ color: '#212529' }}>
          Esta aplicación usa rutas anidadas. Cada clase tiene un layout padre
          que contiene las pestañas de Teoría y Práctica, y las rutas hijas
          renderizan el contenido específico.
        </p>

        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '15px',
          borderRadius: '5px',
          marginTop: '10px',
          fontFamily: 'monospace',
          fontSize: '13px'
        }}>
          <pre>{`<Route path="clase8" element={<Clase8Layout />}>
  <Route path="teoria" element={<Clase8Teoria />} />
  <Route path="practica" element={<Clase8Practica />} />
  <Route index element={<Clase8Teoria />} />
</Route>`}</pre>
        </div>
      </div>

      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#fff3cd',
        borderLeft: '4px solid #ffc107',
        borderRadius: '4px',
        color: '#856404'
      }}>
        <strong style={{ color: '#856404' }}>💡 Tip:</strong> Usa el atributo <code>index</code> en una ruta hija
        para definir qué componente se renderiza cuando se accede a la ruta padre exacta.
      </div>
    </div>
  );
};

export default NestedRoutesExample;
