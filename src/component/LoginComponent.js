import React, { Component } from "react";
import ReactDOM from "react-dom";


import caller from '../caller'

        class LoginComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '',
            password: '',
            enableSubmit: false,
            errmsg:''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {

        this.setState({[event.target.name]: event.target.value, enableSubmit: (this.state.username !== '' && this.state.password !== '') ? true : false});
    }
    handleSubmit() {
        if (this.state.enableSubmit) {
            this.fetchLoginData('/login', {"username": this.state.username, "password": this.state.password})
        }
    }
    fetchLoginData(url, data) {
        let user= {};
        return caller.fetchData('/login', data,
            res => {
                if(res.status === 200 ) {
                    let user = JSON.parse(res.text);
                    if(user.meta.status_code==='200' && user.meta.status_msg==='User retrieved successfully' ) {
                        let diwaasUser = {name:user.data.name, role:user.data.role, id:user.data.id};
                        localStorage.setItem('diwaasUser', JSON.stringify(diwaasUser));
                        debugger;
                        if (user.data.role === 'admin') {
                            this.props.history.push('/admin');
                        } else if (user.data.role === 'doctor') {
                            this.props.history.push('/doctor');
                        } else if (user.data.role === 'patient') {
                            this.props.history.push('/patient');
                        }
                    } else {
                        this.setState({errmsg:user.meta.status_msg});
                    }
                } else {
                    this.setState({errmsg:"something went wrong try later."});
                }
            }
        )
        
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
                        {this.state.errmsg!=''?<div className="errorMessage" id="hideme">{this.state.errmsg}</div>:''}
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