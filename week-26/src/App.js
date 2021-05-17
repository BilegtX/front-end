import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Login } from './5_03/pages';
import './5_03/css/style.css';
import './App.css';
const App = () => {
    const [user, setUser] = useState('');
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home user={user} setUser={setUser} />
                    </Route>
                    <Route path="/">
                        <Login user={user} setUser={setUser} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
