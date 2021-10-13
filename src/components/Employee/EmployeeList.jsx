import React, { useCallback, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import EmployeeListItem from './EmployeeListItem';
import PaginationButton from './PaginationButton';

const EmployeeList = () => {
    const [employeeList, setEmployeeList] = useState([]);
    const [page, setPage] = useState(0);
    const [maxPage, setMaxPage] = useState(0);

    const fetchEmployeeList = useCallback(async () => {
        const employeeListObj = await fetch(`http://localhost:8080/api/user/all?page=${page}`, {
            credentials: 'include',
            mode: 'cors'
        })
            .then(res => res.json())
            .catch(err => console.error(err))

        console.log(employeeListObj);

        setMaxPage(employeeListObj.totalPages - 1)
        setEmployeeList(employeeListObj.content)
    }, [page])

    useEffect(() => {
        // find page number in url param, and set it if exists
        const pageNum = window.location.search ? new URLSearchParams(window.location.search).get('page') : 0;
        setPage(parseInt(pageNum));

        fetchEmployeeList()
    }, [fetchEmployeeList]);

    return (
        <>
            <div>
                <PaginationButton pageState={{page, setPage, maxPage}} dir="prev" />
                <PaginationButton pageState={{page, setPage, maxPage}} dir="next"/>
            </div>
            <Table className="employee-list" striped>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                { 
                    employeeList ? employeeList.map(el => <EmployeeListItem data={el}/>
                        
                    ) : <tr><td>No employees</td></tr>
                }
                </tbody>
            </Table>
        </>
    );
}

export default EmployeeList;
