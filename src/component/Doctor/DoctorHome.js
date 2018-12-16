import React, { Component } from "react";
import ReactDOM from "react-dom";


import Header from '../Header'
import AddPatient from './AddPatient'
import MedicalForm from './MedicalForm'

class DoctorHome extends Component {
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
        this.props.history.push('/doctor/' + url);
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({pageName:nextProps.match.params.id});
    }
    addAction(type, Pdetails) {
        let details = Object.assign({}, this.state.patientDetails);
        let combine = {};
        if(type==='personal') {
            details = Pdetails;
        } else {
            combine = Object.assign(details, Pdetails);
            debugger;
        }
        this.setState({patientDetails:details, showAdd:type==='personal'?'medical':'personal'});
    }
    render() {
        return (
            <div className="appContainer">
                <div className="sectionPartUser">
                    <Header />
                    <div className="dataContainerFlex">
                        <div className="doctorMenu">
                            {this.state.pageName!=='addPatient'?
                                <div className="link" onClick={() => this.navigate('addPatient')}>Add Patient Details</div>:''}
                            {this.state.pageName!=='viewPatient'?
                                <div className="link" onClick={() => this.navigate('viewPatient')}>View Patient Details</div>:''}
                        </div>
                        {this.state.pageName==='addPatient'?
                            this.state.showAdd==='personal'?<AddPatient addAction={this.addAction}/>
                            :this.state.showAdd==='medical'?<MedicalForm addAction={this.addAction}/>
                            :''
                        :''}
                        {this.state.pageName==='viewPatient'?
                            <div>
                                View Patient Details
                            </div>
                        :''}
                    </div>
                </div>
            </div>
        );
    }

}
export default DoctorHome;