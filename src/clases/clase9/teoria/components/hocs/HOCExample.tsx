import withLogger from './withLogger';
import withData from './withData';

interface SimpleListOwnProps {
    title: string;
}

interface SimpleListProps extends SimpleListOwnProps {
    data: any[];
    loading: boolean;
    error: string | null;
}

const SimpleList: React.FC<SimpleListProps> = ({ data, loading, error, title }) => {
    if (loading) return <div style={{ color: '#212529' }}>Cargando {title}...</div>;
    if (error) return <div style={{ color: '#dc3545' }}>Error: {error}</div>;

    return (
        <div style={{
            border: '1px solid #dee2e6',
            padding: '15px',
            margin: '10px 0',
            borderRadius: '5px',
            backgroundColor: '#fff'
        }}>
            <h4 style={{ color: '#212529', marginTop: 0 }}>{title}</h4>
            <ul style={{ color: '#212529' }}>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

// Wrap SimpleList with HOCs
// 1. withData provides data, loading, error props
// 2. withLogger logs the props
const DataList = withLogger(withData(SimpleList, 'API de Usuarios'));

const HOCExample = () => {
    return (
        <div style={{ color: '#212529' }}>
            <h3 style={{ color: '#212529' }}>🎭 Higher-Order Components (HOCs)</h3>

            <div style={{ marginTop: '20px', color: '#212529' }}>
                <h4 style={{ color: '#212529' }}>¿Qué es un HOC?</h4>
                <p style={{ lineHeight: '1.8', color: '#212529' }}>
                    Un Higher-Order Component es una función que toma un componente y retorna un nuevo componente
                    con funcionalidad adicional. Es un patrón avanzado para reutilizar lógica de componentes.
                </p>

                <h4 style={{ color: '#212529', marginTop: '20px' }}>Ejemplos en este demo:</h4>
                <ul style={{ lineHeight: '1.8', color: '#212529' }}>
                    <li><strong>withLogger:</strong> Loguea las props en consola cuando el componente se monta (revisa la consola del navegador).</li>
                    <li><strong>withData:</strong> Simula fetching de datos e inyecta <code>data</code>, <code>loading</code>, <code>error</code> como props.</li>
                </ul>
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
                <pre>{`// Definición de un HOC
const withLogger = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log('Props:', props);
    }, [props]);
    
    return <WrappedComponent {...props} />;
  };
};

// Uso del HOC
const EnhancedComponent = withLogger(MyComponent);

// Composición de múltiples HOCs
const SuperComponent = withLogger(withData(MyComponent));`}</pre>
            </div>

            <div style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: '#d1ecf1',
                borderLeft: '4px solid #0c5460',
                borderRadius: '4px',
                color: '#0c5460'
            }}>
                <strong>💡 Tip:</strong> Los HOCs son útiles para compartir lógica entre componentes,
                pero en React moderno, los Custom Hooks suelen ser una alternativa más simple.
            </div>

            <h4 style={{ color: '#212529', marginTop: '20px' }}>Demo en vivo:</h4>
            <DataList title="Lista de Elementos Cargados via HOC" />
            <p style={{ fontSize: '12px', color: '#6c757d', marginTop: '10px' }}>
                Abre la consola del navegador para ver los logs del HOC withLogger
            </p>
        </div>
    );
};

export default HOCExample;
