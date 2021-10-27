import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ChangePassword from "./components/Employee/ChangePassword";
import Header from "./components/Navigation/Header/Header";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/user/change-password/:userId">
                    <Header/>
                    <ChangePassword/>
                </Route>
                <Route path="/">
                    <App/>
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
