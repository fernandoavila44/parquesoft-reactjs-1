import React, { useState, useEffect } from 'react';

interface DataFetcherProps {
    url: string; // Just a mock URL/key for now
    render: (data: any[], loading: boolean) => React.ReactNode;
}

const DataFetcher: React.FC<DataFetcherProps> = ({ url, render }) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setData([
                { id: 1, text: 'Data 1 from ' + url },
                { id: 2, text: 'Data 2 from ' + url },
            ]);
            setLoading(false);
        }, 1500);
    }, [url]);

    return <>{render(data, loading)}</>;
};

export default DataFetcher;
