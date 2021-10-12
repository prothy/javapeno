import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

let Employee = () => {

    let [userData, setData] = useState([]);

    let emptyArray;
    useEffect(() => {
        fetch(
            "http://localhost:8080/api/user/8cb3a14a-e68e-f902-badb-3e9877e6b330", {
                method: 'GET',
                credentials: 'include',
                mode: 'cors'
            })
            .then((res) => res.json())
            .then((json) => {
                setData(json);
            })
    }, [emptyArray]);

    return (
        <div className="employee">
            <Table striped bordered hover>
                <tbody>
                <tr>
                    <td>Name</td>
                    <td>{userData.name}</td>
                </tr>
                <tr>
                    <td>Phone number</td>
                    <td>{userData.phoneNumber}</td>
                </tr>
                <tr>
                    <td>E-mail</td>
                    <td>{userData.email}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    {/*<td>a</td>*/}
                    <td>{userData.address.street}</td>
                </tr>
                <tr>
                    <td>Salary</td>
                    <td>{userData.salary} Ft</td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Employee;