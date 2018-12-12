import React, { Component } from "react";
import ReactDOM from "react-dom";

class LoginComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            
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
                        <input type="text" name="username" value="" placeholder="Username" />
                    </div>
                    <div className="fieldConatiner">
                        <input type="password" name="password" value="" placeholder="Password" />
                    </div>
                    <div className="forgotPasswordHome" onClick={() => this.props.changeLoginRegister('forgetPassword')}>Forgot password?</div>
                    <div className="homeActionForm">
                        <div className="actionLeft"></div>
                        <div className="actionCenter">Sign In</div>
                        <div className="actionRight" onClick={() => this.props.changeLoginRegister('register')}>Sign Up</div>
                    </div>
                </div>
            </div>
        );
    }

}
export default LoginComponent;