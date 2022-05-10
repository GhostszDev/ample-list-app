import React from 'react';
import Options from "./Options";

const Content = () => {
    return (
        <div className='Content'>

            <ul className='Content-Search'>
                <li><input type='text' placeholder='Job Number'/></li>
                <li><input type='text' placeholder='Width'/></li>
                <li><input type='text' placeholder='Description'/></li>
                <li><input type='text' placeholder='Footage'/></li>
                <li>
                    <select>
                        <option value='' disabled>Press</option>
                        <option value='P7'>P7</option>
                        <option value='P6'>P6</option>
                        <option value='2202'>2202</option>
                        <option value='2204'>2204</option>
                        <option value='2210'>2210</option>
                        <option value='Indigo'>Indigo</option>
                        <option value='Screen'>Screen</option>
                    </select>
                </li>
                <li><button type='button'>Search</button></li>
            </ul>

            <table className='Content-Table'>
                <thead>
                    <tr>
                        <th>Job Number</th>
                        <th>Width</th>
                        <th>Description</th>
                        <th>Footage</th>
                        <th>Press</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>84152</td>
                        <td>13</td>
                        <td>Ample Labels</td>
                        <td>35000</td>
                        <td>P7</td>
                        <td><Options></Options></td>
                    </tr>
                    <tr>
                        <td>85232</td>
                        <td>7</td>
                        <td>Amazon</td>
                        <td>7500</td>
                        <td>2204</td>
                        <td><Options></Options></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Content;
