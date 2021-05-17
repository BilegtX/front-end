import React from 'react';
import { useHistory } from 'react-router-dom';
export const Login = (props) => {
    const history = useHistory();
    const { user, setUser } = props;
    return (
        <div>
            <h1>Login Page</h1>
            <input value={user} onChange={(e) => setUser(e.target.value)} />
            <button onClick={() => history.push('/home')}>Login</button>
        </div>
    );
};
