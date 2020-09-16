import React from 'react';
import './CalcDisplay.css'

function CalcDisplay({ state, firstNum, math }) {
    console.log('state: ' + state)
    console.log('firstNum: ' + firstNum)
    console.log('math: ' + math)
    return (
        <div className='CalcDisplay'>{state.length !== 0 ? state : 0}</div>
    );
}

export default CalcDisplay;