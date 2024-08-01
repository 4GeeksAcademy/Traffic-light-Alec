import React, { useState } from 'react';
import '/workspaces/Traffic-light-Alec/src/styles/index.css';

const TrafficLight = () => {
    const [color, setColor] = useState('red');

    return (
        <div className="traffic-light mt-5">
            <div
                className={`light red ${color === 'red' ? 'active' : ''}`}
                onClick={() => setColor('red')}
            ></div>
            <div
                className={`light yellow ${color === 'yellow' ? 'active' : ''}`}
                onClick={() => setColor('yellow')}
            ></div>
            <div
                className={`light green ${color === 'green' ? 'active' : ''}`}
                onClick={() => setColor('green')}
            ></div>
        </div>
    );
};

export default TrafficLight;
