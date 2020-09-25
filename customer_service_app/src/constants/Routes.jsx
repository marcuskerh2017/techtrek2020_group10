import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import HomePage from "../views/HomePage";
import LoginPage from "../views/LoginPage";
import ResultsPage from "../views/ResultsPage";
import FormPage from "../views/FormPage";

export default class Routes extends Component {
    render() {
        return (
            <>
                <Router>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/home" component={HomePage} />
                            <Route exact path="/login" component={LoginPage} />
                            <Route exact path="/results" component={ResultsPage} />
                            <Route exact path="/form" component={FormPage} />
                        </Switch>
                </Router>
            </>
        );
    }
}
