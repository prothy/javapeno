import React, {useCallback, useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Employee.css"
import * as PropTypes from "prop-types";

function EmployeeHeader() {
    return <h4 id="employeeHeader">User data</h4>;
}

function EditButton() {
    return <div id="editEmployeeButton">
        <button>Edit</button>
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
            <td>{props.userData.salary} Ft</td>
        </tr>
        </tbody>
    </Table>;
}

function Address({address}) {
    if (address !== undefined)
        return address.postalCode + " " + address.city + ", " + address.street + " " + address.houseNumber + ".";
    return "";
}

function ModifyButton() {
    return <div id="modifyEmployeeButton">
        <button>Modify data</button>
    </div>;
}

let Employee = () => {
    let [userData, setData] = useState([]);
    // let getUserURL = "http://localhost:8080/api/user/";
    // let userID = "8cb3a14a-e68e-f902-badb-3e9877e6b330";

    let fetchEmployeeById = useCallback(async () => {
        let userData = await fetch("http://localhost:8080/api/user/8cb3a14a-e68e-f902-badb-3e9877e6b330", {
            method: 'GET',
            credentials: 'include',
            mode: 'cors'
        })
            .then(res => res.json())
            .catch(err => console.error(err));
        setData(userData)
    }, [])

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
