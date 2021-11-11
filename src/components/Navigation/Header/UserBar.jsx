import React from 'react';
import { Link } from 'react-router-dom';

const UserBar = ({ userState }) => {
    const [user, setUser] = userState

    const logout = async () => {
        await fetch('/api/logout', {
            credentials: 'include'
        })

        setUser(prevState => ({
            ...prevState,
            username: '',
            userId: ''
        }))
    }

    return (
        <span>
            <Link to={`/employee/${user.userId}`}>{user.username}</Link>
            <button onClick={logout}>Logout</button>
        </span>
    );
}

export default UserBar;
