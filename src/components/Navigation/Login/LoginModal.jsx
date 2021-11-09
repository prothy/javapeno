import React, { useState, useContext } from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import { useHistory } from 'react-router';

import { UserContext } from '../../../context/LoginContext';

function LoginModal({ show, handleClose }) {
    const history = useHistory();

    const [, setUser] = useContext(UserContext);

    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const loginUser = async (ev) => {
        ev.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    'username': usernameValue,
                    'password': passwordValue
                })
            });

            if (response.status === 200) {
                console.info("Logged in successfully.")
                handleClose();

                setUser(usernameValue)
            } else {
                throw new Error("Error logging in. Check server log for details.")
            }
        } catch (e) {
            console.error(e)
        }
        // setUser(usernameValue)
    }

    return (
        <>
            <Modal
                show={show}
                onHide={() => (handleClose)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                    <Form onSubmit={loginUser}>
                        <Modal.Body>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" 
                                    onChange={(ev) => setUsernameValue(ev.target.value)}
                                    value={usernameValue}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" 
                                    onChange={(ev) => setPasswordValue(ev.target.value)}
                                    value={passwordValue}/>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit">Login</Button>
                        </Modal.Footer>
                    </Form>
            </Modal>
        </>
    );
}

export default LoginModal;