import React, { Component } from "react";
import ReactDOM from "react-dom";


class MedicalForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            pageName:'/',
            medicalDetails:this.props.details!==''?this.props.details:{}
        };
        this.handleChange = this.handleChange.bind(this);
    }
    navigate(url) {
        this.props.history.push('/doctor/' + url);
    }
    
    componentWillReceiveProps(nextProps) {
        debugger;
        this.setState({pageName:nextProps.match.params.id});
    }
    handleChange(event) {
        let medicalDetails = Object.assign({}, this.state.medicalDetails);
//        if(event.target.name === 'sex') {
//            
//        } else if(event.target.name === 'relation') {
//            
//        }

        medicalDetails[event.target.name] = event.target.value;
        this.setState({medicalDetails});
    }
    handleSubmit(){
        debugger;
        this.props.addAction('medical', this.state.medicalDetails);
    }
    
    render() {
        return (
            <div className="patientDetailsConatiner">
                <div className="patientTrack">Add Medical Details</div>
                <div className="detailsContainer">
                    <div className="detailsMain">
                        <div className="detailsSection">
                            <div className="detailsIndi">
                                <label>Chief Complaints</label>
                                <textarea name="chiefcomplaints" id="chiefcomplaints" placeholder="Enter chief complaints" 
                                    value={this.state.medicalDetails.hasOwnProperty('chiefcomplaints')?this.state.medicalDetails.chiefcomplaints:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>H/o Present Illness</label>
                                <textarea name="presentillness" id="presentillness" placeholder="Enter presentillness" 
                                    value={this.state.medicalDetails.hasOwnProperty('presentillness')?this.state.medicalDetails.presentillness:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                        <div className="detailsSubHeader">REVIEW OF SYSTEMS</div>
                        <div className="detailsSection">
                            <div className="detailsIndi">
                                <label>HeadAche</label>
                                <textarea name="headache" id="headache" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('headache')?this.state.medicalDetails.headache:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Dizziness</label>
                                <textarea name="dizziness" id="dizziness" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('dizziness')?this.state.medicalDetails.dizziness:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Appetite</label>
                                <textarea name="appetite" id="appetite" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('appetite')?this.state.medicalDetails.appetite:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                        <div className="detailsSection">
                            <div className="detailsIndi">
                                <label>Chest Pain</label>
                                <textarea name="chestpain" id="chestpain" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('chestpain')?this.state.medicalDetails.chestpain:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Abdominal Pain</label>
                                <textarea name="abdominalpain" id="abdominalpain" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('abdominalpain')?this.state.medicalDetails.abdominalpain:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Menstrual Cycles</label>
                                <textarea name="menstrualcycle" id="menstrualcycle" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('menstrualcycle')?this.state.medicalDetails.menstrualcycle:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                        <div className="detailsSubHeader">PAST MEDICAL HISTORY</div>
                        <div className="detailsSection">
                            <div className="detailsIndi">
                                <label>DM</label>
                                <textarea name="dm" id="dm" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('dm')?this.state.medicalDetails.dm:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>HTN</label>
                                <textarea name="htn" id="HTN" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('htn')?this.state.medicalDetails.htn:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Heart Disease</label>
                                <textarea name="heartdisease" id="heartdisease" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('heartdisease')?this.state.medicalDetails.heartdisease:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                        <div className="detailsSection">
                            <div className="detailsIndi">
                                <label>Thyroid</label>
                                <textarea name="thyroid" id="thyroid" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('thyroid')?this.state.medicalDetails.thyroid:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Asthma</label>
                                <textarea name="asthma" id="asthma" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('asthma')?this.state.medicalDetails.asthma:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Surgeries</label>
                                <textarea name="surgeries" id="surgeries" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('surgeries')?this.state.medicalDetails.surgeries:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Allergies</label>
                                <textarea name="allergies" id="allergies" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('allergies')?this.state.medicalDetails.allergies:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                        <div className="detailsSubHeader">OBSTETRIC HISTORY</div>
                        <div className="detailsSection">
                            <div className="detailsIndi">
                                <label>Grav</label>
                                <textarea name="grav" id="grav" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('grav')?this.state.medicalDetails.grav:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Para</label>
                                <textarea name="para" id="para" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('para')?this.state.medicalDetails.para:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Abortion</label>
                                <textarea name="abortion" id="abortion" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('abortion')?this.state.medicalDetails.abortion:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Live</label>
                                <textarea name="live" id="live" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('live')?this.state.medicalDetails.live:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                        <div className="detailsSubHeader">FAMILY HISTORY</div>
                        <div className="detailsSection">
                            <div className="detailsIndi">
                                <label>DM</label>
                                <div className="familyCheckbox">
                                    <label>Father 
                                        <input
                                            name="dmfather"
                                            type="checkbox"
                                            defaultChecked={this.state.medicalDetails.hasOwnProperty('dmfather')?this.state.medicalDetails.dmfather:''}
                                            onChange={this.handleChange} />
                                    </label>
                                    <label>Mother 
                                        <input
                                            name="dmmother"
                                            type="checkbox"
                                            defaultChecked={this.state.medicalDetails.hasOwnProperty('dmmother')?this.state.medicalDetails.dmmother:''}
                                            onChange={this.handleChange} />
                                    </label>
                                    <label>Siblings 
                                        <input
                                            name="dmsibilings"
                                            type="checkbox"
                                            defaultChecked={this.state.medicalDetails.hasOwnProperty('dmsibilings')?this.state.medicalDetails.dmsibilings:''}
                                            onChange={this.handleChange} />
                                    </label>
                                </div>
                            </div>
                            <div className="detailsIndi">
                                <label>HTN</label>
                                <div className="familyCheckbox">
                                    <label>Father 
                                        <input
                                            name="htnfather"
                                            type="checkbox"
                                            defaultChecked={this.state.medicalDetails.hasOwnProperty('htnfather')?this.state.medicalDetails.htnfather:''}
                                            onChange={this.handleChange} />
                                    </label>
                                    <label>Mother
                                        <input
                                            name="htnmother"
                                            type="checkbox"
                                            defaultChecked={this.state.medicalDetails.hasOwnProperty('htnmother')?this.state.medicalDetails.htnmother:''}
                                            onChange={this.handleChange} />
                                    </label>
                                    <label>Siblings
                                        <input
                                            name="htnsibilings"
                                            type="checkbox"
                                            defaultChecked={this.state.medicalDetails.hasOwnProperty('htnsibilings')?this.state.medicalDetails.htnsibilings:''}
                                            onChange={this.handleChange} />
                                    </label>
                                </div>
                            </div>
                            <div className="detailsIndi">
                                <label>Heart Disease</label>
                                <div className="familyCheckbox">
                                    <label>father
                                        <input
                                            name="heartdiseasefather"
                                            type="checkbox"
                                            defaultChecked={this.state.medicalDetails.hasOwnProperty('heartdiseasefather')?this.state.medicalDetails.heartdiseasefather:''}
                                            onChange={this.handleChange} />
                                    </label>
                                    <label>Mother
                                        <input
                                            name="heartdiseasemother"
                                            type="checkbox"
                                            defaultChecked={this.state.medicalDetails.hasOwnProperty('heartdiseasemother')?this.state.medicalDetails.heartdiseasemother:''}
                                            onChange={this.handleChange} />
                                    </label>
                                    <label>Siblings
                                        <input
                                            name="heartdiseasesibilings"
                                            type="checkbox"
                                            defaultChecked={this.state.medicalDetails.hasOwnProperty('heartdiseasesibilings')?this.state.medicalDetails.heartdiseasesibilings:''}
                                            onChange={this.handleChange} />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="detailsSection">
                            <div className="detailsIndi">
                                <label>Kidney Disease</label>
                                <div className="familyCheckbox">
                                    <label>Father
                                        <input
                                            name="kidneydiseasefather"
                                            type="checkbox"
                                            defaultChecked={this.state.medicalDetails.hasOwnProperty('kidneydiseasefather')?this.state.medicalDetails.kidneydiseasefather:''}
                                            onChange={this.handleChange} />
                                    </label>
                                    <label>Mother
                                        <input
                                            name="kidneydiseasemother"
                                            type="checkbox"
                                            defaultChecked={this.state.medicalDetails.hasOwnProperty('kidneydiseasemother')?this.state.medicalDetails.kidneydiseasemother:''}
                                            onChange={this.handleChange} />
                                    </label>
                                    <label>Siblings
                                        <input
                                            name="kidneydiseasesibilings"
                                            type="checkbox"
                                            defaultChecked={this.state.medicalDetails.hasOwnProperty('kidneydiseasesibilings')?this.state.medicalDetails.kidneydiseasesibilings:''}
                                            onChange={this.handleChange} />
                                    </label>
                                </div>
                            </div>
                            <div className="detailsIndi">
                                <label>Asthma</label>
                                <div className="familyCheckbox">
                                    <label>Father
                                        <input
                                            name="asthmafather"
                                            type="checkbox"
                                            defaultChecked={this.state.medicalDetails.hasOwnProperty('asthmafather')?this.state.medicalDetails.asthmafather:''}
                                            onChange={this.handleChange} />
                                    </label>
                                    <label>Mother
                                        <input
                                            name="asthmamother"
                                            type="checkbox"
                                            defaultChecked={this.state.medicalDetails.hasOwnProperty('asthmamother')?this.state.medicalDetails.asthmamother:''}
                                            onChange={this.handleChange} />
                                    </label>
                                    <label>Siblings
                                        <input
                                            name="asthmasibilings"
                                            type="checkbox"
                                            defaultChecked={this.state.medicalDetails.hasOwnProperty('asthmasibilings')?this.state.medicalDetails.asthmasibilings:''}
                                            onChange={this.handleChange} />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="detailsSection">
                            <div className="detailsIndi">
                                <label>Others Father</label>
                                <textarea name="othersfather" id="othersfather" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('othersfather')?this.state.medicalDetails.othersfather:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Others Mother</label>
                                <textarea name="othersmother" id="othersmother" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('othersmother')?this.state.medicalDetails.othersmother:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Others Siblings</label>
                                <textarea name="otherssiblings" id="otherssiblings" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('otherssiblings')?this.state.medicalDetails.otherssiblings:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                        <div className="detailsSection">
                            <div className="detailsIndi">
                                <label>Medications</label>
                                <textarea name="medications" id="medications" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('medications')?this.state.medicalDetails.medications:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                                
                        </div>
                        <div className="detailsSubHeader">ON EXAMINATIONS</div>
                        <div className="detailsSection">
                            <div className="detailsIndi">
                                <label>BP</label>
                                <textarea name="bp" id="bp" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('bp')?this.state.medicalDetails.bp:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Pules</label>
                                <textarea name="pules" id="pules" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('pules')?this.state.medicalDetails.pules:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Heent</label>
                                <textarea name="heent" id="heent" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('heent')?this.state.medicalDetails.heent:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Neck</label>
                                <textarea name="neck" id="neck" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('neck')?this.state.medicalDetails.neck:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                        <div className="detailsSection">
                            <div className="detailsIndi">
                                <label>Resp System</label>
                                <textarea name="respsystem" id="respsystem" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('respsystem')?this.state.medicalDetails.respsystem:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Heart</label>
                                <textarea name="heart" id="heart" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('heart')?this.state.medicalDetails.heart:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Abdomen</label>
                                <textarea name="abdomen" id="abdomen" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('abdomen')?this.state.medicalDetails.abdomen:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Extremities</label>
                                <textarea name="extremities" id="extremities" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('extremities')?this.state.medicalDetails.extremities:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                        <div className="detailsSection">
                            <div className="detailsIndi">
                                <label>Gentalia</label>
                                <textarea name="gentalia" id="gentalia" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('gentalia')?this.state.medicalDetails.gentalia:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Breast</label>
                                <textarea name="breast" id="breast" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('breast')?this.state.medicalDetails.breast:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Feet</label>
                                <textarea name="feet" id="feet" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('feet')?this.state.medicalDetails.feet:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                        <div className="detailsSection">
                            <div className="detailsIndi">
                                <label>Lab Reports</label>
                                <textarea name="labreports" id="labreports" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('labreports')?this.state.medicalDetails.labreports:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Impressions</label>
                                <textarea name="impressions" id="impressions" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('impressions')?this.state.medicalDetails.impressions:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="detailsIndi">
                                <label>Recommendations</label>
                                <textarea name="recommendations" id="recommendations" placeholder="Enter details if any" 
                                    value={this.state.medicalDetails.hasOwnProperty('recommendations')?this.state.medicalDetails.recommendations:''}
                                    onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="actionContainer">
                        <div className="actionCenter" onClick={()=> this.handleSubmit()}>Submit</div>
                    </div>
                </div>
            </div>
        );
    }

}
export default MedicalForm;