import MouseTracker from './MouseTracker';
import DataFetcher from './DataFetcher';

const RenderPropsExample = () => {
    return (
        <div style={{ color: '#212529' }}>
            <h3 style={{ color: '#212529' }}>🎨 Render Props</h3>

            <div style={{ marginTop: '20px', color: '#212529' }}>
                <h4 style={{ color: '#212529' }}>¿Qué es el patrón Render Props?</h4>
                <p style={{ lineHeight: '1.8', color: '#212529' }}>
                    El patrón "Render Props" se refiere a una técnica para compartir código entre componentes
                    usando una prop cuyo valor es una función. El componente llama a esta función en lugar de
                    implementar su propia lógica de renderizado.
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
                <pre>{`// Componente con Render Prop
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  
  return (
    <div onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}

// Uso del Render Prop
<MouseTracker render={({ x, y }) => (
  <p>Posición: ({x}, {y})</p>
)} />`}</pre>
            </div>

            <div style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: '#d1ecf1',
                borderLeft: '4px solid #0c5460',
                borderRadius: '4px',
                color: '#0c5460'
            }}>
                <strong>💡 Tip:</strong> Render Props es útil cuando necesitas que el componente hijo
                controle qué renderizar, mientras que el componente padre maneja la lógica.
            </div>

            <h4 style={{ color: '#212529', marginTop: '20px' }}>Demo 1: Mouse Tracker</h4>
            <p style={{ color: '#212529' }}>Mueve el mouse dentro del recuadro azul para ver las coordenadas.</p>

            <MouseTracker render={({ x, y }) => (
                <div style={{
                    padding: '20px',
                    textAlign: 'center',
                    color: '#fff',
                    backgroundColor: '#0d6efd',
                    borderRadius: '5px',
                    fontSize: '18px',
                    fontWeight: 'bold'
                }}>
                    📍 Posición del Mouse: ({x}, {y})
                </div>
            )} />

            <h4 style={{ color: '#212529', marginTop: '30px' }}>Demo 2: Data Fetcher</h4>
            <p style={{ color: '#212529' }}>Este componente simula la carga de datos y usa render props para compartir el estado.</p>

            <DataFetcher
                url="users"
                render={(data, loading) => (
                    <div style={{
                        border: '2px solid #28a745',
                        padding: '15px',
                        borderRadius: '5px',
                        backgroundColor: loading ? '#fff3cd' : '#d4edda',
                        color: loading ? '#856404' : '#155724'
                    }}>
                        {loading ? (
                            <p style={{ margin: 0 }}>⏳ Cargando datos...</p>
                        ) : (
                            <>
                                <h5 style={{ marginTop: 0, color: '#155724' }}>✅ Datos cargados:</h5>
                                <ul style={{ marginBottom: 0 }}>
                                    {data.map(item => <li key={item.id}>{item.text}</li>)}
                                </ul>
                            </>
                        )}
                    </div>
                )}
            />

            <div style={{ marginTop: '20px', color: '#212529' }}>
                <h4 style={{ color: '#212529' }}>Casos de uso comunes:</h4>
                <ul style={{ lineHeight: '1.8', color: '#212529' }}>
                    <li>Compartir lógica de eventos (mouse, teclado, scroll)</li>
                    <li>Gestión de estado de carga de datos</li>
                    <li>Animaciones y transiciones</li>
                    <li>Integración con APIs de terceros</li>
                </ul>
            </div>

            <div style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: '#fff3cd',
                borderLeft: '4px solid #856404',
                borderRadius: '4px',
                color: '#856404'
            }}>
                <strong>⚠️ Nota:</strong> En React moderno, muchos casos de uso de Render Props
                pueden ser reemplazados por Custom Hooks, que suelen ser más simples y legibles.
            </div>
        </div>
    );
};

export default RenderPropsExample;
