import React, {useCallback, useContext, useEffect, useState} from "react";
import {Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {useHistory, useLocation} from "react-router-dom";
import {fetchJsonDataPostIncludeCors, fetchJsonDataPutIncludeCors} from "../Util/fetchData";
import Table from "react-bootstrap/Table";
import "./EmployeeForm.css"
import {AuthorizationError} from "../Util/errors";
import {UserContext} from "../../context/LoginContext";

function EmployeeFormHeader({isEdit}) {
    if (isEdit) {
        return <h4 id="employeeFormHeader">Edit employee</h4>;
    }
    return <h4 id="employeeFormHeader">Add new employee</h4>;

}

const EmployeeForm = (props) => {
    const addUserURL = process.env.REACT_APP_SERVER_URL + "/api/user/add";
    const updateUserURL = process.env.REACT_APP_SERVER_URL + "/api/user/update";
    const [user,] = useContext(UserContext)
    const location = useLocation();
    const userData = location.state?.userData;
    const history = useHistory();
    let formattedValue = {};

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

        if (props.isEdit) {
            putEmployeeForm(formattedValue).catch(err => console.error(err));
        } else {
            postEmployeeForm(formattedValue).catch(err => console.error(err));
        }

    }

    const putEmployeeForm = useCallback(async (formattedValue) => {
        await fetchJsonDataPutIncludeCors(updateUserURL, JSON.stringify(formattedValue))
            .then(res => console.log(res));
        history.push("/employees");
    }, [history])

    const postEmployeeForm = useCallback(async (formattedValue) => {
        await fetchJsonDataPostIncludeCors(addUserURL, JSON.stringify(formattedValue))
            .then(res => console.log(res));
        history.push("/employees");
    }, [history])

    const validateAuthorization = async () => {
        try {
            const response = await fetch(addUserURL, {
                credentials: 'include'
            })
            if (response.status === 403) throw new AuthorizationError()
        } catch (e) {
            console.log(e);
            if (user.username === undefined)
                history.push("/?unauthorized");
            else
                history.push("/");
        }
    }

    useEffect(() => {
        validateAuthorization()
    })


    return (
        <div className={'employeeForm'}>
            <EmployeeFormHeader isEdit={props.isEdit}/>
            <Form onSubmitCapture={onSubmitHandler} style={{marginBottom: "100px"}}>
                <Table>
                    <tbody>
                    <tr>
                        <th className="form-group-header" colSpan={3}>Personal info</th>
                    </tr>
                    <tr>
                        <td>
                            <FormGroup className={"mb-3"} controlId={"name"}>
                                <FormLabel className={"required"}>Full name</FormLabel>
                                <FormControl type={"text"} value={value.name} placeholder={"John Doe"} required
                                             readOnly={props.isEdit}
                                             onChange={(event => setValue({...value, name: event.target.value}))}/>
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup className={"mb-3"} controlId={"phoneNumber"}>
                                <FormLabel className={"required"}>Phone number</FormLabel>
                                <FormControl type={"tel"} value={value.phoneNumber} placeholder={"+36101234567"}
                                             required
                                             onChange={(event => setValue({
                                                 ...value,
                                                 phoneNumber: event.target.value
                                             }))}/>
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup className={"mb-3"} controlId={"email"}>
                                <FormLabel className={"required"}>Email</FormLabel>
                                <FormControl type={"email"} value={value.email} placeholder={"john@doe.com"} required
                                             readOnly={props.isEdit}
                                             onChange={(event => setValue({...value, email: event.target.value}))}/>
                            </FormGroup>
                        </td>
                    </tr>
                    <tr>
                        <th className="form-group-header caption" colSpan={3}>Address</th>
                    </tr>
                    <tr>
                        <td>
                            <FormGroup className={"mb-3"} controlId={"country"}>
                                <FormLabel className={"required"}>Country</FormLabel>
                                <Form.Select defaultValue={value.country}
                                             onChange={(event => setValue({...value, country: event.target.value}))}>
                                    <option unselectable={true}>Choose a country...</option>
                                    <option value={"hungary"}>Hungary</option>
                                    <option value={"germany"}>Germany</option>
                                    <option value={"french"}>French</option>
                                    <option value={"austria"}>Austria</option>
                                    <option value={"slovakia"}>Slovakia</option>
                                    <option value={"ukraine"}>Ukraine</option>
                                    <option value={"romania"}>Romania</option>
                                    <option value={"serbia"}>Serbia</option>
                                    <option value={"croatia"}>Croatia</option>
                                    <option value={"slovenia"}>Slovenia</option>
                                    <option value={"poland"}>Poland</option>
                                </Form.Select>
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup className={"mb-3"} controlId={"city"}>
                                <FormLabel className={"required"}>City</FormLabel>
                                <FormControl type={"text"} value={value.city} placeholder={"Budapest"} required
                                             onChange={(event => setValue({...value, city: event.target.value}))}/>
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup className={"mb-3"} controlId={"postalCode"}>
                                <FormLabel className={"required"}>Zip</FormLabel>
                                <FormControl type={"text"} value={value.postalCode} placeholder={"1234"} required
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
                                <FormLabel className={"required"}>Address</FormLabel>
                                <FormControl type={"text"} value={value.street} placeholder={"Example street"} required
                                             onChange={(event => setValue({...value, street: event.target.value}))}/>
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup className={"mb-3"} controlId={"houseNumber"}>
                                <FormLabel className={"required"}>House number</FormLabel>
                                <FormControl type={"text"} value={value.houseNumber} placeholder={"1"} required
                                             onChange={(event => setValue({
                                                 ...value,
                                                 houseNumber: event.target.value
                                             }))}/>
                            </FormGroup>
                        </td>
                    </tr>
                    <tr>
                        <th className="form-group-header caption" colSpan={3}>Employee data</th>
                    </tr>
                    <tr>
                        <td>
                            <FormGroup className={"mb-3"} controlId={"salary"}>
                                <FormLabel className={"required"}>Salary</FormLabel>
                                <FormControl type={"number"} value={value.salary} placeholder={"10000"} required min={0}
                                             onChange={(event => setValue({...value, salary: event.target.value}))}/>
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup className={"mb-3"} controlId={"status"}>
                                <FormLabel className={"required"}>Status</FormLabel>
                                <Form.Select defaultValue={value.status}
                                             onChange={(event => setValue({...value, status: event.target.value}))}>
                                    <option unselectable={true}>Choose a status...</option>
                                    <option value={"ACTIVE"}>Active</option>
                                    <option value={"DELETED"}>Deleted</option>
                                    <option value={"HOLIDAY"}>Holiday</option>
                                    <option value={"SICK"}>Sick</option>
                                </Form.Select>
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup className={"mb-3"} controlId={"privilege"}>
                                <FormLabel className={"required"}>Privilege</FormLabel>
                                <Form.Select defaultValue={value.privilege}
                                             onChange={(event => setValue({...value, privilege: event.target.value}))}>
                                    <option unselectable={true}>Choose a privilege...</option>
                                    <option value={"USER"}>User</option>
                                    <option value={"SUPER_USER"}>Super user</option>
                                    <option value={"ADMIN"}>Admin</option>
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