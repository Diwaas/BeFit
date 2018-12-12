import React, { Component } from "react";
import ReactDOM from "react-dom";

import surveyList from '../constants/surveyList'

class TakeASurvey extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            page:'/takeASurvey',
            surveyEnd:false,
            survey: {},
            selectedSurvey:{option:'',nodeId:''},
            checkedOption:'',
            surveyCompleted: false,
            surveyResult:'',
            finalSurveyList:[]
        };
    }
    componentWillMount() {
        let survey = {};
        let options = [];
        if(surveyList.hasOwnProperty('question')) {
            survey['question'] = surveyList.question;
            survey['nodeId'] = surveyList.nodeId;
            surveyList.subSurvey.length>0?
                surveyList.subSurvey.map((surveyOptions) => {
                    options.push({nodeId:surveyOptions.nodeId, option:surveyOptions.option, surveyEnd:surveyOptions.subSurvey.length>0?false:true})
                })
            :''
            survey['optionList'] = options;
            survey['result'] = '';
        }
        this.setState({survey});
    }
    onOptionChanged(option, nodeId) {
        let sel ={};
        sel['option'] = option;
        sel['nodeId'] = nodeId;
        let surveyEnd = false;
        if(this.state.survey.optionList.length>0) {
            this.state.survey.optionList.map((options)=> {
                if(options.nodeId === option.nodeId) {
                    surveyEnd = options.surveyEnd;
                }
                
            })
        }
        this.setState({selectedSurvey:sel, surveyEnd})
        
    }
    nextQuestionGeneration(list, option) {
        let survey = {};
        let options = [];
        let surveyEnd = false;
        if(list.subSurvey.length>0){
            list.subSurvey.map((surveyOptions) => {
                if(surveyOptions.nodeId===option.nodeId){
                    survey['question'] = surveyOptions.question;
                    survey['nodeId'] = surveyOptions.nodeId;
                    surveyOptions.subSurvey.length>0?
                        surveyOptions.subSurvey.map((surveyOptions) => {
                            let endSurvey = surveyOptions.subSurvey.length>0?false:true;
                            let endResult='';
                            if(endSurvey) {
                                endResult = surveyOptions.result;
                            } else {
                                endResult = '';
                            }
                            options.push({nodeId:surveyOptions.nodeId, option:surveyOptions.option, surveyEnd:endSurvey, endResult:endResult})
                        })
                    :''
                    survey['optionList'] = options;
                    survey['result'] = surveyOptions.result;
                }
            })
        } else {
            survey['question'] = list.question;
            survey['nodeId'] = list.nodeId;
            survey['optionList'] = [];
            survey['result'] = list.result;
        }
        if(survey.optionList.length>0) {
            surveyEnd=survey.optionList[0].surveyEnd;
        }
        this.setState({survey,surveyEnd});
    }
    nextQuestionSearch(list, nodeId, option) {
        let count = 0;
        if(list.subSurvey.length>0){
            list.subSurvey.map((surveyOptions) => {
                if(surveyOptions.nodeId===nodeId) {
                    count = 1;
                    this.nextQuestionGeneration(surveyOptions, option);
                }
            })
            if(count===0) {
                list.subSurvey.map((surveyOptions) => {
                    this.nextQuestionSearch(surveyOptions, nodeId, option)
                })
            }
        }
    }
    nextSurvey() {
        let option = this.state.selectedSurvey.option;
        let nodeId = this.state.selectedSurvey.nodeId;
        if(nodeId ==='' && option==='') {
            option = {};
            nodeId = this.state.survey['nodeId'];
            let options = document.getElementsByName('options');
            let i;
            for (i = 0; i < options.length; i++) {
                if (options[i].checked === true) {
                    option['option'] = options[i].value;
                    option['nodeId'] = parseInt(options[i].id.split("_").pop());
                }
            }
        }
        let surveyFinal = Object.assign([],this.state.finalSurveyList);
        let answered = {};
        answered['question'] = this.state.survey.question;
        answered['answer'] = option.option;
        surveyFinal.push(answered);
        this.setState({finalSurveyList:surveyFinal});
        if(surveyList.nodeId===nodeId) {
            this.nextQuestionGeneration(surveyList, option);
        } else {
            this.nextQuestionSearch(surveyList, nodeId, option);
        }
    }
    submitSurvey() {
        let options = document.getElementsByName('options');
        let i;
        let option = {};
        for (i = 0; i < options.length; i++) {
            if (options[i].checked === true) {
                option['option'] = options[i].value;
                option['nodeId'] = parseInt(options[i].id.split("_").pop());
            }
        }
        let surveyResult = '';
        this.state.survey.optionList.map((list)=> {
            if(list.nodeId===option.nodeId){
                surveyResult = list.endResult;
            }
            
        })
        let surveyFinal = Object.assign([],this.state.finalSurveyList);
        let answered = {};
        answered['question'] = this.state.survey.question;
        answered['answer'] = option.option;
        surveyFinal.push(answered);
        this.setState({finalSurveyList:surveyFinal});
        debugger;
        this.setState({surveyCompleted:true, surveyResult});
    }
    render() {
        return (
            <div className="dataContainer">
                <div className="surveyConatiner">
                    {(this.state.surveyCompleted && this.state.surveyResult!=='') || (this.state.survey.hasOwnProperty('result') && (this.state.survey.result!==''))?
                        <div>
                            <div>{this.state.surveyCompleted?this.state.surveyResult:this.state.survey.result}</div>
                        </div>
                    :this.state.survey.hasOwnProperty('question')?
                        <div className="surveyBlock">
                            <div className="surveyQuestion">{this.state.survey.question}</div>
                            {this.state.survey.optionList.length> 0 && this.state.survey.optionList.map((option, index)=> {
                                return <div className="survyOptionsConatiner">
                                        <div className="surveyOptions">
                                            <input type="radio" name="options" id={`option_${option.nodeId}`} 
                                                value={option.option} 
                                                defaultChecked={index===0}
                                                onChange={()=>this.onOptionChanged(option, this.state.survey.nodeId)} />
                                                <label htmlFor={`option_${option.nodeId}`}>{option.option}</label>
                                        </div>
                                </div>
                            })}
                        </div>
                    :''}
                    {this.state.surveyCompleted?'':<div className="surveyActionContainer">
                        {this.state.surveyEnd?<div className="surevyAction" onClick={()=>this.submitSurvey()}>Submit</div>:
                        <div className="surevyAction" onClick={()=>this.nextSurvey()}>Next</div>}
                    </div>}
                </div>
            </div>
        );
    }

}
export default TakeASurvey;