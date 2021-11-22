import React, {useCallback, useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import {useHistory, useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ChangePassword.css"
import {Button, Form, FormControl, FormLabel} from "react-bootstrap";
import showPwdImg from '../../images/show-password.png';
import hidePwdImg from '../../images/hide-password.png';
import {fetchDataGetIncludeCors, fetchJsonDataPostIncludeCors} from "../Util/fetchData";

function ChangePasswordHeader() {
    return <h4 id="changePasswordHeader">Change password</h4>;
}

let ChangePassword = () => {
        const changeUserPasswordURL = "http://localhost:8080/api/user-authentication-service/first-password-change";
        const getUserURL = "http://localhost:8080/api/user/";
        const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$";
        const [userData, setData] = useState([]);
        const {userId} = useParams();
        const history = useHistory();

        const [isRevealPwd, setIsRevealPwd] = useState(false);
        const [isRevealPwd2, setIsRevealPwd2] = useState(false);
        const [value, setValue] = useState({
            userId: "",
            userName: "",
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
                value.password = bcrypt.hashSync(value.password, bcrypt.genSaltSync());
                value.confirm_password = "";
                value.userName = userData.email;
                value.userId = userId;
                fetchChangedPassword(value).then();
            } else {
                setValue({...value, password: "", confirm_password: ""});
            }
        }


        const validate = () => {
            let isValid = true;

            if (value.password === "") {
                isValid = false;
                setErrorValue({...error, password: "Please enter your password", confirm_password: ""});
            } else if (value.confirm_password === "") {
                isValid = false;
                setErrorValue({...error, password: "", confirm_password: "Please enter your confirm password"});
            }
            if (value.password !== "" && value.confirm_password !== "") {
                if (value.password !== value.confirm_password) {
                    isValid = false;
                    setErrorValue({...error, password: "Passwords don't match", confirm_password: ""});
                } else if (!value["password"].match(regex)) {
                    isValid = false;
                    setErrorValue({
                        ...error, password: "Please provide a password from english characters, \n" +
                            "with at least one uppercase, lowercase and digit characters, \n" +
                            " and with the minimum length of 8.", confirm_password: ""
                    });
                }
            }
            return isValid;
        }

        const fetchChangedPassword = useCallback(async (value) => {
            await fetchJsonDataPostIncludeCors(changeUserPasswordURL, JSON.stringify(value))
                .then(() => {
                    history.push("/");
                });
        }, [history])

        useEffect(() => {
            let userDataFromServer = fetchDataGetIncludeCors(getUserURL + userId);
            userDataFromServer
                .then((data) => {
                    setData(data);
                })
                .catch(err => console.error(err));
        }, [userId]);

        return (
            <div className="changePassword">
                <ChangePasswordHeader/>
                <Form onSubmitCapture={onSubmitHandler}>
                    <Table striped bordered hover>
                        <tbody>
                        <tr>
                            <td className={'descriptionColumn'}><FormLabel>Username:</FormLabel></td>
                            <td><FormControl plaintext type={"text"} value={userData.email} readOnly={true}/></td>
                        </tr>
                        <tr>
                            <td className={'descriptionColumn'}><FormLabel>Password:</FormLabel></td>
                            <td className={"passwordInputLine"}>
                                <FormControl type={isRevealPwd ? "text" : "password"} value={value.password}
                                             onChange={(event => setValue({...value, password: event.target.value}))}/>
                                <img className={"showPasswordImage"}
                                     alt={'showPasswordImage'}
                                     title={isRevealPwd ? "Hide password" : "Show password"}
                                     src={isRevealPwd ? hidePwdImg : showPwdImg}
                                     onClick={() => setIsRevealPwd(prevState => !prevState)}/>
                            </td>
                        </tr>
                        <tr>
                            <td className={'descriptionColumn'}><FormLabel>Confirm password:</FormLabel></td>
                            <td className={"passwordInputLine"}>
                                <FormControl type={isRevealPwd2 ? "text" : "password"} value={value.confirm_password}
                                             onChange={(event => setValue({
                                                 ...value,
                                                 confirm_password: event.target.value
                                             }))}/>
                                <img className={"showPasswordImage"}
                                     alt={'showPasswordImage'}
                                     title={isRevealPwd2 ? "Hide password" : "Show password"}
                                     src={isRevealPwd2 ? hidePwdImg : showPwdImg}
                                     onClick={() => setIsRevealPwd2(prevState => !prevState)}/>
                            </td>
                        </tr>
                        <tr>
                            <td id={'changePasswordRow'} colSpan={2}>
                                <div className="text-danger">{error.password}</div>
                                <div className="text-danger">{error.confirm_password}</div>
                            </td>
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
    }
;

export default ChangePassword;
