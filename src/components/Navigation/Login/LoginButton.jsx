import React from 'react';
import {PersonCircle} from "react-bootstrap-icons";

const LoginButton = ({ handleShow }) => {
    return (
        <button onClick={handleShow} style={{backgroundColor:"transparent", border:"none"}}>
            <PersonCircle />
        </button>
    );
};

export default LoginButton;
