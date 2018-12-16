import React, { Component } from "react";
import ReactDOM from "react-dom";


class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: JSON.parse(localStorage.getItem('diwaasUser')),
            diwaasUser: {name:'', role:'', id:''},
        };
        this.logoutUser = this.logoutUser.bind(this);
    }
    logoutUser() {
        localStorage.setItem('diwaasUser', JSON.stringify(this.state.diwaasUser));
        this.props.history.push('/');
    }
    
    render() {
        return (
            <div className="topMenu">
                <div className="headerLeft"></div>
                <div className="headerLogo">
                    <img src={require("./img/logo.svg")} width="250px"/>
                </div>
                <div className="headerRight">
                    <div className="loginReg">Welcome {this.state.user.name}</div>
                    <div className="link" onClick={()=>this.logoutUser()}>logout</div>
                </div>
            </div>
        );
    }

}
export default Header;