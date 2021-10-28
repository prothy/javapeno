import React from 'react';
import {PersonCircle} from "react-bootstrap-icons";

const LoginButton = ({ handleShow }) => {
    return (
        <button onClick={handleShow} style={{backgroundColor:"transparent", border:"none"}}>
            <PersonCircle style={{width: 40, height: 40, color: "white"}}/>
        </button>
    );
};

export default LoginButton;
