import React, {useState, useEffect} from 'react';
import {editBtn} from "./Functions"

const Content = () => {
    let isEditing = false;
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = "https://api.adviceslip.com/advice";

        const fetchData = async () => {
            const res = await fetch(
                'http://localhost:3005/AMPLE-API/stock-list',
            );
            const json = await res.json();
            setData(json.table_data);
        };

        fetchData();
    }, []);

    function btn(id){
        isEditing = !isEditing;
        editBtn(id)
    }

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
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.job_number}</td>
                        <td>{item.width}</td>
                        <td>{item.description}</td>
                        <td>{item.footage}</td>
                        <td>{item.press}</td>
                        <td>
                            {isEditing ?
                                <button id={item.id} onClick={btn}>Save</button>
                                :
                                <button id={item.id} onClick={btn}>Edit</button>
                            }
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    )
}

export default Content;
