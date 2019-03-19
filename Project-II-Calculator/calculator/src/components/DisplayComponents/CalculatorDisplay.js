import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return <div className="display" > ${props.total}>0</div>;
};

export default CalculatorDisplay;