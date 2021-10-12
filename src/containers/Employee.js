import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Body from "./Body";

let Employee = () => {
    /*
    const [items, setData] = useState([]);

    // Similar to componentDidMount and componentDidUpdate:
    try{
        useEffect(() => {fetch(
            "http://localhost:8080/api/user/8cb3a14a-e68e-f902-badb-3e9877e6b330", {
                method: 'GET',
                credentials: 'same-origin'
            })
            .then((res) => res.json())
            .then((json) => {
                setData(json);
            })
        });
    }catch (e) {
        console.log("No senor fetch nem lenni")
    }
    */

    let header = ['Name', 'Phone number', 'E-mail', 'Address', 'Salary']
    let body = [['Name', 'Phone number', 'E-mail', 'Address', 'Salary']]
    return (
        <div className="employee">
            <Table striped bordered hover>
                <Header header={header}/>
                <Body body={body}/>
            </Table>
        </div>
    );
};

export default Employee;