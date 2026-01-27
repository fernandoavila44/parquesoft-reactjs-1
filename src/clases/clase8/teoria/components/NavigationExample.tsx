import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavigationExample = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [destination, setDestination] = useState('/clase8/teoria');

    const handleNavigate = () => {
        navigate(destination);
    };

    const handleNavigateWithState = () => {
        navigate(destination, {
            state: {
                from: location.pathname,
                timestamp: new Date().toISOString(),
                message: 'Navegación con estado'
            }
        });
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleGoForward = () => {
        navigate(1);
    };

    const handleReplace = () => {
        navigate(destination, { replace: true });
    };

    return (
        <div style={{ color: '#212529' }}>
            <h3 style={{ color: '#212529' }}>🧭 Navegación Programática</h3>

            <div style={{
                backgroundColor: '#e7f3ff',
                padding: '15px',
                borderRadius: '5px',
                marginTop: '20px',
                borderLeft: '4px solid #007bff',
                color: '#004085'
            }}>
                <strong style={{ color: '#004085' }}>Ubicación Actual:</strong>
                <div style={{ marginTop: '10px', fontFamily: 'monospace', color: '#212529' }}>
                    {location.pathname}
                </div>
                {location.state && (
                    <div style={{ marginTop: '10px' }}>
                        <strong style={{ color: '#004085' }}>Estado recibido:</strong>
                        <pre style={{
                            backgroundColor: 'white',
                            padding: '10px',
                            borderRadius: '4px',
                            marginTop: '5px',
                            fontSize: '12px',
                            color: '#212529'
                        }}>
                            {JSON.stringify(location.state, null, 2)}
                        </pre>
                    </div>
                )}
            </div>

            <div style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: 'white',
                borderRadius: '5px',
                border: '1px solid #dee2e6',
                color: '#212529'
            }}>
                <h4 style={{ color: '#212529' }}>Controles de Navegación:</h4>

                <div style={{ marginTop: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#212529' }}>
                        <strong>Destino:</strong>
                    </label>
                    <select
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #ced4da',
                            borderRadius: '4px',
                            marginBottom: '15px'
                        }}
                    >
                        <option value="/clase8/teoria">Clase 8 - Teoría</option>
                        <option value="/clase8/practica">Clase 8 - Práctica</option>
                        <option value="/clase7/teoria">Clase 7 - Teoría</option>
                        <option value="/clase6/teoria">Clase 6 - Teoría</option>
                        <option value="/">Inicio</option>
                    </select>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <button onClick={handleNavigate} style={primaryButtonStyle}>
                            Navegar Simple
                        </button>
                        <button onClick={handleNavigateWithState} style={secondaryButtonStyle}>
                            Navegar con Estado
                        </button>
                        <button onClick={handleReplace} style={warningButtonStyle}>
                            Navegar (Replace)
                        </button>
                        <button onClick={handleGoBack} style={infoButtonStyle}>
                            ← Atrás
                        </button>
                        <button onClick={handleGoForward} style={infoButtonStyle}>
                            Adelante →
                        </button>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '20px', color: '#212529' }}>
                <h4 style={{ color: '#212529' }}>Métodos de Navegación:</h4>
                <ul style={{ lineHeight: '1.8' }}>
                    <li>
                        <strong>navigate(path):</strong> Navega a una ruta específica
                    </li>
                    <li>
                        <strong>navigate(path, {`{ state }`}):</strong> Navega pasando estado adicional
                    </li>
                    <li>
                        <strong>navigate(path, {`{ replace: true }`}):</strong> Reemplaza la entrada actual en el historial
                    </li>
                    <li>
                        <strong>navigate(-1):</strong> Navega hacia atrás en el historial
                    </li>
                    <li>
                        <strong>navigate(1):</strong> Navega hacia adelante en el historial
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
                <pre>{`import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    await saveData(data);
    // Redirigir después de guardar
    navigate('/success');
  };

  const handleCancel = () => {
    // Volver atrás
    navigate(-1);
  };

  const handleLogin = () => {
    // Navegar con estado
    navigate('/dashboard', { 
      state: { user: 'John' } 
    });
  };

  const handleLogout = () => {
    // Reemplazar para evitar volver
    navigate('/login', { replace: true });
  };
}`}</pre>
            </div>
        </div>
    );
};

const primaryButtonStyle = {
    padding: '10px 16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px'
};

const secondaryButtonStyle = {
    ...primaryButtonStyle,
    backgroundColor: '#6c757d'
};

const warningButtonStyle = {
    ...primaryButtonStyle,
    backgroundColor: '#ffc107',
    color: '#000'
};

const infoButtonStyle = {
    ...primaryButtonStyle,
    backgroundColor: '#17a2b8'
};

export default NavigationExample;
