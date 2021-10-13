import React, { useCallback, useState, useEffect } from 'react';

import EmployeeListItem from './EmployeeListItem';
import PaginationButton from './PaginationButton';

const EmployeeList = () => {
    const [employeeList, setEmployeeList] = useState([]);
    const [page, setPage] = useState(0);

    const fetchEmployeeList = useCallback(async () => {
        const employeeListObj = await fetch(`http://localhost:8080/api/user/all?page=${page}`, {
            credentials: 'include',
            mode: 'cors'
        })
            .then(res => res.json())
            .catch(err => console.error(err))

        console.log(employeeListObj);

        setEmployeeList(employeeListObj.content)
    }, [page])

    useEffect(() => {
        // find page number in url param, and set it if exists
        const pageNum = window.location.search ? new URLSearchParams(window.location.search).get('page') : 0;
        setPage(pageNum);

        fetchEmployeeList()
    }, [fetchEmployeeList]);

    return (
        <>
            <section className="employee-list">
                { 
                    employeeList ? employeeList.map(el => 
                        <EmployeeListItem data={el}/>
                    ) : <div>No employees</div>
                }
            </section>
            <div>
                <PaginationButton pageState={{page, setPage}} dir="prev" />
                <PaginationButton pageState={{page, setPage}} dir="next"/>
            </div>
        </>
    );
}

export default EmployeeList;
