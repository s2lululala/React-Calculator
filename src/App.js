import React from 'react';
import './App.css';

class App extends React.Component {
    state = {
        input: '',
        results: []
    }
    handlingAdd = (value) => {
        this.setState({input: this.state.input + value});
    }
    handlingClear = () => {
        this.setState({input: ''});
    }
    handlingEval = () => {
        const _input = this.state.input;
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
        let _results = this.state.results;
        _results.push(this.state.input+"="+output);
        this.setState({input: output, results: _results});
        console.log(this.state.results)
    }
    render() {
        return (
        <div className="App">
            <div className="container">
                <div className="main">
                    <div className="row"><input className="show" type="text" value={this.state.input} readOnly/></div>
                    <div className="row">
                        <button onClick={() => {this.handlingClear()}} className="clear">AC</button>
                        <button onClick={() => {this.handlingAdd('/')}} className="normal symbol">&divide;</button>
                    </div>
                    <div className="row">
                        <button onClick={() => {this.handlingAdd('7')}} className="normal">7</button>
                        <button onClick={() => {this.handlingAdd('8')}} className="normal">8</button>
                        <button onClick={() => {this.handlingAdd('9')}} className="normal">9</button>
                        <button onClick={() => {this.handlingAdd('*')}} className="normal symbol">x</button>
                    </div>
                    <div className="row">
                        <button onClick={() => {this.handlingAdd('4')}} className="normal">4</button>
                        <button onClick={() => {this.handlingAdd('5')}} className="normal">5</button>
                        <button onClick={() => {this.handlingAdd('6')}} className="normal">6</button>
                        <button onClick={() => {this.handlingAdd('-')}} className="normal symbol">-</button>
                    </div>
                    <div className="row">
                        <button onClick={() => {this.handlingAdd('1')}} className="normal">1</button>
                        <button onClick={() => {this.handlingAdd('2')}} className="normal">2</button>
                        <button onClick={() => {this.handlingAdd('3')}} className="normal">3</button>
                        <button onClick={() => {this.handlingAdd('+')}} className="normal symbol">+</button>
                    </div>
                    <div className="row">
                        <button onClick={() => {this.handlingAdd('0')}} className="half">0</button>
                        <button onClick={() => {this.handlingAdd('.')}} className="normal">.</button>
                        <button onClick={() => {this.handlingEval()}} className="normal symbol">=</button>
                    </div>
                </div>
                <div className="results">
                    <div className="results_title symbol">결과</div>
                    <div className="results_list"> {this.state.results.map((result, index) => <div className="results_element" key={index}>{result}</div>)}</div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;
