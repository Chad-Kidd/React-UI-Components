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
      <ActionButton text="CLEAR" buttonStyle= "white"/>

      <NumberButton text="/" buttonStyle= "red"/>

      {/* <NumberButton /> */}
        <NumberButton text="7" buttonStyle = "grey"/>
        <NumberButton text="8" buttonStyle = "grey"/>
        <NumberButton text="9" buttonStyle = "grey"/>
        <NumberButton text="x" buttonStyle= "red"/> 

        <NumberButton text="4" buttonStyle = "grey"/>
        <NumberButton text="5" buttonStyle = "grey"/>
        <NumberButton text="6" buttonStyle = "grey"/>
        <NumberButton text="-" buttonStyle= "red"/> 

        <NumberButton text="1" buttonStyle = "grey"/>
        <NumberButton text="2" buttonStyle = "grey"/>
        <NumberButton text="3" buttonStyle = "grey"/>
        <NumberButton text="+" buttonStyle= "red"/> 

      {/* <ActionButton /> */}
      <ActionButton text="0" buttonStyle= "white"/>

      <NumberButton text="=" buttonStyle= "red"/>
     
    </div>
  );
};

export default App;
