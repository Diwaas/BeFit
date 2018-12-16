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
            diwaasUser: {
                user:''
            },
            pageStatus:'login'
        };
        this.changeLoginRegister = this.changeLoginRegister.bind(this);
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

    render() {
        return (
            <div className="appContainer">
                <div className="sectionPartUser">
                    {this.state.diwaasUser.user===''?
                        this.state.pageStatus === 'login'?
                            <LoginComponent  {...this.props} changeLoginRegister={this.changeLoginRegister}/>
                        :
                            <RegisterComponent  {...this.props} changeLoginRegister={this.changeLoginRegister}/>
                    :<UserHome  {...this.props} />
                    }
                </div>
            </div>
        );
    }

}
export default App;