import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar} from "react-bootstrap";
import LoginButton from "../Login/LoginButton";
import LoginModal from "../Login/LoginModal";
import logo from "../../../images/javapeno.png"

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/"><img src={logo} style={{width: 40, height: 40}} alt=""/></Navbar.Brand>
                        <Navbar.Toggle />

                        <Navbar.Collapse className="justify-content-end" style={{fontSize: 40, color: "white"}}>
                                Javapeño
                        </Navbar.Collapse>

                        <Navbar.Collapse className="justify-content-end">
                           <LoginButton handleShow={handleShow} />
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </header>
            <LoginModal show={show} handleClose={handleClose} />
        </>
    );
};

export default Header;
