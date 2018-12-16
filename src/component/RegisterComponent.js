import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Textbox } from 'react-inputs-validation';

class RegisterComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name:'',
            email:'',
            mobile:'',
            password:'',
            cpassword:'',
            passwordMatch:false,
            emailMatch:false,
            user:[],
            enableSubmit: false,
            errMsg:''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        let enableSubmit = false;
        if(event.target.name==='email') {
            
        }
        enableSubmit = (this.state.name!=='' && this.state.email!=='' && this.state.mobile!==''&& this.state.password!==''&& this.state.cpassword!==''
            && this.state.passwordMatch===true&& this.state.emailMatch===true)?true:false;
        
        this.setState({[event.target.name]: event.target.value, enableSubmit:enableSubmit});
    }
    handleSubmit() {
        if(this.state.enableSubmit) {
            debugger;
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
                    
                        <input type="text" name="name" value={this.state.name} placeholder="Enter Name" onChange={this.handleChange} />
                    </div>
                    <div className="fieldConatiner">
                        <input type="email" name="email" value={this.state.email} placeholder="Enter Mail Id" onChange={this.handleChange} />
                    </div>
                    <div className="fieldConatiner">
                        <input type="number" name="mobile" value={this.state.mobile} placeholder="Enter Mobile number" onChange={this.handleChange} />
                    </div>
                    <div className="fieldConatiner">
                        <input type="password" name="password" value={this.state.password} placeholder="Enter Password" onChange={this.handleChange} />
                    </div>
                    <div className="fieldConatiner">
                        <input type="password" name="cpassword" value={this.state.cpassword} placeholder="Enter Confirm Password" onChange={this.handleChange} />
                    </div>
                    <div className="fieldConatiner">
                        <div>{this.state.errMsg}</div>
                    </div>
                    <div className="homeActionForm">
                        <div className="actionLeft"></div>
                        <div className={this.state.enableSubmit?"actionCenter":"actionCenterDisabled"} 
                            onClick={() => this.handleSubmit()}>Sign Up</div>
                        <div className="actionRight" onClick={() =>this.props.changeLoginRegister('login')}>Sign In</div>
                    </div>
                </div>
            </div>
        );
    }

}
export default RegisterComponent;