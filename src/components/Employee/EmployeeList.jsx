import React, { useCallback, useState, useEffect } from 'react';
import Employeelistitem from './EmployeeListItem';

const EmployeeList = () => {
    const [employeeList, setEmployeeList] = useState([]);

    const fetchEmployeeList = useCallback(async () => {
        const employeeListObj = await fetch('http://localhost:8080/api/user/all', {
            credentials: 'include',
            mode: 'cors'
        })
            .then(res => res.json())
            .catch(err => console.error(err))

        setEmployeeList(employeeListObj)
    }, [])

    useEffect(() => {
        fetchEmployeeList()
    }, [fetchEmployeeList]);

    return (
        <>
            { employeeList ? employeeList.map(el => 
                <Employeelistitem data={el}/>
            ) : <div>No employees</div>}
        </>
    );
}

export default EmployeeList;
