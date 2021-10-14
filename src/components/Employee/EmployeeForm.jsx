import React, {useState} from "react";
import {Button, Col, Form, FormControl, FormGroup, FormLabel, Row} from "react-bootstrap";

const EmployeeForm = () => {
    const [value, setValue] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        country: "Hungary",
        city: "",
        postalCode: "",
        street: "",
        houseNumber: 0,
        salary: 0,
        status: "ACTIVE",
        privilege: "USER"
    })
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(value);
    }

    
    return (
        <Form onSubmitCapture={onSubmitHandler}>
            <FormGroup className={"mb-3"} controlId={"name"} >
                <FormLabel>Full name</FormLabel>
                <FormControl type={"text"}  placeholder={"John Doe"} onChange={(event => setValue({...value, name: event.target.value}))} />
            </FormGroup>
            <FormGroup className={"mb-3"} controlId={"phoneNumber"} >
                <FormLabel>Phone number</FormLabel>
                <FormControl type={"tel"} placeholder={"+36101234567"} onChange={(event => setValue({...value, phoneNumber: event.target.value}))}/>
            </FormGroup>
            <FormGroup className={"mb-3"} controlId={"email"}>
                <FormLabel>Email</FormLabel>
                <FormControl type={"email"} placeholder={"john@doe.com"} onChange={(event => setValue({...value, email: event.target.value}))}/>
            </FormGroup>
            <Row>
                <Col >
                    <FormGroup className={"mb-3"} controlId={"country"}>
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
                        </Form.Select>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className={"mb-3"} controlId={"city"}>
                        <FormLabel>City</FormLabel>
                        <FormControl type={"text"} placeholder={"Budapest"} onChange={(event => setValue({...value, city: event.target.value}))}/>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className={"mb-3"} controlId={"postalCode"}>
                        <FormLabel>Zip</FormLabel>
                        <FormControl type={"text"} placeholder={"1234"} onChange={(event => setValue({...value, postalCode: event.target.value}))}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    <FormGroup className={"mb-3"} controlId={"street"}>
                        <FormLabel>Address</FormLabel>
                        <FormControl type={"text"} placeholder={"Example street"} onChange={(event => setValue({...value, street: event.target.value}))}/>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className={"mb-3"} controlId={"houseNumber"}>
                        <FormLabel>House number</FormLabel>
                        <FormControl type={"number"} placeholder={"1"} onChange={(event => setValue({...value, houseNumber: event.target.value}))}/>
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup className={"mb-3"} controlId={"salary"}>
                <FormLabel>Salary</FormLabel>
                <FormControl type={"number"} placeholder={"10000"} onChange={(event => setValue({...value, salary: event.target.value}))}/>
            </FormGroup>
            <FormGroup className={"mb-3"} controlId={"status"}>
                <FormLabel>Status</FormLabel>
                <Form.Select onChange={(event => setValue({...value, status: event.target.value}))}>
                    <option>ACTIVE</option>
                    <option>DELETED</option>
                    <option>HOLIDAY</option>
                    <option>SICK</option>
                </Form.Select>
            </FormGroup>
            <FormGroup className={"mb-3"} controlId={"privilege"}>
                <FormLabel>Privilege</FormLabel>
                <Form.Select onChange={(event => setValue({...value, privilege: event.target.value}))}>
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