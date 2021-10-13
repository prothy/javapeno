import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar} from "react-bootstrap";
import {PersonCircle} from "react-bootstrap-icons";

const Header = () => {
    return (
        <>
            <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">ICON</Navbar.Brand>
                        <Navbar.Toggle />

                        <Navbar.Collapse className="justify-content-end" style={{fontSize: 40, color: "white"}}>
                                Javapeño
                        </Navbar.Collapse>

                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                <a href="#login"><PersonCircle style={{width: 40, height: 40}}/></a>
                            </Navbar.Text>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default Header;
