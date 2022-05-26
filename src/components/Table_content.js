import React from 'react';
import {} from 'react-icons/fa'

const Table_Content = ({id, job_number, description, width, footage, press}) => {

    let btnStyle = {backgroundColor:"#FFF", color:"#ab1a2d", height:"30px", fontWeight: "bold", marginRight: "10px", padding: "0 10px"};

    return (
        <tr key={id}>
            <td>{job_number}</td>
            <td>{width}</td>
            <td>{description}</td>
            <td>{footage}</td>
            <td>{press}</td>
            <td>
                <button style={btnStyle}></button>
                <button style={btnStyle}>Delete</button>
            </td>
        </tr>
    )
}

export default Table_Content;