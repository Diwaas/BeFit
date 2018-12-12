import React, { Component } from "react";
import ReactDOM from "react-dom";

class RegisterComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="loginContainer" id="registerForm">
                <div className="logoConatinerUser">
                    <img src={require("./img/logo.svg")}  width="250px"/>
                </div>
                <div className="userDetailsConatinerLogin">
                    <div className="fieldConatiner">
                        <input type="text" name="name" value="" placeholder="Enter Name" />
                    </div>
                    <div className="fieldConatiner">
                        <input type="text" name="email" value="" placeholder="Enter Mail Id" />
                    </div>
                    <div className="fieldConatiner">
                        <input type="text" name="mobile" value="" placeholder="Enter Mobile number" />
                    </div>
                    <div className="fieldConatiner">
                        <input type="password" name="password" value="" placeholder="Enter Password" />
                    </div>
                    <div className="fieldConatiner">
                        <input type="password" name="cpassword" value="" placeholder="Enter Confirm Password" />
                    </div>
                    <div className="homeActionForm">
                        <div className="actionLeft"></div>
                        <div className="actionCenter">Sign Up</div>
                        <div className="actionRight" onClick={() =>this.props.changeLoginRegister('login')}>Sign In</div>
                    </div>
                </div>
            </div>
        );
    }

}
export default RegisterComponent;