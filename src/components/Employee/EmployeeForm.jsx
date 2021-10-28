import React, {useCallback, useEffect, useState} from "react";
import {Button, Col, Form, FormControl, FormGroup, FormLabel, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";

import "./EmployeeForm.css";

const EmployeeForm = (callback, deps) => {
    const [value, setValue] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        country: "Hungary",
        city: "",
        postalCode: "",
        street: "",
        houseNumber: "",
        salary: 0,
        status: "ACTIVE",
        privilege: "USER"
    })
    const history = useHistory();

    let formattedValue = {};
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        formattedValue = {
            name: value.name,
            phoneNumber: value.phoneNumber,
            email: value.email,
            address: {
                country: value.country,
                city: value.city,
                postalCode: value.postalCode,
                street: value.street,
                houseNumber: value.houseNumber,
            },
            salary: value.salary,
            status: value.status,
            privilege: value.privilege
        };
        console.log(formattedValue);
        fetchEmployeeForm(formattedValue);
    }

    const addUserURL = "http://localhost:8080/api/user/add";

    const fetchEmployeeForm = useCallback(async (formattedValue) => {
        let response = await fetch(addUserURL, {
            method: "POST",
            credentials: "include",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formattedValue)
        })
        history.push("/employees")

    }, [history])
    
    return (
        <Form onSubmitCapture={onSubmitHandler} className="employee-form">
            <div className="form-input-group">
                <h3>Personal info</h3>
                <div>
                    <FormGroup className={"mb-3 form-input"} controlId={"name"} >
                        <FormLabel>Full name</FormLabel>
                        <FormControl type={"text"}  placeholder={"John Doe"} onChange={(event => setValue({...value, name: event.target.value}))} />
                    </FormGroup>
                </div>
                <div>
                    <FormGroup className={"mb-3 form-input"} controlId={"phoneNumber"} >
                        <FormLabel>Phone number</FormLabel>
                        <FormControl type={"tel"} placeholder={"+36101234567"} onChange={(event => setValue({...value, phoneNumber: event.target.value}))}/>
                    </FormGroup>
                    <FormGroup className={"mb-3 form-input"} controlId={"email"}>
                        <FormLabel>Email</FormLabel>
                        <FormControl type={"email"} placeholder={"john@doe.com"} onChange={(event => setValue({...value, email: event.target.value}))}/>
                    </FormGroup>
                </div>
            </div>
            <div className="form-input-group address-group">
                <h3>Address</h3>
                <div>
                    <FormGroup className={"mb-3 form-input"} controlId={"country"}>
                        <FormLabel>Country</FormLabel>
                        <Form.Select onChange={(event => setValue({...value, country: event.target.value}))}>
                            <option>Hungary</option>
                            <option>Austria</option>
                            <option>Slovakia</option>
                            <option>Ukraine</option>
                            <option>Romania</option>
                            <option>Serbia</option>
                            <option>Croatia</option>
                            <option>Slovenia</option>
                            <option>Wakanda</option>
                        </Form.Select>
                    </FormGroup>
                </div>
                <div>
                    <FormGroup className={"mb-3 form-input"} controlId={"city"}>
                        <FormLabel>City</FormLabel>
                        <FormControl type={"text"} placeholder={"Budapest"} onChange={(event => setValue({...value, city: event.target.value}))}/>
                    </FormGroup>
                    <FormGroup className={"mb-3 form-input"} controlId={"postalCode"}>
                        <FormLabel>Zip</FormLabel>
                        <FormControl type={"text"} style={{ width: '4rem' }} placeholder={"1234"} onChange={(event => setValue({...value, postalCode: event.target.value}))}/>
                    </FormGroup>
                </div>
                <div>
                    <FormGroup className={"mb-3 form-input"} controlId={"street"}>
                        <FormLabel>Address</FormLabel>
                        <FormControl type={"text"} placeholder={"Example street"} onChange={(event => setValue({...value, street: event.target.value}))}/>
                    </FormGroup>
                    <FormGroup className={"mb-3 form-input"} controlId={"houseNumber"}>
                        <FormLabel>House number</FormLabel>
                        <FormControl type={"text"} style={{ width: '4rem' }} placeholder={"1"} onChange={(event => setValue({...value, houseNumber: event.target.value}))}/>
                    </FormGroup>
                </div>
            </div>
            <div className="form-input-group">
                <h3>Employee data</h3>
                <FormGroup className={"mb-3 form-input"} controlId={"salary"}>
                    <FormLabel>Salary</FormLabel>
                    <FormControl type={"number"} placeholder={"10000"} onChange={(event => setValue({...value, salary: event.target.value}))}/>
                </FormGroup>
                <div>
                    <FormGroup className={"mb-3 form-input"} controlId={"status"}>
                        <FormLabel>Status</FormLabel>
                        <Form.Select onChange={(event => setValue({...value, status: event.target.value}))}>
                            <option>ACTIVE</option>
                            <option>DELETED</option>
                            <option>HOLIDAY</option>
                            <option>SICK</option>
                        </Form.Select>
                    </FormGroup>
                    <FormGroup className={"mb-3 form-input"} controlId={"privilege"}>
                        <FormLabel>Privilege</FormLabel>
                        <Form.Select onChange={(event => setValue({...value, privilege: event.target.value}))}>
                            <option>USER</option>
                            <option>SUPER_USER</option>
                            <option>ADMIN</option>
                        </Form.Select>
                    </FormGroup>
                </div>
            </div>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default EmployeeForm;