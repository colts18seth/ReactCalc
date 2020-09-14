import React from 'react';
import Calc_Input from 'Calc_Input';

function Calc_Buttons() {
    return (
        <table className="Calc_Buttons">
            <thead><Calc_Input /></thead>
            <tbody>
                <tr className='topRow'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="rightCol"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="rightCol"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="rightCol"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="rightCol"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="rightCol"></td>
                </tr>
            </tbody>
        </table>
    );
}

export default Calc_Buttons;