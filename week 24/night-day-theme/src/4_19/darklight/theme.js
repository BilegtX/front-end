import React, { createContext, useState } from 'react';

export const Context = createContext({
    darkTheme: false,
    changeTheme: () => {},
});
export const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const changeTheme = () => {
        setDarkTheme(!darkTheme);
    };
    return (
        <Context.Provider value={{ darkTheme, changeTheme }}>
            {children}
        </Context.Provider>
    );
};
