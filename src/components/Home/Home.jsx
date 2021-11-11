import React, { useEffect } from 'react';

const Javapeno = () => {
    useEffect(() => {
        if (new URLSearchParams(window.location.search).get("unauthorized") === '') {
            console.log('doodo');
        } 
    })
    return (
        <article>
            <h2>Welcome to Javapeño's ERP System!</h2>
        </article>
    );
};

export default Javapeno;
