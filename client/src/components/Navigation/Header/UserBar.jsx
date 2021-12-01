import React from 'react';
import {Link, useHistory} from 'react-router-dom';

const UserBar = ({ userState }) => {
    const history = useHistory()
    const [user, setUser] = userState

    const logout = async () => {
        await fetch(process.env.REACT_APP_SERVER_URL + '/api/logout', {
            credentials: 'include'
        })

        setUser(prevState => ({
            ...prevState,
            username: '',
            userId: ''
        }))

        history.push('/');
    }

    return (
        <span>
            <Link to={`/employee/${user.userId}`}>{user.username}</Link>
            <button onClick={logout}>Logout</button>
        </span>
    );
}

export default UserBar;
