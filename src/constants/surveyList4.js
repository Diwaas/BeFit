let surveyList4 = {
   "surveyId":"SVY001",
   "nodeId":1,
   "parentNodeId":0,
   "question":"Question with 2 options ?",
   "inputType" : "radio",
   "option":'',
   "result":'Result for Question with 2 options ?',
   "subSurvey":[
      {
         "surveyId":"SVY001",
         "nodeId":2,
         "parentNodeId":1,
         "question":" Are you under medications ?",
         "option":"A ",
         "result":'',
         "subSurvey":[
         ]
      },
      {
         "surveyId":"SVY001",
         "nodeId":3,
         "parentNodeId":1,
         "question":" Do you follow healthy lifestyle - diet, walking, exercise ?",
         "option":"B ",
         "result":'',
         "subSurvey":[
         ]
      }
   ]
};

export default surveyList;
