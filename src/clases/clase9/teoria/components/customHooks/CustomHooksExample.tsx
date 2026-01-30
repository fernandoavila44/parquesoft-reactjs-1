import useWindowSize from './useWindowSize';
import useLocalStorage from './useLocalStorage';

const CustomHooksExample = () => {
    const { width, height } = useWindowSize();
    const [name, setName] = useLocalStorage<string>('c9-name', 'Guest');

    return (
        <div style={{ color: '#212529' }}>
            <h3 style={{ color: '#212529' }}>🪝 Custom Hooks</h3>

            <div style={{ marginTop: '20px', color: '#212529' }}>
                <h4 style={{ color: '#212529' }}>¿Qué son los Custom Hooks?</h4>
                <p style={{ lineHeight: '1.8', color: '#212529' }}>
                    Los Custom Hooks son funciones JavaScript que comienzan con "use" y pueden llamar a otros Hooks.
                    Permiten extraer lógica de componentes en funciones reutilizables.
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
                <pre>{`// Ejemplo de Custom Hook
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}

// Uso del Custom Hook
function MyComponent() {
  const { width, height } = useWindowSize();
  return <div>Tamaño: {width} x {height}</div>;
}`}</pre>
            </div>

            <div style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: '#d1ecf1',
                borderLeft: '4px solid #0c5460',
                borderRadius: '4px',
                color: '#0c5460'
            }}>
                <strong>💡 Tip:</strong> Los Custom Hooks son la forma moderna y recomendada de compartir
                lógica entre componentes en React.
            </div>

            <h4 style={{ color: '#212529', marginTop: '20px' }}>Demo 1: useWindowSize</h4>
            <div style={{
                border: '2px solid #28a745',
                padding: '15px',
                borderRadius: '5px',
                backgroundColor: '#d4edda',
                color: '#155724',
                marginTop: '10px'
            }}>
                <p style={{ margin: 0, fontSize: '18px' }}>
                    <strong>Tamaño de la ventana:</strong> {width}px × {height}px
                </p>
                <p style={{ fontSize: '12px', marginTop: '10px', marginBottom: 0 }}>
                    Redimensiona la ventana del navegador para ver los cambios en tiempo real
                </p>
            </div>

            <h4 style={{ color: '#212529', marginTop: '30px' }}>Demo 2: useLocalStorage</h4>
            <div style={{
                border: '2px solid #007bff',
                padding: '15px',
                borderRadius: '5px',
                backgroundColor: '#cfe2ff',
                color: '#084298',
                marginTop: '10px'
            }}>
                <label style={{ display: 'block', marginBottom: '10px' }}>
                    <strong>Nombre:</strong>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{
                            marginLeft: '10px',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            border: '1px solid #0d6efd',
                            fontSize: '14px'
                        }}
                    />
                </label>
                <p style={{ margin: 0 }}>
                    Hola, <strong>{name}</strong>! 👋
                </p>
                <p style={{ fontSize: '12px', marginTop: '10px', marginBottom: 0 }}>
                    Este valor se guarda en LocalStorage. Recarga la página para verificar la persistencia.
                </p>
            </div>

            <div style={{ marginTop: '20px', color: '#212529' }}>
                <h4 style={{ color: '#212529' }}>Ventajas de los Custom Hooks:</h4>
                <ul style={{ lineHeight: '1.8', color: '#212529' }}>
                    <li>Reutilización de lógica sin cambiar la jerarquía de componentes</li>
                    <li>Código más limpio y fácil de testear</li>
                    <li>Separación de concerns (lógica vs presentación)</li>
                    <li>Composición flexible de comportamientos</li>
                </ul>
            </div>
        </div>
    );
};

export default CustomHooksExample;
