import React, { Component } from "react";
import ReactDOM from "react-dom";


import Header from '../Header'
import FAQ from './FAQ'

class PatientHome extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            pageName:'/',
            showAdd:'personal',
            patientDetails: {}
        };
        this.addAction = this.addAction.bind(this);
    }
    navigate(url) {
        this.props.history.push('/patient/' + url);
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({pageName:nextProps.match.params.id});
    }
    addAction(type, Pdetails) {
        
    }
    render() {
        return (
            <div className="appContainer">
                <div className="sectionPartUser">
                    <Header />
                    <div className="dataContainerFlex">
                        <div className="doctorMenu">
                            {this.state.pageName!=='faq'?
                                <div className="link" onClick={() => this.navigate('faq')}>FAQ</div>:''}
                            {this.state.pageName!=='report'?
                                <div className="link" onClick={() => this.navigate('report')}>View Report</div>:''}
                        </div>
                        {this.state.pageName==='faq'?
                            <FAQ addAction={this.addAction}/>                           
                        :''}
                    </div>
                </div>
            </div>
        );
    }

}
export default PatientHome;