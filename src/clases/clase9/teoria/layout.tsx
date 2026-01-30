import { useState } from 'react';
import HOCExample from './components/hocs/HOCExample';
import CustomHooksExample from './components/customHooks/CustomHooksExample';
import RenderPropsExample from './components/renderProps/RenderPropsExample';
import ContainerPresenterExample from './components/containerPresenter/ContainerPresenterExample';

const Layout = () => {
    const [activeExample, setActiveExample] = useState<string>('hocs');

    const examples = [
        { id: 'hocs', label: 'Higher-Order Components', component: HOCExample },
        { id: 'custom-hooks', label: 'Custom Hooks', component: CustomHooksExample },
        { id: 'render-props', label: 'Render Props', component: RenderPropsExample },
        { id: 'container-presenter', label: 'Container/Presenter', component: ContainerPresenterExample },
    ];

    const ActiveComponent = examples.find(ex => ex.id === activeExample)?.component || HOCExample;

    return (
        <div style={{ padding: '20px' }}>
            <h2>Ejemplos Interactivos de Patrones Avanzados</h2>

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
