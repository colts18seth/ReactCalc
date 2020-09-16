import React, { useState } from 'react';
import CalcDisplay from './CalcDisplay';
import './CalcButtons.css';

function CalcButtons() {
    const [state, setState] = useState([]);
    const [firstNum, setFirstNum] = useState(null);
    const [math, setMath] = useState(null);

    const handleNum = (e) => {
        if (math) {
            setFirstNum(state);
            setState([])
        }
        state.length !== 0
            ? setState([state + e.target.innerHTML])
            : setState([e.target.innerHTML])
    }

    const handleMath = (e) => {
        setMath(e.target.innerHTML);
    }

    const handleEqual = (e) => {

    }

    const handleNeg = (e) => {

    }

    const handleClear = () => {
        setState([])
    }

    return (
        <table className="CalcButtons">

            <tbody>
                <tr>
                    <td className='CalcDisplay' colSpan="4"><CalcDisplay state={state} firstNum={firstNum} math={math} /></td>
                </tr>
                <tr>
                    <td className='topRow' onClick={handleClear}>AC</td>
                    <td className='topRow'>+/-</td>
                    <td className='topRow'>%</td>
                    <td className="rightCol" onClick={handleMath}>÷</td>
                </tr>
                <tr>
                    <td onClick={handleNum}>7</td>
                    <td onClick={handleNum}>8</td>
                    <td onClick={handleNum}>9</td>
                    <td className="rightCol" onClick={handleMath}>x</td>
                </tr>
                <tr>
                    <td onClick={handleNum}>4</td>
                    <td onClick={handleNum}>5</td>
                    <td onClick={handleNum}>6</td>
                    <td className="rightCol" onClick={handleMath}>-</td>
                </tr>
                <tr>
                    <td onClick={handleNum}>1</td>
                    <td onClick={handleNum}>2</td>
                    <td onClick={handleNum}>3</td>
                    <td className="rightCol" onClick={handleMath}>+</td>
                </tr>
                <tr>
                    <td colSpan='2' onClick={handleNum}>0</td>
                    <td>.</td>
                    <td className="rightCol">=</td>
                </tr>
            </tbody>
        </table>
    );
}

export default CalcButtons;