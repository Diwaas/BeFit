import React, { Component } from "react";
import ReactDOM from "react-dom";

import '../css/style.css';

// components
import LoginComponent from './LoginComponent'
import RegisterComponent from './RegisterComponent'
import UserHome from './UserHome'

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            page:'home',
            diwaasUser: {name:'Dharani', role:'doctor', id:''},
            pageStatus:'login'
        };
        this.changeLoginRegister = this.changeLoginRegister.bind(this);
        this.nav = this.nav.bind(this);
    }
    componentWillMount() {
        if(localStorage.getItem('diwaasUser')) {
            this.setState({diwaasUser:JSON.parse(localStorage.getItem('diwaasUser'))});
        } else {
            localStorage.setItem('diwaasUser', JSON.stringify(this.state.diwaasUser));
        }
    }
    
    changeLoginRegister(pageStatus) {
        this.setState({pageStatus});
    }
    nav() {
        let user = this.state.diwaasUser;
        if (user.role === 'admin') {
            this.props.history.push('/admin');
        } else if (user.role === 'doctor') {
            this.props.history.push('/doctor');
        } else if (user.role === 'patient') {
            this.props.history.push('/patient');
        }
    }
    

    render() {
        return (
            <div className="appContainer">
                <div className="sectionPartUser">
                    {this.state.diwaasUser.name===''?
                        this.state.pageStatus === 'login'?
                            <LoginComponent  {...this.props} changeLoginRegister={this.changeLoginRegister}/>
                        :
                            <RegisterComponent  {...this.props} changeLoginRegister={this.changeLoginRegister}/>
                    :this.nav()
                    }
                </div>
            </div>
        );
    }

}
export default App;