import { useState } from 'react';

const HooksExamples = () => {
  const [selectedHook, setSelectedHook] = useState<string>('useNavigate');

  const hooks = {
    useNavigate: {
      title: 'useNavigate',
      description: 'Hook para navegación programática. Reemplaza el antiguo useHistory.',
      code: `import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navegar a una ruta
    navigate('/about');
    
    // Navegar hacia atrás
    navigate(-1);
    
    // Navegar hacia adelante
    navigate(1);
    
    // Navegar con estado
    navigate('/profile', { state: { from: 'home' } });
    
    // Reemplazar en el historial
    navigate('/login', { replace: true });
  };

  return <button onClick={handleClick}>Navegar</button>;
}`,
      useCases: [
        'Redirigir después de un formulario',
        'Navegación condicional basada en lógica',
        'Navegación con estado adicional'
      ]
    },
    useParams: {
      title: 'useParams',
      description: 'Hook para acceder a parámetros dinámicos de la URL.',
      code: `import { useParams } from 'react-router-dom';

// Ruta definida: <Route path="/user/:userId" />

function UserProfile() {
  const { userId } = useParams();
  
  return <h1>Perfil del usuario: {userId}</h1>;
}

// URL: /user/123
// userId = "123"

// Múltiples parámetros
// Ruta: <Route path="/blog/:category/:postId" />
function BlogPost() {
  const { category, postId } = useParams();
  
  return (
    <div>
      <p>Categoría: {category}</p>
      <p>Post ID: {postId}</p>
    </div>
  );
}`,
      useCases: [
        'Cargar datos basados en ID de URL',
        'Rutas dinámicas para perfiles de usuario',
        'Páginas de detalle de productos'
      ]
    },
    useLocation: {
      title: 'useLocation',
      description: 'Hook para acceder al objeto location actual con información de la URL.',
      code: `import { useLocation } from 'react-router-dom';

function CurrentPath() {
  const location = useLocation();
  
  console.log(location.pathname);  // "/about"
  console.log(location.search);    // "?name=John"
  console.log(location.hash);      // "#section1"
  console.log(location.state);     // Estado pasado via navigate
  
  return (
    <div>
      <p>Ruta actual: {location.pathname}</p>
      <p>Query string: {location.search}</p>
      {location.state && (
        <p>Estado: {JSON.stringify(location.state)}</p>
      )}
    </div>
  );
}`,
      useCases: [
        'Detectar cambios de ruta',
        'Acceder a estado pasado entre rutas',
        'Análisis de navegación'
      ]
    },
    useSearchParams: {
      title: 'useSearchParams',
      description: 'Hook para leer y modificar query parameters de la URL.',
      code: `import { useSearchParams } from 'react-router-dom';

function SearchFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Leer parámetros
  const query = searchParams.get('q');
  const page = searchParams.get('page') || '1';
  
  // Actualizar parámetros
  const handleSearch = (term: string) => {
    setSearchParams({ q: term, page: '1' });
  };
  
  // Actualizar un parámetro específico
  const nextPage = () => {
    const current = parseInt(page);
    searchParams.set('page', String(current + 1));
    setSearchParams(searchParams);
  };
  
  return (
    <div>
      <p>Búsqueda: {query}</p>
      <p>Página: {page}</p>
      <button onClick={nextPage}>Siguiente</button>
    </div>
  );
}`,
      useCases: [
        'Filtros de búsqueda',
        'Paginación',
        'Ordenamiento de listas'
      ]
    }
  };

  const currentHook = hooks[selectedHook as keyof typeof hooks];

  return (
    <div style={{ color: '#212529' }}>
      <h3 style={{ color: '#212529' }}>🪝 Hooks de React Router</h3>

      <div style={{
        display: 'flex',
        gap: '10px',
        marginTop: '20px',
        flexWrap: 'wrap'
      }}>
        {Object.keys(hooks).map(hookName => (
          <button
            key={hookName}
            onClick={() => setSelectedHook(hookName)}
            style={{
              padding: '8px 16px',
              backgroundColor: selectedHook === hookName ? '#28a745' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '13px'
            }}
          >
            {hooks[hookName as keyof typeof hooks].title}
          </button>
        ))}
      </div>

      <div style={{ marginTop: '20px', color: '#212529' }}>
        <h4 style={{ color: '#212529' }}>{currentHook.title}</h4>
        <p style={{ color: '#212529' }}>{currentHook.description}</p>

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
          <pre>{currentHook.code}</pre>
        </div>

        <div style={{ marginTop: '15px', color: '#212529' }}>
          <strong style={{ color: '#212529' }}>Casos de uso comunes:</strong>
          <ul style={{ color: '#212529' }}>
            {currentHook.useCases.map((useCase, index) => (
              <li key={index}>{useCase}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HooksExamples;
