import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar} from "react-bootstrap";

import LoginButton from "../Login/LoginButton";
import LoginModal from "../Login/LoginModal";
import { ReactComponent as Logo } from "../../../images/jalapeno.svg"

import "./Header.css"

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <header>
                <nav>
                    <Container>
                        <span className="nav-logo">
                            <h1>Javapeño</h1>
                            <h1>ERP System</h1>
                            <Logo/>
                        </span>
                        <span>
                            <LoginButton handleShow={handleShow} />
                        </span>
                    </Container>
                </nav>
            </header>
            <LoginModal show={show} handleClose={handleClose} />
        </>
    );
};

export default Header;
