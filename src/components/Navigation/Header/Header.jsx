import React, {useContext, useState} from 'react';
import {Container, Navbar, Button} from "react-bootstrap";
import { useCookies } from "react-cookie";
import { Link } from 'react-router-dom';

import LoginButton from "../Login/LoginButton";
import LoginModal from "../Login/LoginModal";
import { ReactComponent as Logo } from "../../../images/jalapeno.svg"
import { UserContext } from '../../../context/LoginContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"
import UserBar from './UserBar';

const Header = () => {
    const [user, setUser] = useContext(UserContext)

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
                        <span>{
                            !user.username ?  
                            <LoginButton handleShow={handleShow} />
                            : <UserBar userState={[user, setUser]}/>
                            }
                        </span>
                    </Container>
                </nav>
            </header>
            <LoginModal show={show} handleClose={handleClose} />
        </>
    );
};

export default Header;
