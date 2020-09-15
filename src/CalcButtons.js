import React, { useState } from 'react';
import CalcInput from './CalcInput';
import './CalcButtons.css';

function CalcButtons() {
    const [state, setState] = useState(null);

    const handleNum = () => {

    }

    const handleMath = () => {

    }

    const handleEqual = () => {

    }

    const handleNeg = () => {

    }

    const handleClear = () => {

    }

    return (
        <table className="CalcButtons">

            <tbody>
                <tr>
                    <td className='CalcInput' colSpan="4"><CalcInput /></td>
                </tr>
                <tr>
                    <td className='topRow'>AC/C</td>
                    <td className='topRow'>+/-</td>
                    <td className='topRow'>%</td>
                    <td className="rightCol">÷</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td className="rightCol">x</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td className="rightCol">-</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td className="rightCol">+</td>
                </tr>
                <tr>
                    <td colSpan='2'>0</td>
                    <td>.</td>
                    <td className="rightCol">=</td>
                </tr>
            </tbody>
        </table>
    );
}

export default CalcButtons;