import { useState } from 'react';
import BasicRouting from './components/BasicRouting';
import HooksExamples from './components/HooksExamples';
import QueryParamsExample from './components/QueryParamsExample';
import NavigationExample from './components/NavigationExample';
import NestedRoutesExample from './components/NestedRoutesExample';

const Layout = () => {
    const [activeExample, setActiveExample] = useState<string>('basic');

    const examples = [
        { id: 'basic', label: 'Rutas Básicas', component: BasicRouting },
        { id: 'hooks', label: 'Hooks de React Router', component: HooksExamples },
        { id: 'query', label: 'Query Params', component: QueryParamsExample },
        { id: 'navigation', label: 'Navegación Programática', component: NavigationExample },
        { id: 'nested', label: 'Rutas Anidadas', component: NestedRoutesExample },
    ];

    const ActiveComponent = examples.find(ex => ex.id === activeExample)?.component || BasicRouting;

    return (
        <div style={{ padding: '20px' }}>
            <h2>Ejemplos Interactivos de React Router</h2>

            <div style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '20px',
                flexWrap: 'wrap'
            }}>
                {examples.map(example => (
                    <button
                        key={example.id}
                        onClick={() => setActiveExample(example.id)}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: activeExample === example.id ? '#007bff' : '#6c757d',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '14px'
                        }}
                    >
                        {example.label}
                    </button>
                ))}
            </div>

            <div style={{
                border: '2px solid #dee2e6',
                borderRadius: '8px',
                padding: '20px',
                backgroundColor: '#f8f9fa'
            }}>
                <ActiveComponent />
            </div>
        </div>
    );
};

export default Layout;
