import React, {useState} from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  function handlingAdd(e) {
    setInput(input + e);
  }
  function handlingClear() {
    setInput('');
  }
  function handlingEval() {
    const _input = input;
    if (isNaN(_input.charAt(_input.length - 1)))
    {
        console.log("expression is not completed")
        return;
    }
    const output = eval(_input);
    if (output === undefined)
    {
        console.log("Undefined!!")
        return;
    }
    let _results = results;
    _results.push(input+"="+output);
    setInput(output);
    setResults(_results);
    console.log(results)
  }
  return (
    <div className="container">
      <div className="main">
          <div className="row"><input className="show" type="text" value={input} readOnly/></div>
          <div className="row">
              <button onClick={() => {handlingClear()}} className="clear">AC</button>
              <button onClick={() => {handlingAdd('/')}} className="normal symbol">&divide;</button>
          </div>
          <div className="row">
              <button onClick={() => {handlingAdd('7')}} className="normal">7</button>
              <button onClick={() => {handlingAdd('8')}} className="normal">8</button>
              <button onClick={() => {handlingAdd('9')}} className="normal">9</button>
              <button onClick={() => {handlingAdd('*')}} className="normal symbol">x</button>
          </div>
          <div className="row">
              <button onClick={() => {handlingAdd('4')}} className="normal">4</button>
              <button onClick={() => {handlingAdd('5')}} className="normal">5</button>
              <button onClick={() => {handlingAdd('6')}} className="normal">6</button>
              <button onClick={() => {handlingAdd('-')}} className="normal symbol">-</button>
          </div>
          <div className="row">
              <button onClick={() => {handlingAdd('1')}} className="normal">1</button>
              <button onClick={() => {handlingAdd('2')}} className="normal">2</button>
              <button onClick={() => {handlingAdd('3')}} className="normal">3</button>
              <button onClick={() => {handlingAdd('+')}} className="normal symbol">+</button>
          </div>
          <div className="row">
              <button onClick={() => {handlingAdd('0')}} className="half">0</button>
              <button onClick={() => {handlingAdd('.')}} className="normal">.</button>
              <button onClick={() => {handlingEval()}} className="normal symbol">=</button>
          </div>
      </div>
      <div className="results">
          <div className="results_title symbol">결과</div>
          <div className="results_list"> {results.map((result, index) => <div className="results_element" key={index}>{result}</div>)}</div>
      </div>
  </div>
  )
}

export default Calculator;