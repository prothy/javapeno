import React from "react";
import {Button, Col, Form, FormControl, FormGroup, FormLabel, Row} from "react-bootstrap";

const EmployeeForm = () => {
    return (
        <Form>
            <FormGroup className={"mb-3"} controlId={"name"}>
                <FormLabel>Full name</FormLabel>
                <FormControl type={"text"} placeholder={"John Doe"}/>
            </FormGroup>
            <FormGroup className={"mb-3"} controlId={"phoneNumber"}>
                <FormLabel>Phone number</FormLabel>
                <FormControl type={"tel"} placeholder={"+36101234567"}/>
            </FormGroup>
            <FormGroup className={"mb-3"} controlId={"email"}>
                <FormLabel>Email</FormLabel>
                <FormControl type={"email"} placeholder={"john@doe.com"}/>
            </FormGroup>
            <Row>
                <Col >
                    <FormGroup className={"mb-3"} controlId={"country"}>
                        <FormLabel>Country</FormLabel>
                        <Form.Select>
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
                        <FormControl type={"text"} placeholder={"Budapest"}/>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className={"mb-3"} controlId={"postalCode"}>
                        <FormLabel>Zip</FormLabel>
                        <FormControl type={"text"} placeholder={"1234"}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    <FormGroup className={"mb-3"} controlId={"street"}>
                        <FormLabel>Address</FormLabel>
                        <FormControl type={"text"} placeholder={"Example street"}/>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className={"mb-3"} controlId={"houseNumber"}>
                        <FormLabel>House number</FormLabel>
                        <FormControl type={"number"} placeholder={"1"}/>
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup className={"mb-3"} controlId={"salary"}>
                <FormLabel>Salary</FormLabel>
                <FormControl type={"number"} placeholder={"10000"}/>
            </FormGroup>
            <FormGroup className={"mb-3"} controlId={"status"}>
                <FormLabel>Status</FormLabel>
                <Form.Select>
                    <option>ACTIVE</option>
                    <option>DELETED</option>
                    <option>HOLIDAY</option>
                    <option>SICK</option>
                </Form.Select>
            </FormGroup>
            <FormGroup className={"mb-3"} controlId={"privilege"}>
                <FormLabel>Privilege</FormLabel>
                <Form.Select>
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