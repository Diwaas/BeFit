import React, { Component } from "react";
import ReactDOM from "react-dom";

import surveyList from '../../constants/surveyList'
import smoking from '../../constants/surveySmoking'
import caller from '../../caller'

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
            finalSurveyList:{"patientid" : "1235","tracks":[]},
            track:[smoking, surveyList],
            trackName:['Smoking', 'Diabetics'],
            trackCount:0,
            msg:''
        };
    }
    componentWillMount() {
        let survey = {};
        let options = [];
        let track = this.state.track;
        if(track.length>0) {
            if(track[0].hasOwnProperty('question')) {
                survey['question'] = track[0].question;
                survey['nodeId'] = track[0].nodeId;
                track[0].subSurvey.length>0?
                    track[0].subSurvey.map((surveyOptions) => {
                        options.push({nodeId:surveyOptions.nodeId, option:surveyOptions.option, surveyEnd:surveyOptions.subSurvey.length>0?false:true})
                    })
                :''
                survey['optionList'] = options;
                survey['result'] = '';
            }
        }
        
        this.setState({survey, trackCount:1});
    }
    onOptionChanged(option, nodeId) {
        let sel ={};
        sel['option'] = option;
        sel['nodeId'] = nodeId;
        let surveyEnd = false;
        let trackCount = this.state.trackCount;
        if(this.state.survey.optionList.length>0) {
            this.state.survey.optionList.map((options)=> {
                if(options.nodeId === option.nodeId) {
                    surveyEnd = options.surveyEnd;
                    trackCount = options.surveyEnd?trackCount++:trackCount;
                }
                
            })
        }
        this.setState({selectedSurvey:sel, surveyEnd, trackCount})
        
    }
    nextQuestionGeneration(list, option) {
        
        let survey = {};
        let options = [];
        let surveyEnd = false;
        let trackCount = this.state.trackCount;
        let surveyList = this.state.track[trackCount-1];
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
            trackCount = surveyEnd?trackCount+1:trackCount
        }
        this.setState({survey,surveyEnd, trackCount});
    }
    nextQuestionSearch(list, nodeId, option) {
        
        let count = 0;
        if(list.hasOwnProperty('subSurvey') && list.subSurvey.length>0){
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
        } else {
            let nodeId = this.state.survey['nodeId'];
            let options = document.getElementsByName('options');
            let oldsurvey=Object.assign({}, this.state.survey);
            let i;
            if(options.length>0) {
                for (i = 0; i < options.length; i++) {
                    if (options[i].checked === true) {
                        option['option'] = options[i].value;
                        option['nodeId'] = parseInt(options[i].id.split("_").pop());
                    }
                }
            }
            oldsurvey['question'] = oldsurvey.question;
            oldsurvey['nodeId'] = oldsurvey.nodeId;
            if(oldsurvey.optionList.length>0) {
                oldsurvey.optionList.map((item)=> {
                    if(item.nodeId===option.nodeId){
                        oldsurvey['result'] = option.endResult;
                    }
                });
            }
            
            oldsurvey['optionList'] = [];
            let count = this.state.trackCount;
            this.setState({survey:oldsurvey,surveyEnd:true, trackCount:(count+1)});
        }
    }
    nextSurvey() {
        debugger;
        let option = this.state.selectedSurvey.option;
        let nodeId = this.state.selectedSurvey.nodeId;
        let trackCount = this.state.trackCount;
        let newsurveyList = Object.assign({},this.state.track[trackCount-1]);
        let surveyList = Object.assign({},this.state.track[trackCount-1]);
        let count = 0;
        let newTrack = false;
        if(nodeId ==='' && option==='') {
            option = {};
            nodeId = this.state.survey['nodeId'];
            let options = document.getElementsByName('options');
            let i;
            if(options.length>0) {
                for (i = 0; i < options.length; i++) {
                    if (options[i].checked === true) {
                        option['option'] = options[i].value;
                        option['nodeId'] = parseInt(options[i].id.split("_").pop());
                    }
                }
            } else {
                
                count = trackCount+1;
                surveyList = this.state.track[count-1];
                newTrack = true;
            }
        }
        let surveyFinal = Object.assign([],this.state.finalSurveyList);
        let answered = {};
        let newTrackObject = {};
        let counts = 0;
        
        if(newTrack) {
            newTrackObject['trackid'] = this.state.trackName[count-1];
            newTrackObject['survey'] = [];
            if(this.state.survey.question!=='') {
                answered['question'] = this.state.survey.question;
                answered['answer'] = option.option;
                newTrackObject['survey'].push(answered);
            }
            surveyFinal.tracks.push(newTrackObject);
        } else {
            if(surveyFinal.tracks.length>0) {
                surveyFinal.tracks.map((item)=> {
                    if(item.trackid===this.state.trackName[this.state.trackCount-1]) {
                        counts=1;
                        if(this.state.survey.question!=='') {
                            answered['question'] = this.state.survey.question;
                            answered['answer'] = option.option;
                            item.survey.push(answered);
                        }
                    }
                })
                if(counts=0){
                    newTrackObject['trackid'] = this.state.trackName[this.state.trackCount-1];
                    newTrackObject['survey'] = [];
                    if(this.state.survey.question!=='') {
                        answered['question'] = this.state.survey.question;
                        answered['answer'] = option.option;
                        newTrackObject['survey'].push(answered);
                    }
                    surveyFinal.tracks.push(newTrackObject);
                }
            } else {
                newTrackObject['trackid'] = this.state.trackName[this.state.trackCount-1];
                newTrackObject['survey'] = [];
                if(this.state.survey.question!=='') {
                    answered['question'] = this.state.survey.question;
                    answered['answer'] = option.option;
                    newTrackObject['survey'].push(answered);
                }
                surveyFinal.tracks.push(newTrackObject);
            }
        }
        
            
        this.setState({finalSurveyList:surveyFinal});
        if(newsurveyList.nodeId===nodeId) {
            this.nextQuestionGeneration(newsurveyList, option);
        } else if(newTrack) {
            
            let newSurvey = {};
            let options = [];
            if(surveyList.hasOwnProperty('question')) {
                newSurvey['question'] = surveyList.question;
                newSurvey['nodeId'] = surveyList.nodeId;
                surveyList.subSurvey.length>0?
                    surveyList.subSurvey.map((surveyOptions) => {
                        options.push({nodeId:surveyOptions.nodeId, option:surveyOptions.option, surveyEnd:surveyOptions.subSurvey.length>0?false:true})
                    })
                :''
                newSurvey['optionList'] = options;
                newSurvey['result'] = '';
            }
            this.setState({survey:newSurvey, trackCount:count});
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
        let surveyFinal = Object.assign({},this.state.finalSurveyList);
        let answered = {};
        let newTrackObject = {};
        let counts = 0;
        if(surveyFinal.tracks.length>0) {
            surveyFinal.tracks.map((item)=> {
                if(item.trackid===this.state.trackName[this.state.trackCount-2]) {
                    counts=1;
                    if(this.state.survey.question!=='') {
                        answered['question'] = this.state.survey.question;
                        answered['answer'] = option.option;
                        item.survey.push(answered);
                    }
                }
            })
            if(counts=0){
                newTrackObject['trackid'] = this.state.trackName[this.state.trackCount-2];
                newTrackObject['survey'] = [];
                if(this.state.survey.question!=='') {
                    answered['question'] = this.state.survey.question;
                    answered['answer'] = option.option;
                    newTrackObject['survey'].push(answered);
                }
                surveyFinal.tracks.push(newTrackObject);
            }
        } else {
            newTrackObject['trackid'] = this.state.trackName[this.state.trackCount-2];
            newTrackObject['survey'] = [];
            if(this.state.survey.question!=='') {
                answered['question'] = this.state.survey.question;
                answered['answer'] = option.option;
                newTrackObject['survey'].push(answered);
            }
            surveyFinal.tracks.push(newTrackObject);
        }
        this.setState({finalSurveyList:surveyFinal});
        
        console.log(JSON.stringify(surveyFinal));
        
        this.setState({surveyCompleted:true, surveyResult});
        return caller.fetchData('/survey/submitSurvey', surveyFinal,
            res => {
                if(res.status === 200 ) {
                    
                    let data = JSON.parse(res.text);
                    this.setState({msg:data.meta.status_msg});
                } else {

                }
            }
        )
    }
    render() {
        return (
            <div className="dataContainer">
                <div className="surveyConatiner">
                    
                    <div>{this.state.msg!==''?
                        <div className="message">{this.state.msg}</div>
                    :''}</div>
                    {(this.state.surveyCompleted && this.state.surveyResult!=='') || (this.state.survey.hasOwnProperty('result') && (this.state.survey.result!==''))?
                        <div>
                            <div>{this.state.surveyCompleted?this.state.surveyResult:this.state.survey.result}</div>
                        </div>
                    :this.state.survey.hasOwnProperty('question')?
                        <div className="surveyBlock">
                            <div className="surveyTrack">{this.state.trackName[this.state.trackCount-1]}</div>
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
                        {this.state.surveyEnd && (this.state.trackCount===this.state.track.length || this.state.trackCount>this.state.track.length)?<div className="surevyAction" onClick={()=>this.submitSurvey()}>Submit</div>:
                        <div className="surevyAction" onClick={()=>this.nextSurvey()}>Next</div>}
                    </div>}
                </div>
            </div>
        );
    }

}
export default TakeASurvey;