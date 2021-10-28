import React, {useCallback, useState} from "react";
import {Button, Col, Form, FormControl, FormGroup, FormLabel, Row} from "react-bootstrap";
import {useHistory, useLocation} from "react-router-dom";
import {fetchJsonDataPostIncludeCors} from "../Util/fetchData";

const EmployeeForm = (props, callback, deps) => {
    const location = useLocation();
    const userData = location.state?.userData;
    console.log(userData)
    const [value, setValue] = useState({
        id: userData?.id,
        name: userData?.name,
        phoneNumber: userData?.phoneNumber,
        email: userData?.email,
        country: userData?.address?.country,
        city: userData?.address?.city,
        postalCode: userData?.address?.postalCode,
        street: userData?.address?.street,
        houseNumber: userData?.address?.houseNumber,
        salary: userData?.salary,
        status: userData?.status,
        privilege: userData?.privilege
    });

    const history = useHistory();

    let formattedValue = {};
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        formattedValue = {
            id: value.id,
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
        fetchEmployeeForm(formattedValue).catch(err => console.error(err));
    }

    const addUserURL = "http://localhost:8080/api/user/add";
    const updateUserURL = "http://localhost:8080/api/user/update";

    const putEmployeeForm = useCallback(async (formattedValue) => {
        await fetchJsonDataPostIncludeCors(addUserURL, JSON.stringify(formattedValue))
            .then(() => {
                history.push("/employees");
            });
    }, [history])

    const postEmployeeForm = useCallback(async (formattedValue) => {
        await fetchJsonDataPostIncludeCors(addUserURL, JSON.stringify(formattedValue))
            .then(() => {
                history.push("/employees");
            });
    }, [history])

    return (
        <Form onSubmitCapture={onSubmitHandler} style={{marginBottom: "100px"}}>
            <FormGroup className={"mb-3"} controlId={"name"} >
                <FormLabel>Full name</FormLabel>
                <FormControl type={"text"}  placeholder={"John Doe"} value={value.name} onChange={(event => setValue({...value, name: event.target.value}))} />
            </FormGroup>
            <FormGroup className={"mb-3"} controlId={"phoneNumber"} >
                <FormLabel>Phone number</FormLabel>
                <FormControl type={"tel"} placeholder={"+36101234567"} value={value.phoneNumber} onChange={(event => setValue({...value, phoneNumber: event.target.value}))}/>
            </FormGroup>
            <FormGroup className={"mb-3"} controlId={"email"}>
                <FormLabel>Email</FormLabel>
                <FormControl type={"email"} placeholder={"john@doe.com"} value={value.email} onChange={(event => setValue({...value, email: event.target.value}))}/>
            </FormGroup>
            <Row>
                <Col >
                    <FormGroup className={"mb-3"} controlId={"country"}>
                        <FormLabel>Country</FormLabel>
                        <Form.Select defaultValue={value.country} onChange={(event => setValue({...value, country: event.target.value}))}>
                            <option unselectable={true}>Choose a country...</option>
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
                </Col>
                <Col>
                    <FormGroup className={"mb-3"} controlId={"city"}>
                        <FormLabel>City</FormLabel>
                        <FormControl type={"text"} placeholder={"Budapest"} value={value.city} onChange={(event => setValue({...value, city: event.target.value}))}/>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className={"mb-3"} controlId={"postalCode"}>
                        <FormLabel>Zip</FormLabel>
                        <FormControl type={"text"} placeholder={"1234"} value={value.postalCode} onChange={(event => setValue({...value, postalCode: event.target.value}))}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    <FormGroup className={"mb-3"} controlId={"street"}>
                        <FormLabel>Address</FormLabel>
                        <FormControl type={"text"} placeholder={"Example street"} value={value.street} onChange={(event => setValue({...value, street: event.target.value}))}/>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className={"mb-3"} controlId={"houseNumber"}>
                        <FormLabel>House number</FormLabel>
                        <FormControl type={"text"} placeholder={"1"} value={value.houseNumber} onChange={(event => setValue({...value, houseNumber: event.target.value}))}/>
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup className={"mb-3"} controlId={"salary"}>
                <FormLabel>Salary</FormLabel>
                <FormControl type={"number"} placeholder={"10000"} value={value.salary} onChange={(event => setValue({...value, salary: event.target.value}))}/>
            </FormGroup>
            <FormGroup className={"mb-3"} controlId={"status"}>
                <FormLabel>Status</FormLabel>
                <Form.Select defaultValue={value.status} onChange={(event => setValue({...value, status: event.target.value}))}>
                    <option unselectable={true}>Choose a status...</option>
                    <option>ACTIVE</option>
                    <option>DELETED</option>
                    <option>HOLIDAY</option>
                    <option>SICK</option>
                </Form.Select>
            </FormGroup>
            <FormGroup className={"mb-3"} controlId={"privilege"}>
                <FormLabel>Privilege</FormLabel>
                <Form.Select defaultValue={value.privilege} onChange={(event => setValue({...value, privilege: event.target.value}))}>
                    <option unselectable={true}>Choose a privilege...</option>
                    <option>USER</option>
                    <option>SUPER_USER</option>
                    <option>ADMIN</option>
                </Form.Select>
            </FormGroup>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default EmployeeForm;