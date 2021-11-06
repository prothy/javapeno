import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeListItem = ({data, index}) => {
    return (
        <tr key={data.id}>
            <td>{index + 1}</td>
            <td>
                <Link to={`/employee/${data.id}`} key={data.id}>{data.name}</Link>
            </td>
        </tr>
    );
}

export default EmployeeListItem;
