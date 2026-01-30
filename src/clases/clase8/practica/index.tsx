import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Componentes de ejemplo para la práctica
const ProductList = () => {
    const navigate = useNavigate();

    const products = [
        { id: 1, name: 'Laptop', category: 'electronics' },
        { id: 2, name: 'Smartphone', category: 'electronics' },
        { id: 3, name: 'Camiseta', category: 'clothing' },
        { id: 4, name: 'Pantalón', category: 'clothing' },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h2>Lista de Productos</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px', marginTop: '20px' }}>
                {products.map(product => (
                    <div
                        key={product.id}
                        onClick={() => navigate(`/clase8/practica/product/${product.id}`)}
                        style={{
                            padding: '15px',
                            border: '1px solid #dee2e6',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            backgroundColor: 'white',
                            transition: 'transform 0.2s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <h3 style={{ margin: '0 0 10px 0' }}>{product.name}</h3>
                        <span style={{
                            padding: '4px 8px',
                            backgroundColor: '#e7f3ff',
                            borderRadius: '4px',
                            fontSize: '12px'
                        }}>
                            {product.category}
                        </span>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '20px' }}>
                <Link to="/clase8/practica" style={{ color: '#007bff', textDecoration: 'none' }}>
                    ← Volver a Práctica
                </Link>
            </div>
        </div>
    );
};

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    const products: { [key: string]: { name: string; price: string; description: string } } = {
        '1': { name: 'Laptop', price: '$999', description: 'Laptop de alto rendimiento' },
        '2': { name: 'Smartphone', price: '$699', description: 'Smartphone última generación' },
        '3': { name: 'Camiseta', price: '$29', description: 'Camiseta de algodón' },
        '4': { name: 'Pantalón', price: '$49', description: 'Pantalón casual' },
    };

    const product = products[productId || ''];

    if (!product) {
        return (
            <div style={{ padding: '20px' }}>
                <h2>Producto no encontrado</h2>
                <button onClick={() => navigate('/clase8/practica/products')} style={buttonStyle}>
                    Ver todos los productos
                </button>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>{product.name}</h2>
            <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                marginTop: '20px'
            }}>
                <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#28a745' }}>{product.price}</p>
                <p style={{ marginTop: '15px' }}>{product.description}</p>
                <p style={{
                    marginTop: '15px',
                    padding: '10px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '4px',
                    fontFamily: 'monospace',
                    fontSize: '14px'
                }}>
                    Product ID desde URL: {productId}
                </p>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                <button onClick={() => navigate(-1)} style={buttonStyle}>
                    ← Volver
                </button>
                <button onClick={() => navigate('/clase8/practica/products')} style={{ ...buttonStyle, backgroundColor: '#6c757d' }}>
                    Ver todos los productos
                </button>
            </div>
        </div>
    );
};

const SearchPage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('all');

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (searchTerm) params.set('q', searchTerm);
        if (category !== 'all') params.set('category', category);

        navigate(`/clase8/practica/search?${params.toString()}`);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Búsqueda de Productos</h2>
            <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                marginTop: '20px'
            }}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                        Término de búsqueda:
                    </label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Buscar productos..."
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ced4da',
                            borderRadius: '4px',
                            fontSize: '16px'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                        Categoría:
                    </label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ced4da',
                            borderRadius: '4px',
                            fontSize: '16px'
                        }}
                    >
                        <option value="all">Todas</option>
                        <option value="electronics">Electrónicos</option>
                        <option value="clothing">Ropa</option>
                        <option value="books">Libros</option>
                    </select>
                </div>

                <button onClick={handleSearch} style={{ ...buttonStyle, width: '100%' }}>
                    Buscar
                </button>
            </div>

            <div style={{ marginTop: '20px' }}>
                <Link to="/clase8/practica" style={{ color: '#007bff', textDecoration: 'none' }}>
                    ← Volver a Práctica
                </Link>
            </div>
        </div>
    );
};

const Clase8Practica = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Clase 8 - Práctica: React Router</h1>
            <p>Ejercicios prácticos para dominar React Router</p>

            <Routes>
                <Route index element={<PracticaHome />} />
                <Route path="products" element={<ProductList />} />
                <Route path="product/:productId" element={<ProductDetail />} />
                <Route path="search" element={<SearchPage />} />
            </Routes>
        </div>
    );
};

const PracticaHome = () => {
    return (
        <div>
            <div style={{
                backgroundColor: '#e7f3ff',
                padding: '20px',
                borderRadius: '8px',
                marginTop: '20px',
                borderLeft: '4px solid #007bff',
                color: '#000'
            }}>
                <h3>🎯 Objetivos de la Práctica</h3>
                <ul style={{ lineHeight: '1.8' }}>
                    <li>Implementar navegación entre páginas</li>
                    <li>Usar parámetros dinámicos en URLs (useParams)</li>
                    <li>Manejar query parameters (useSearchParams)</li>
                    <li>Implementar navegación programática (useNavigate)</li>
                    <li>Crear rutas anidadas con Outlet</li>
                </ul>
            </div>

            <div style={{ marginTop: '30px' }}>
                <h3>Ejercicios Disponibles:</h3>

                <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
                    <ExerciseCard
                        title="1. Lista de Productos"
                        description="Navega a una lista de productos y haz clic en uno para ver sus detalles. Practica useParams y useNavigate."
                        link="/clase8/practica/products"
                        linkText="Ver Productos"
                    />

                    <ExerciseCard
                        title="2. Búsqueda con Query Params"
                        description="Implementa un formulario de búsqueda que usa query parameters para filtrar resultados."
                        link="/clase8/practica/search"
                        linkText="Ir a Búsqueda"
                    />
                </div>
            </div>

            <div style={{
                marginTop: '30px',
                backgroundColor: '#fff3cd',
                padding: '20px',
                borderRadius: '8px',
                borderLeft: '4px solid #ffc107',
                color: '#000'
            }}>
                <h4>💡 Consejos:</h4>
                <ul style={{ lineHeight: '1.8' }}>
                    <li>Abre las DevTools y observa cómo cambia la URL</li>
                    <li>Usa el botón "atrás" del navegador para ver cómo funciona el historial</li>
                    <li>Inspecciona el código de los componentes para aprender</li>
                </ul>
            </div>
        </div>
    );
};

const ExerciseCard = ({ title, description, link, linkText }: {
    title: string;
    description: string;
    link: string;
    linkText: string;
}) => {
    return (
        <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #dee2e6',
            color: '#000'
        }}>
            <h4 style={{ marginTop: 0 }}>{title}</h4>
            <p style={{ color: '#6c757d' }}>{description}</p>
            <Link
                to={link}
                style={{
                    display: 'inline-block',
                    marginTop: '10px',
                    padding: '8px 16px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px'
                }}
            >
                {linkText} →
            </Link>
        </div>
    );
};

const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
};

export default Clase8Practica;
