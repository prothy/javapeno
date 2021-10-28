import React, {useCallback, useState} from "react";
import {Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {fetchJsonDataPostIncludeCors} from "../Util/fetchData";
import Table from "react-bootstrap/Table";
import "./EmployeeForm.css"

function EmployeeFormHeader() {
    return <h4 id="employeeFormHeader">Add new employee</h4>;
}

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
        fetchEmployeeForm(formattedValue).catch(err => console.error(err));
    }

    const addUserURL = "http://localhost:8080/api/user/add";

    const fetchEmployeeForm = useCallback(async (formattedValue) => {
        await fetchJsonDataPostIncludeCors(
            addUserURL, JSON.stringify(formattedValue))
            .then(res => console.log(res))
            .then(() => history.push("/employees"));
    }, [history])

    return (
        <div className={'employeeForm'}>
            <EmployeeFormHeader/>
            <Form onSubmitCapture={onSubmitHandler} style={{marginBottom: "100px"}}>
                <Table striped bordered hover>
                    <tbody>
                    <tr>
                        <th id={'submitNewEmployeeRow'} colSpan={3}>Personal info</th>
                    </tr>
                    <tr>
                        <td>
                            <FormGroup className={"mb-3"} controlId={"name"}>
                                <FormLabel>Full name</FormLabel>
                                <FormControl type={"text"} placeholder={"John Doe"}
                                             onChange={(event => setValue({...value, name: event.target.value}))}/>
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup className={"mb-3"} controlId={"phoneNumber"}>
                                <FormLabel>Phone number</FormLabel>
                                <FormControl type={"tel"} placeholder={"+36101234567"}
                                             onChange={(event => setValue({
                                                 ...value,
                                                 phoneNumber: event.target.value
                                             }))}/>
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup className={"mb-3"} controlId={"email"}>
                                <FormLabel>Email</FormLabel>
                                <FormControl type={"email"} placeholder={"john@doe.com"}
                                             onChange={(event => setValue({...value, email: event.target.value}))}/>
                            </FormGroup>
                        </td>
                    </tr>
                    <tr>
                        <th id={'submitNewEmployeeRow'} colSpan={3}>Address</th>
                    </tr>
                    <tr>
                        <td>
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
                                    <option>Wakanda</option>
                                </Form.Select>
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup className={"mb-3"} controlId={"city"}>
                                <FormLabel>City</FormLabel>
                                <FormControl type={"text"} placeholder={"Budapest"}
                                             onChange={(event => setValue({...value, city: event.target.value}))}/>
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup className={"mb-3"} controlId={"postalCode"}>
                                <FormLabel>Zip</FormLabel>
                                <FormControl type={"text"} placeholder={"1234"}
                                             onChange={(event => setValue({
                                                 ...value,
                                                 postalCode: event.target.value
                                             }))}/>
                            </FormGroup>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <FormGroup className={"mb-3"} controlId={"street"}>
                                <FormLabel>Address</FormLabel>
                                <FormControl type={"text"} placeholder={"Example street"}
                                             onChange={(event => setValue({...value, street: event.target.value}))}/>
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup className={"mb-3"} controlId={"houseNumber"}>
                                <FormLabel>House number</FormLabel>
                                <FormControl type={"text"} placeholder={"1"}
                                             onChange={(event => setValue({
                                                 ...value,
                                                 houseNumber: event.target.value
                                             }))}/>
                            </FormGroup>
                        </td>
                    </tr>
                    <tr>
                        <th id={'submitNewEmployeeRow'} colSpan={3}>Employee data</th>
                    </tr>
                    <tr>
                        <td>
                            <FormGroup className={"mb-3"} controlId={"salary"}>
                                <FormLabel>Salary</FormLabel>
                                <FormControl type={"number"} placeholder={"10000"}
                                             onChange={(event => setValue({...value, salary: event.target.value}))}/>
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup className={"mb-3"} controlId={"status"}>
                                <FormLabel>Status</FormLabel>
                                <Form.Select onChange={(event => setValue({...value, status: event.target.value}))}>
                                    <option>ACTIVE</option>
                                    <option>DELETED</option>
                                    <option>HOLIDAY</option>
                                    <option>SICK</option>
                                </Form.Select>
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup className={"mb-3"} controlId={"privilege"}>
                                <FormLabel>Privilege</FormLabel>
                                <Form.Select onChange={(event => setValue({...value, privilege: event.target.value}))}>
                                    <option>USER</option>
                                    <option>SUPER_USER</option>
                                    <option>ADMIN</option>
                                </Form.Select>
                            </FormGroup>
                        </td>
                    </tr>
                    <tr>
                        <td id={'submitNewEmployeeRow'} colSpan={3}>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Form>
        </div>
    )
} 

export default EmployeeForm;