import React, { Component } from "react";
import ReactDOM from "react-dom";


import Header from '../Header'

class FAQ extends Component {
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
          <div className="faqdata">
          	<div>
          		<h1><b>How Does Smoking During Pregnancy Harm My Health and My Baby?</b></h1>
          		<p>Most people know that smoking causes cancer, heart disease, and other major health problems. 
          		Smoking during pregnancy causes additional health problems, including premature birth (being born too early),
          		certain birth defects, and infant death.</p>
          	</div>
          </div>
        );
    }

}
export default FAQ;