import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from '../Header'

class AddPatient extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            pageName:'/',
            personalDetails:this.props.details!==''?this.props.details:{sex:'female',relation:'spouse'}
        };
        this.handleChange = this.handleChange.bind(this);
    }
    navigate(url) {
        this.props.history.push('/doctor/' + url);
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({pageName:nextProps.match.params.id});
    }
    handleChange(event) {
        let personalDetails = Object.assign({}, this.state.personalDetails);
//        if(event.target.name === 'sex') {
//            
//        } else if(event.target.name === 'relation') {
//            
//        }
        personalDetails[event.target.name] = event.target.value;
        this.setState({personalDetails});
    }
    handleSubmit() {
        this.props.addAction('personal', this.state.personalDetails);
        
    }
    render() {
        return (
            <div className="patientDetailsConatiner">
                <div className="patientTrack">Add Personal Details</div>
                <div className="detailsContainer">
                    <div className="detailsMain">
                        <div className="detailsSection">
                            <div className="detailsIndi">
                                <label>Name</label>
                                <input type="text" name="name" id="name" placeholder="What is your full name?" 
                                    value={this.state.personalDetails.hasOwnProperty('name')?this.state.personalDetails.name:''}
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="detailsIndi">
                                <label>Age</label>
                                <input type="number" name="age" id="age" placeholder="What is your age?"
                                    value={this.state.personalDetails.hasOwnProperty('age')?this.state.personalDetails.age:''}
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="detailsIndi">
                                <label>Sex</label>
                                <div>
                                    <input type="radio" name="sex" id="sex" value="male" onChange={this.handleChange}
                                        defaultChecked={this.state.personalDetails.sex === 'male'}  />Male
                                    <input type="radio" name="sex" id="sex" value="female" onChange={this.handleChange}
                                        defaultChecked={this.state.personalDetails.sex === 'female'}  />Female
                                </div>
                                
                            </div>
                        </div>
                        <div className="detailsSection">
                            <div className="detailsIndi">
                                <label>Date of Birth</label>
                                    <input type="date" name="dob" id="dob" placeholder="What is your DOB?"
                                    value={this.state.personalDetails.hasOwnProperty('dob')?this.state.personalDetails.dob:''}
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="detailsIndi">
                                <label>Relation</label>
                                <div className="detailsGroup">
                                    <select value={this.state.personalDetails.hasOwnProperty('relation')?this.state.personalDetails.relation:''}
                                            name="relation" onChange={this.handleChange}>
                                        <option value="father">Father</option>
                                        <option value="mother">Mother</option>
                                        <option value="spouse">Spouse</option>
                                    </select>
                                    <input type="text" name="relationname" id="relationname" placeholder="Enter Name" 
                                        value={this.state.personalDetails.hasOwnProperty('relationname')?this.state.personalDetails.relationname:''}
                                        onChange={this.handleChange}/>
                                </div>
                                
                            </div>
                        </div>
                        <div className="detailsSection">
                            <div className="detailsIndi">
                                <label>Mobile No</label>
                                <input type="number" name="mobilenumber" id="mobilenumber" placeholder="What is your mobilenumber?"
                                    value={this.state.personalDetails.hasOwnProperty('mobilenumber')?this.state.personalDetails.mobilenumber:''}
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="detailsIndi">
                                <label>Whatapp No</label>
                                <input type="number" name="whatsappnumber" id="whatsappnumber" placeholder="What is your whatsappnumber?"
                                    value={this.state.personalDetails.hasOwnProperty('whatsappnumber')?this.state.personalDetails.whatsappnumber:''}
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="detailsIndi">
                                <label>Email</label>
                                <input type="email" name="email" id="email" placeholder="What is your email id?"
                                    value={this.state.personalDetails.hasOwnProperty('email')?this.state.personalDetails.email:''}
                                    onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="detailsSection">
                            <div className="detailsIndi">
                                <label>Blood Group</label>
                                <input type="text" name="bloodgroup" id="bloodgroup" placeholder="What is your mobilenumber?"
                                    value={this.state.personalDetails.hasOwnProperty('bloodgroup')?this.state.personalDetails.bloodgroup:''}
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="detailsIndi">
                                <label>Address</label>
                                <textarea name="location" id="location" placeholder="What is your whatsappnumber?"
                                    value={this.state.personalDetails.hasOwnProperty('location')?this.state.personalDetails.location:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                        <div className="detailsSection">
                            <div className="detailsIndi">
                                <label>Education</label>
                                <input type="text" name="education" id="education" placeholder="What is your education?" 
                                    value={this.state.personalDetails.hasOwnProperty('education')?this.state.personalDetails.education:''}
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="detailsIndi">
                                <label>Nature Of Work</label>
                                <input type="text" name="natureofwork" id="natureofwork" placeholder="What is your Nature of Work?" 
                                    value={this.state.personalDetails.hasOwnProperty('natureofwork')?this.state.personalDetails.natureofwork:''}
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="detailsIndi">
                                <label>Weight (in Kgs)</label>
                                <input type="text" name="height" id="height" placeholder="What is your height?" 
                                    value={this.state.personalDetails.hasOwnProperty('height')?this.state.personalDetails.height:''}
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="detailsIndi">
                                <label>Height (in cms)k</label>
                                <input type="text" name="height" id="height" placeholder="What is your height?" 
                                    value={this.state.personalDetails.hasOwnProperty('height')?this.state.personalDetails.height:''}
                                    onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="detailsSection">
                            <div className="detailsIndi">
                                <label>Reffered by</label>
                                <input type="text" name="refferedby" id="refferedby" placeholder="Enter the Refference Name" 
                                    value={this.state.personalDetails.hasOwnProperty('refferedby')?this.state.personalDetails.refferedby:''}
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="detailsIndi">
                                <label>Reason For Consultation</label>
                                <textarea name="reasonforconsultation" id="reasonforconsultation" placeholder="Reason For Consultation"
                                    value={this.state.personalDetails.hasOwnProperty('reasonforconsultation')?this.state.personalDetails.reasonforconsultation:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="actionContainer">
                        <div className="actionCenter" onClick={()=>this.handleSubmit()}>Submit</div>
                    </div>
                </div>
            </div>
        );
    }

}
export default AddPatient;