let surveyList = {
   "surveyId":"SVY001",
   "nodeId":1,
   "parentNodeId":0,
   "question":"Are you already diabetic ?",
   "option":'',
   "result":'',
   "subSurvey":[
      {
         "surveyId":"SVY001",
         "nodeId":2,
         "parentNodeId":1,
         "question":" Are you under medications ?",
         "option":"Yes ",
         "result":'',
         "subSurvey":[
            {
               "surveyId":"SVY001",
               "nodeId":4,
               "parentNodeId":2,
               "question":" Is your blood sugar under control by using medications ?",
               "option":"Yes ",
               "result":'',
               "subSurvey":[
                  {
                     "surveyId":"SVY001",
                     "nodeId":8,
                     "parentNodeId":4,
                     "question":'',
                     "option":"Yes ",
                     "result":" Your health is good enough for delivering the baby, contact doctor and continue regular medications until and after delivery.",
                     "subSurvey":[

                     ]
                  },
                  {
                     "surveyId":"SVY001",
                     "nodeId":9,
                     "parentNodeId":4,
                     "question":'',
                     "option":"No ",
                     "result":" Immediately visit doctor with all your previous reports and case history documents.",
                     "subSurvey":[

                     ]
                  }
               ]
            }
         ]
      },
      {
         "surveyId":"SVY001",
         "nodeId":3,
         "parentNodeId":1,
         "question":" Do you follow healthy lifestyle - diet, walking, exercise ?",
         "option":"No ",
         "result":'',
         "subSurvey":[
            {
               "surveyId":"SVY001",
               "nodeId":5,
               "parentNodeId":3,
               "question":" Are you obese ?",
               "option":"No ",
               "result":'',
               "subSurvey":[
                  {
                     "surveyId":"SVY001",
                     "nodeId":10,
                     "parentNodeId":5,
                     "question":'',
                     "option":"Yes ",
                     "result":" Immediately contact a doctor to get a complete medical health checkup",
                     "subSurvey":[

                     ]
                  },
                  {
                     "surveyId":"SVY001",
                     "nodeId":11,
                     "parentNodeId":5,
                     "question":'',
                     "option":"No ",
                     "result":" You still have high risk out of diabetes on your baby, please contact a medical practitioner",
                     "subSurvey":[

                     ]
                  }
               ]
            },
            {
               "surveyId":"SVY001",
               "nodeId":6,
               "parentNodeId":3,
               "question":'',
               "option":"Yes ",
               "result":" You are fit and have very less chances of acquiring diabetes. Get in touch with a doctor during 7th month of your pregnancy",
               "subSurvey":[

               ]
            },
            {
               "surveyId":"SVY001",
               "nodeId":7,
               "parentNodeId":3,
               "question":'',
               "option":"Not sure ",
               "result":" Get in touch with a medical practitioner to ensure a healthy lifestyle",
               "subSurvey":[

               ]
            }
         ]
      }
   ]
};

export default surveyList;
