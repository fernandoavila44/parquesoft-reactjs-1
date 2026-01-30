import React, { ComponentType, useState, useEffect } from 'react';

interface WithDataProps {
    data: any[];
    loading: boolean;
    error: string | null;
}

const withData = <P extends object>(
    WrappedComponent: ComponentType<P & WithDataProps>,
    dataSource: string
) => {
    const WithData: React.FC<P> = (props) => {
        const [data, setData] = useState<any[]>([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState<string | null>(null);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    // Simulating fetch with timeout
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    // In a real app, you would fetch from dataSource
                    // const response = await fetch(dataSource);
                    // const result = await response.json();

                    const mockData = [
                        { id: 1, name: 'Item 1 from ' + dataSource },
                        { id: 2, name: 'Item 2 from ' + dataSource },
                        { id: 3, name: 'Item 3 from ' + dataSource },
                    ];

                    setData(mockData);
                } catch (err: any) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }, []);

        return <WrappedComponent {...props} data={data} loading={loading} error={error} />;
    };

    WithData.displayName = `WithData(${WrappedComponent.displayName || WrappedComponent.name})`;
    return WithData;
};

export default withData;
