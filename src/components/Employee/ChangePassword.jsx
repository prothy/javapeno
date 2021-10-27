import React, {useCallback, useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import {useHistory, useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ChangePassword.css"
import {Button, Form, FormControl, FormLabel} from "react-bootstrap";
import showPwdImg from '../../images/show-password.png';
import hidePwdImg from '../../images/hide-password.png';

function ChangePasswordHeader() {
    return <h4 id="changePasswordHeader">Change your password</h4>;
}

let ChangePassword = () => {
    const changeUserPasswordURL = "http://localhost:8080/api/user/change-password";
    const getUserURL = "http://localhost:8080/api/user/";
    const [userData, setData] = useState([]);
    const {userId} = useParams();
    const history = useHistory();

    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [isRevealPwd2, setIsRevealPwd2] = useState(false);
    const [value, setValue] = useState({
        email: userData.email,
        password: "",
        confirm_password: ""
    })
    const [error, setErrorValue] = useState({
        password: "",
        confirm_password: ""
    })

    const bcrypt = require('bcryptjs');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (validate()) {
            setErrorValue({...error, password: "", confirm_password: ""});
            console.log(bcrypt.hashSync(value.password, bcrypt.genSaltSync()),)
            // fetchChangedPassword(value).then();
        } else {
            setValue({...value, password: "", confirm_password: ""});
        }
    }


    const validate = () => {
        let isValid = true;

        if (value.password === "" && value.confirm_password === "") {
            isValid = false;
            setErrorValue({...error, password: "Please enter your password", confirm_password: "Please enter your confirm password"});
        }

        if (typeof value["password"] !== "undefined" && typeof value["confirm_password"] !== "undefined") {
            if (value["password"] !== value["confirm_password"]) {
                isValid = false;
                setErrorValue({...error, password: "Passwords don't match", confirm_password: "Passwords don't match"});
            }
        }

        return isValid;
    }


    const fetchChangedPassword = useCallback(async (value) => {
        let response = await fetch(changeUserPasswordURL, {
            method: "POST",
            credentials: "include",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(value)
        })
        history.push("/")

    }, [history])


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
        <div className="changePassword">
            <ChangePasswordHeader/>
            <Form onSubmitCapture={onSubmitHandler}>
                <Table striped bordered hover>
                    <tbody>
                    <tr>
                        <td className={'descriptionColumn'}><FormLabel>Username:</FormLabel></td>
                        <td><FormControl type={"text"} value={userData.email} readOnly={true}/>
                            <div className="text-danger">{error.name}</div>
                        </td>
                    </tr>
                    <tr>
                        <td className={'descriptionColumn'}><FormLabel>Password:</FormLabel></td>
                        <div className={'passwordInputLine'}>
                            <td>
                                <FormControl type={isRevealPwd ? "text" : "password"} value={value.password}
                                             onChange={(event => setValue({...value, password: event.target.value}))}/>
                            </td>
                            <img className={"showPasswordImage"}
                                title={isRevealPwd ? "Hide password" : "Show password"}
                                src={isRevealPwd ? hidePwdImg : showPwdImg}
                                onClick={() => setIsRevealPwd(prevState => !prevState)}/>

                        </div>
                        <div className="text-danger">{error.password}</div>
                    </tr>
                    <tr>
                        <td className={'descriptionColumn'}><FormLabel>Confirm password:</FormLabel></td>
                        <div className={'passwordInputLine'}>
                            <td>
                                <FormControl type={isRevealPwd2 ? "text" : "password"} value={value.confirm_password}
                                             onChange={(event => setValue({
                                                 ...value,
                                                 confirm_password: event.target.value
                                             }))}/>
                            </td>
                            <img className={"showPasswordImage"}
                                title={isRevealPwd2 ? "Hide password" : "Show password"}
                                src={isRevealPwd2 ? hidePwdImg : showPwdImg}
                                onClick={() => setIsRevealPwd2(prevState => !prevState)}/>

                        </div>
                        <div className="text-danger">{error.confirm_password}</div>
                    </tr>
                    <tr>
                        <td id={'changePasswordRow'} colSpan={2}>
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
        ;
};

export default ChangePassword;
