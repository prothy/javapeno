import React, {useCallback, useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Employee.css"
import * as PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import {numberFormat} from "../../util.js"
import {Button} from "react-bootstrap";

function EmployeeHeader() {
    return <h4 id="employeeHeader">Employee data</h4>;
}

function EditButton() {
    return <div id="editEmployeeButton">
        <Button variant="primary">Edit</Button>
    </div>;
}

function UserData(props) {
    return <Table striped bordered hover>
        <tbody>
        <tr>
            <td>Name</td>
            <td>{props.userData.name}</td>
        </tr>
        <tr>
            <td>Phone number</td>
            <td>{props.userData.phoneNumber}</td>
        </tr>
        <tr>
            <td>E-mail</td>
            <td>{props.userData.email}</td>
        </tr>
        <tr>
            <td>Address</td>
            <td><Address address={props.userData.address}/></td>
        </tr>
        <tr>
            <td>Salary</td>
            <td>{numberFormat(props.userData.salary)}</td>
        </tr>
        </tbody>
    </Table>;
}

function Address({address}) {
    if (address !== undefined && address !== null)
        return address.postalCode + " " + address.city + ", " + address.street + " " + address.houseNumber + ".";
    return "";
}

function ModifyButton() {
    return <div id="modifyEmployeeButton">
        <Button variant="primary">Modify data</Button>
    </div>;
}

let Employee = () => {
    let [userData, setData] = useState([]);
    const {userId} = useParams();

    let getUserURL = "http://localhost:8080/api/user/";

    let fetchEmployeeById = useCallback(async () => {
        let userData = await fetch(getUserURL + userId, {
            method: 'GET',
            credentials: 'include',
            mode: 'cors'
        })
            .then(res => res.json())
            .catch(err => console.error(err));
        setData(userData)
    }, [getUserURL, userId])

    useEffect(() => {
        fetchEmployeeById().catch(err => console.error(err));
    }, [fetchEmployeeById]);

    return (
        <div className="employee">
            <EmployeeHeader/>
            <EditButton/>
            <UserData userData={userData}/>
            <ModifyButton/>
        </div>
    );
};

UserData.propTypes = {userData: PropTypes.arrayOf(PropTypes.any)};

export default Employee;
