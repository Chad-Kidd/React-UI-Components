import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import './components/ButtonComponents/NumberButton';
import './components/DisplayComponents/CalculatorDisplay';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div>
      {/* <h3>Welcome to React Calculator</h3> */}
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
      {/* <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p> */}
    </div>
  );
};

export default App;
