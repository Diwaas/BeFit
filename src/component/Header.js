import React, { Component } from "react";
import ReactDOM from "react-dom";


class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            userName:'User Name'
        };
    }
    
    render() {
        return (
            <div className="topMenu">
                <div className="headerLeft"></div>
                <div className="headerLogo">
                    <img src={require("./img/logo.svg")} width="250px"/>
                </div>
                <div className="headerRight">
                    <div className="loginReg">Welcome {this.state.userName}</div>
                </div>
            </div>
        );
    }

}
export default Header;