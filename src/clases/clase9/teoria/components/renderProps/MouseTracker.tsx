import React, { useState } from 'react';

interface MouseState {
    x: number;
    y: number;
}

interface MouseTrackerProps {
    render: (state: MouseState) => React.ReactNode;
}

const MouseTracker: React.FC<MouseTrackerProps> = ({ render }) => {
    const [position, setPosition] = useState<MouseState>({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent) => {
        setPosition({
            x: event.clientX,
            y: event.clientY
        });
    };

    return (
        <div style={{ height: '200px', border: '1px solid lightblue', position: 'relative' }} onMouseMove={handleMouseMove}>
            {render(position)}
        </div>
    );
};

export default MouseTracker;
