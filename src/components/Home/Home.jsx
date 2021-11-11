import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import LoginModal from '../Navigation/Login/LoginModal';

const Javapeno = () => {
    const [show, setShow] = useState(false)
    const history = useHistory()

    useEffect(() => {
        if (new URLSearchParams(window.location.search).get("unauthorized") === '') {
            history.push("/")
            setShow(true)
        } 
    })
    return (
        <article>
            <h2>Welcome to Javapeño's ERP System!</h2>
            <LoginModal show={show} handleClose={() => setShow(false)}></LoginModal>
        </article>
    );
};

export default Javapeno;
