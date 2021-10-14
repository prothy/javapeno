import React, {useCallback, useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';

import EmployeeListItem from './EmployeeListItem';
import SearchBar from '../Util/SearchBar';
import {PagerButtons} from "../../util";
import "./EmployeeList.css"


function EmployeesHeader() {
    return <h4 id="employeesHeader">Employees</h4>;
}

const EmployeeList = () => {
    const [employeeList, setEmployeeList] = useState([]);
    const [filteredEmployeeList, setFilteredEmployeeList] = useState([])

    const [page, setPage] = useState(0);
    const [maxPage, setMaxPage] = useState(0);

    const [responseObj, setResponsObj] = useState({})

    const fetchEmployeeList = useCallback(async () => {
        const employeeListObj = await fetch(`http://localhost:8080/api/user/all?page=${page}`, {
            credentials: 'include',
            mode: 'cors'
        })
            .then(res => res.json())
            .catch(err => console.error(err))

        setMaxPage(employeeListObj.totalPages - 1)
        setEmployeeList(employeeListObj.content)
        setFilteredEmployeeList(employeeListObj.content)

        setResponsObj(employeeListObj)
    }, [page])

    const filterResponseObjByVal = (searchValue) => {
        setFilteredEmployeeList(employeeList.filter(el => el.name.toLowerCase().includes(searchValue.toLowerCase())))
    }

    useEffect(() => {
        // find page number in url param, and set it if exists
        const pageNum = window.location.search ? new URLSearchParams(window.location.search).get('page') : 0;
        setPage(parseInt(pageNum));

        fetchEmployeeList()
            .catch(err => console.error(err))
    }, [fetchEmployeeList]);

    return (
        <>
            <EmployeesHeader/>
            <SearchBar searchByName={filterResponseObjByVal} />
            <PagerButtons page={page} page1={setPage} maxPage={maxPage}/>
            <div className="showText">Showing
                users {parseInt((responseObj.size * responseObj.number) + 1)} - {parseInt((responseObj.size * responseObj.number) + responseObj.numberOfElements)} out
                of {parseInt(responseObj.totalElements)}</div>
            <div className="employees">
                <Table className="employee-list" striped>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        filteredEmployeeList ? filteredEmployeeList.map((el, index) => <EmployeeListItem data={el} index={index}/>
                        ) : <tr>
                            <td colSpan="2">No employees</td>
                        </tr>
                    }
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default EmployeeList;
