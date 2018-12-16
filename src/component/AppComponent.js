// libraries
import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

// Pages
import App from './App'
import UserHome from './UserHome'
import AdminHome from './Admin/AdminHome'
import DoctorHome from './Doctor/DoctorHome'
import PatientHome from './Patient/PatientHome'

const AppComponent = () => (
    <Router>
        <div id="appContainer" style={{width:'100%',height: '100%'}}>
            <Route path="/home" render={() => (
                <Redirect to="/"/>
            )}/>
            <Route exact path="/" component={App} />
            <Route exact path="/takeSurvey" component={UserHome} />
            <Route exact path="/admin" component={AdminHome} />
            <Route exact path="/doctor" component={DoctorHome} />
            <Route exact path="/patient" component={PatientHome} />
            <Route exact path="/doctor/:id" component={DoctorHome} />
            <Route exact path="/patient/:id" component={PatientHome} />
        </div>
    </Router>
)

export default AppComponent
