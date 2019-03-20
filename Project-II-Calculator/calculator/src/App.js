import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div class="calc-wrapper">
      <CalculatorDisplay />
{/* <ActionButton /> */}
      <ActionButton text="CLEAR" buttonStyle= "action-button action-text"/>

      <NumberButton text="/" buttonStyle= "op-button"/>

      {/* <NumberButton /> */}
        <NumberButton text="7" buttonStyle = "number-button"/>
        <NumberButton text="8" buttonStyle = "number-button"/>
        <NumberButton text="9" buttonStyle = "number-button"/>
        <NumberButton text="x" buttonStyle= "op-button"/> 

        <NumberButton text="4" buttonStyle = "number-button"/>
        <NumberButton text="5" buttonStyle = "number-button"/>
        <NumberButton text="6" buttonStyle = "number-button"/>
        <NumberButton text="-" buttonStyle= "op-button"/> 

        <NumberButton text="1" buttonStyle = "number-button"/>
        <NumberButton text="2" buttonStyle = "number-button"/>
        <NumberButton text="3" buttonStyle = "number-button"/>
        <NumberButton text="+" buttonStyle= "op-button"/> 

      {/* <ActionButton /> */}
      <ActionButton text="0" buttonStyle= "action-button action-text"/>

      <NumberButton text="=" buttonStyle= "op-button"/>
     
    </div>
  );
};

export default App;
