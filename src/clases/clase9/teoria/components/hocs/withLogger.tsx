import React, { ComponentType, useEffect } from 'react';

const withLogger = <P extends object>(WrappedComponent: ComponentType<P>) => {
    const WithLogger: React.FC<P> = (props) => {
        useEffect(() => {
            console.log(`[withLogger] Component ${WrappedComponent.displayName || WrappedComponent.name} mounted with props:`, props);
        }, [props]);

        return <WrappedComponent {...props} />;
    };

    WithLogger.displayName = `WithLogger(${WrappedComponent.displayName || WrappedComponent.name})`;
    return WithLogger;
};

export default withLogger;
