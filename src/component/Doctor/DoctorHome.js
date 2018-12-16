import React, { Component } from "react";
import ReactDOM from "react-dom";


import Header from '../Header'
import AddPatient from './AddPatient'
import MedicalForm from './MedicalForm'
import ViewPatientDetails from './ViewPatientDetails'
import caller from '../../caller'

class DoctorHome extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            pageName:'/',
            showAdd:'personal',
            patientDetails: {},
            msg:'',
            editPatient:false
        };
        this.addAction = this.addAction.bind(this);
        this.editPatient = this.editPatient.bind(this);
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
            this.setState({patientDetails:details, showAdd:type==='personal'?'medical':'personal'});
        } else {
            combine = Object.assign(details, Pdetails);
            return caller.fetchData('/patient/register', combine,
                res => {
                    if(res.status === 200 ) {
                        debugger;
                        let data = JSON.parse(res.text);
                        this.setState({msg:data.meta.status_msg, pageName:'/'});
                    } else {

                    }
                }
            )
        }
    }
    editPatient(details) {
        this.setState({patientDetails:details,editPatient:true,pageName:'addPatient',showAdd:'personal'});
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
                        <div className="message" id="hideMe">{this.state.msg}</div>
                        {this.state.pageName==='addPatient'?
                            this.state.showAdd==='personal'?<AddPatient addAction={this.addAction} details={this.state.editPatient?this.state.patientDetails:''}/>
                            :this.state.showAdd==='medical'?<MedicalForm addAction={this.addAction}  details={this.state.editPatient?this.state.patientDetails:''} />
                            :''
                        :''}
                        {this.state.pageName==='viewPatient'?
                            <div>
                                <ViewPatientDetails action={this.editPatient}/>
                            </div>
                        :''}
                    </div>
                </div>
            </div>
        );
    }

}
export default DoctorHome;