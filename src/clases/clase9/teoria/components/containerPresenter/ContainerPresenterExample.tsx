import UserContainer from './UserContainer';

const ContainerPresenterExample = () => {
    return (
        <div style={{ color: '#212529' }}>
            <h3 style={{ color: '#212529' }}>📦 Container / Presenter Pattern</h3>

            <div style={{ marginTop: '20px', color: '#212529' }}>
                <h4 style={{ color: '#212529' }}>¿Qué es el patrón Container/Presenter?</h4>
                <p style={{ lineHeight: '1.8', color: '#212529' }}>
                    Este patrón separa los componentes en dos categorías:
                </p>
                <ul style={{ lineHeight: '1.8', color: '#212529' }}>
                    <li>
                        <strong>Container (Inteligente):</strong> Maneja la lógica, el estado, las llamadas a APIs
                        y la lógica de negocio. No se preocupa por cómo se ven las cosas.
                    </li>
                    <li>
                        <strong>Presenter (Presentacional):</strong> Solo se encarga de cómo se ven las cosas.
                        Recibe datos y callbacks vía props. Es "tonto" y reutilizable.
                    </li>
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
                <pre>{`// Container (lógica)
function UserContainer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    fetchUsers().then(data => setUsers(data));
  }, []);
  
  return <UserPresenter users={users} loading={loading} />;
}

// Presenter (UI)
function UserPresenter({ users, loading }) {
  if (loading) return <p>Cargando...</p>;
  
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
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
                <strong>💡 Tip:</strong> Este patrón hace que los componentes presentacionales sean
                fáciles de testear y reutilizar en diferentes contextos.
            </div>

            <h4 style={{ color: '#212529', marginTop: '20px' }}>Demo en vivo:</h4>
            <p style={{ color: '#212529' }}>
                El componente <code>UserContainer</code> maneja la lógica de carga de datos,
                mientras que <code>UserPresenter</code> solo se encarga de mostrarlos.
            </p>

            <div style={{
                border: '2px solid #6f42c1',
                borderRadius: '8px',
                padding: '20px',
                backgroundColor: '#f8f9fa',
                marginTop: '15px'
            }}>
                <UserContainer />
            </div>

            <div style={{ marginTop: '20px', color: '#212529' }}>
                <h4 style={{ color: '#212529' }}>Ventajas del patrón:</h4>
                <ul style={{ lineHeight: '1.8', color: '#212529' }}>
                    <li><strong>Separación de responsabilidades:</strong> Lógica separada de la presentación</li>
                    <li><strong>Reutilización:</strong> Los presenters pueden usarse con diferentes containers</li>
                    <li><strong>Testabilidad:</strong> Los presenters son fáciles de testear (solo props)</li>
                    <li><strong>Mantenibilidad:</strong> Cambios en UI no afectan la lógica y viceversa</li>
                </ul>
            </div>

            <div style={{ marginTop: '20px', color: '#212529' }}>
                <h4 style={{ color: '#212529' }}>Cuándo usar este patrón:</h4>
                <ul style={{ lineHeight: '1.8', color: '#212529' }}>
                    <li>Cuando tienes componentes con mucha lógica de negocio</li>
                    <li>Cuando necesitas reutilizar la misma UI con diferentes fuentes de datos</li>
                    <li>En equipos grandes donde diferentes personas trabajan en lógica vs UI</li>
                    <li>Cuando quieres facilitar el testing de componentes</li>
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
                <strong>⚠️ Nota:</strong> Con la llegada de Hooks, este patrón es menos necesario.
                Los Custom Hooks pueden extraer la lógica sin necesidad de componentes container separados.
            </div>
        </div>
    );
};

export default ContainerPresenterExample;
