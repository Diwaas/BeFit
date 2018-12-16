import React, { Component } from "react";
import ReactDOM from "react-dom";


import caller from '../caller'

        class LoginComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '',
            password: '',
            enableSubmit: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {

        this.setState({[event.target.name]: event.target.value, enableSubmit: (this.state.username !== '' && this.state.password !== '') ? true : false});
    }
    handleSubmit() {
        if (this.state.enableSubmit) {
            this.fetchLoginData('/login', {"name": this.state.username, "password": this.state.password})
        }
    }
    fetchLoginData(url, data) {
        let user= {};
        return caller.fetchData('/login', data,
            res => {
                if(res.status === 200 ) {
                    let user = JSON.parse(res.text);
                    debugger;
                } else {
                    
                }
            }
        )
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
                <div className="loginContainer" id="loginForm">
                    <div className="logoConatinerUser">
                        <img src={require("./img/logo.svg")} width="250px"/>
                    </div>
                    <div className="userDetailsConatinerLogin">
                        <div className="fieldConatiner">
                            <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleChange} />
                        </div>
                        <div className="fieldConatiner">
                            <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} />
                        </div>
                        <div className="forgotPasswordHome"></div>
                        <div className="homeActionForm">
                            <div className="actionLeft"></div>
                            <div className={this.state.enableSubmit ? "actionCenter" : "actionCenterDisabled"} 
                                 onClick={() => this.handleSubmit()}>Sign In</div>
                            <div className="actionRight" ></div>
                        </div>
                    </div>
                </div>
                );
    }

}
export default LoginComponent;