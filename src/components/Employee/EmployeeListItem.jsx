import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeListItem = ({data}) => {
    return (
        <tr key={data.id}>
            <td>
                <Link to={`/employee/${data.id}`} key={data.id}>{data.name}</Link>
            </td>
        </tr>
    );
}

export default EmployeeListItem;
