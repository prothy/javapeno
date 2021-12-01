import React, {useCallback, useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';

import EmployeeListItem from './EmployeeListItem';
import SearchBar from '../Util/SearchBar';
import {PagerButtons} from "../../util";
import "./EmployeeList.css"
import { AuthorizationError } from '../Util/errors';
import { useHistory } from 'react-router';


function EmployeesHeader() {
    return <h4 id="employeesHeader">Employees</h4>;
}

const EmployeeList = () => {
    const history = useHistory()

    const [responseObj, setResponsObj] = useState({})
    const [employeeList, setEmployeeList] = useState([]);
    const [filteredEmployeeList, setFilteredEmployeeList] = useState([])

    const [page, setPage] = useState(0);
    const [maxPage, setMaxPage] = useState(0);

    const fetchEmployeeList = useCallback(async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/user/all?page=${page}`, {
                credentials: 'include',
                mode: 'cors'
            })
            
            if (response.status !== 200) throw new AuthorizationError();

            const employeeListObj = await response.json()

            setMaxPage(employeeListObj.totalPages - 1)
            setEmployeeList(employeeListObj.content)
            setFilteredEmployeeList(employeeListObj.content)
    
            setResponsObj(employeeListObj)

        } catch (err) {
            console.error(err)
            history.push('/?unauthorized')
        }
    }, [page, history])

    const filterEmployeeList = (searchValue) => {
        setFilteredEmployeeList(employeeList.filter(
            el => el.name.toLowerCase().includes(searchValue.toLowerCase())
        ))
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
            <PagerButtons page={page} page1={setPage} maxPage={maxPage} />
            <div className="showText">Showing
                users {parseInt((responseObj.size * responseObj.number) + 1)} - {parseInt((responseObj.size * responseObj.number) + responseObj.numberOfElements)} out
                of {parseInt(responseObj.totalElements)}</div>
            <div className="employees">
                <SearchBar searchByName={filterEmployeeList} />
                <Table className="employee-list table-hover table-fixed" striped >
                    <thead>
                    <tr>
                        <th style={{width: '5rem'}}>#</th>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        filteredEmployeeList ?
                        filteredEmployeeList.map((el, index) =>
                            <EmployeeListItem data={el} index={index + page * 20}/>
                        ) : (
                            <tr>
                                <td colSpan="2">No employees</td>
                            </tr>)
                    }
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default EmployeeList;
