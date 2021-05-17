import React from 'react';
import { ThemeProvider } from './4_19/darklight/theme';
import { Main } from './4_19/darklight/main';
import './App.css';

function App() {
    return (
        <div className="App">
            <ThemeProvider>
                <Main />
            </ThemeProvider>
        </div>
    );
}

export default App;
