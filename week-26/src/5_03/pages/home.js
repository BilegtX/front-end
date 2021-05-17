import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
export const Home = (props) => {
    const history = useHistory();
    const { user = '', setUser } = props;
    if (user === '') {
        history.push('');
    }
    const [friends, setFriends] = useState([]);
    const logout = () => {
        setUser('');
        history.push('');
    };
    useEffect(async () => {
        const api = await axios.get('https://randomuser.me/api/?results=10');
        setFriends([...api.data.results]);
    }, []);
    // console.log(friends.picture.large);
    return (
        <div>
            <h1>Home Page</h1>
            <p>Hi {user}</p>
            <p>Your friends:</p>
            {friends ? (
                friends.map((friend, index) => {
                    return (
                        <div key={index} className="friends">
                            <p>
                                {friend.name.title +
                                    '. ' +
                                    friend.name.first +
                                    ' ' +
                                    friend.name.last}
                            </p>
                            <img src={friend.picture.large} />
                        </div>
                    );
                })
            ) : (
                <p>LOADING...</p>
            )}
            <button onClick={logout}>Log out</button>
        </div>
    );
};
