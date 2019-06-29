import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './App';
import Navbar from './components/Navbar/Navbar';
class Routes extends Component {
    render() {
        return (
            <Router>
            <Navbar/>
                <Switch>
                    <Route path="/" component={App} />
                </Switch>
            </Router>
        )
    }
}



export default Routes
