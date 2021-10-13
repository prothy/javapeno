import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeListItem = ({data}) => {
    return (
        <Link to={`/employee/${data.id}`} key={data.id}>{data.name}</Link>
    );
}

export default EmployeeListItem;
