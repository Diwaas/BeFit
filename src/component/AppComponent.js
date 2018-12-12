// libraries
import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

// Pages
import App from './App'
import UserHome from './UserHome'

const AppComponent = () => (
    <Router>
        <div id="appContainer" style={{width:'100%',height: '100%'}}>
            <Route path="/home" render={() => (
                <Redirect to="/"/>
            )}/>
            <Route exact path="/" component={App} />
            <Route exact path="/takeSurvey" component={UserHome} />
        </div>
    </Router>
)

export default AppComponent
