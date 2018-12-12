import React, { Component } from "react";
import ReactDOM from "react-dom";

import TakeASurvey from './TakeASurvey'

class UserHome extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            page:'/userHome'
        };
    }
    componentWillMount() {
        this.setState({page:this.props.location.pathname==='/'?'/userHome':this.props.location.pathname});
    }
    componentWillReceiveProps(nextProps) {
        this.setState({page:nextProps.location.pathname});
    }
    navigate(url) {
        this.props.history.push('/' + url);
    }
    
    render() {
        return (
            <div className="appContainer">
                <div className="sectionPartUser">
                    <div className="topMenu">
                        <div className="headerLeft"></div>
                        <div className="headerLogo">
                            <img src={require("./img/logo.svg")} width="250px"/>
                        </div>
                        <div className="headerRight">
                            <div className="loginReg">Welcome Dharu</div>
                        </div>
                    </div>
                    {this.state.page==='/userHome'?
                        <div className="dataContainer">
                            <div className="userMenuContainer">
                                <div className="userMenu" onClick={()=>this.navigate('takeSurvey')}>Take a Survey</div>
                                <div className="userMenu" onClick={()=>this.navigate('myReport')}>Reports</div>
                            </div>
                            <div className="siteContent">

                            </div>
                        </div>
                    :this.state.page==='/takeSurvey'?
                        <TakeASurvey {...this.props} />
                    :this.state.page==='/myReport'?
                        <div className="dataContainer">
                            Report
                        </div>
                    :''
                    }
                </div>
            </div>
        );
    }

}
export default UserHome;