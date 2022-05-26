import React, {useState, useEffect} from 'react';
import Table_Content from "./Table_content"

const Content = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch(
                'http://localhost:3005/AMPLE-API/stock-list',
            );
            const json = await res.json();
            setData(json.table_data);
        };

        fetchData();
    }, []);



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
                {
                     data.map(item => (
                         <Table_Content
                             id={item.id}
                             job_number={item.job_number}
                             width={item.width}
                             description={item.description}
                             footage={item.footage}
                             press={item.press}
                         />
                    ))
                }
                </tbody>
            </table>

        </div>
    )
}

export default Content;