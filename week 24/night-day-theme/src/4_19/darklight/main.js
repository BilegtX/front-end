import React, { useContext } from 'react';
import { Context } from './theme';
import '../toggle/style.css';

export const Main = () => {
    const { darkTheme, changeTheme } = useContext(Context);
    return (
        <div>
            <div className={`body${darkTheme ? ' night' : ''}`}>
                <div
                    onClick={changeTheme}
                    className={`toggle${darkTheme ? ' night' : ''}`}
                >
                    <div className="notch"></div>
                </div>
            </div>
        </div>
    );
};
