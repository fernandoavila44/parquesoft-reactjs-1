import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const QueryParamsExample = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [inputValue, setInputValue] = useState('');

    // Leer parámetros actuales
    const name = searchParams.get('name') || '';
    const age = searchParams.get('age') || '';
    const city = searchParams.get('city') || '';

    const handleAddParam = () => {
        if (inputValue) {
            setSearchParams({ ...Object.fromEntries(searchParams), name: inputValue });
            setInputValue('');
        }
    };

    const handleSetAge = (ageValue: string) => {
        const params = Object.fromEntries(searchParams);
        params.age = ageValue;
        setSearchParams(params);
    };

    const handleSetCity = (cityValue: string) => {
        const params = Object.fromEntries(searchParams);
        params.city = cityValue;
        setSearchParams(params);
    };

    const handleClearParams = () => {
        setSearchParams({});
    };

    return (
        <div style={{ color: '#212529' }}>
            <h3 style={{ color: '#212529' }}>🔍 Query Parameters (URL Search Params)</h3>

            <div style={{
                backgroundColor: '#fff3cd',
                padding: '15px',
                borderRadius: '5px',
                marginTop: '20px',
                borderLeft: '4px solid #ffc107',
                color: '#856404'
            }}>
                <strong style={{ color: '#856404' }}>URL Actual:</strong>
                <div style={{
                    marginTop: '10px',
                    fontFamily: 'monospace',
                    backgroundColor: 'white',
                    padding: '10px',
                    borderRadius: '4px',
                    wordBreak: 'break-all',
                    color: '#212529'
                }}>
                    {window.location.pathname}
                    {searchParams.toString() ? `?${searchParams.toString()}` : ''}
                </div>
            </div>

            <div style={{ marginTop: '20px', color: '#212529' }}>
                <h4 style={{ color: '#212529' }}>Parámetros Actuales:</h4>
                <ul style={{ color: '#212529' }}>
                    {name && <li><strong>name:</strong> {name}</li>}
                    {age && <li><strong>age:</strong> {age}</li>}
                    {city && <li><strong>city:</strong> {city}</li>}
                    {!name && !age && !city && <li style={{ color: '#6c757d' }}>No hay parámetros</li>}
                </ul>
            </div>

            <div style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: 'white',
                borderRadius: '5px',
                border: '1px solid #dee2e6',
                color: '#212529'
            }}>
                <h4 style={{ color: '#212529' }}>Agregar/Modificar Parámetros:</h4>

                <div style={{ marginTop: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#212529' }}>
                        <strong>Nombre:</strong>
                    </label>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Ingresa un nombre"
                            style={{
                                flex: 1,
                                padding: '8px',
                                border: '1px solid #ced4da',
                                borderRadius: '4px'
                            }}
                        />
                        <button
                            onClick={handleAddParam}
                            style={{
                                padding: '8px 16px',
                                backgroundColor: '#007bff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Establecer
                        </button>
                    </div>
                </div>

                <div style={{ marginTop: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#212529' }}>
                        <strong>Edad:</strong>
                    </label>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={() => handleSetAge('25')} style={buttonStyle}>25</button>
                        <button onClick={() => handleSetAge('30')} style={buttonStyle}>30</button>
                        <button onClick={() => handleSetAge('35')} style={buttonStyle}>35</button>
                    </div>
                </div>

                <div style={{ marginTop: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#212529' }}>
                        <strong>Ciudad:</strong>
                    </label>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={() => handleSetCity('Bogotá')} style={buttonStyle}>Bogotá</button>
                        <button onClick={() => handleSetCity('Medellín')} style={buttonStyle}>Medellín</button>
                        <button onClick={() => handleSetCity('Cali')} style={buttonStyle}>Cali</button>
                    </div>
                </div>

                <button
                    onClick={handleClearParams}
                    style={{
                        marginTop: '20px',
                        padding: '8px 16px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Limpiar Todos los Parámetros
                </button>
            </div>

            <div style={{
                marginTop: '20px',
                backgroundColor: '#282c34',
                color: '#61dafb',
                padding: '15px',
                borderRadius: '5px',
                fontFamily: 'monospace',
                fontSize: '13px',
                overflowX: 'auto'
            }}>
                <pre>{`// Ejemplo de código
import { useSearchParams } from 'react-router-dom';

function Component() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Leer parámetro
  const name = searchParams.get('name');
  
  // Establecer parámetro
  setSearchParams({ name: 'Juan', age: '25' });
  
  // Actualizar parámetro existente
  const params = Object.fromEntries(searchParams);
  params.city = 'Bogotá';
  setSearchParams(params);
  
  // Limpiar todos
  setSearchParams({});
}`}</pre>
            </div>
        </div>
    );
};

const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px'
};

export default QueryParamsExample;
