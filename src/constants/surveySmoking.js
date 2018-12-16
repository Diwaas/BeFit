let surveyList2 = {
    "surveyId": "SVY001",
    "nodeId": 1,
    "parentNodeId": 0,
    "question": "Do you smoke ?",
    "inputType": "radio",
    "option": '',
    "result": '',
    "subSurvey": [
        {
            "surveyId": "SVY001",
            "nodeId": 2,
            "parentNodeId": 1,
            "question": "",
            "option": "Yes",
            "result": 'Effects of smoking in pregnancy. Effects of smoking on Baby. Effects of smoking on Health.\n Smoking cessation tips, Benefits of quitting, Consult your Physician, Q & A on smoking',
            "subSurvey":[

            ]
        },
        {
            "surveyId": "SVY001",
            "nodeId": 3,
            "parentNodeId": 1,
            "question": "Do anyone in your family or at home or at work smokes?",
            "inputType": "radio",
            "option": "No",
            "result": '',
            "subSurvey": [
                {
                    "surveyId": "SVY001",
                    "nodeId": 4,
                    "parentNodeId": 3,
                    "question": "",
                    "option": "Yes ",
                    "result": 'Effects of smoking in pregnancy. Effects of smoking on Baby. Effects of smoking on Health ?. \n Smoking cessation tips, Benefits of quitting, Consult your Physician, Q & A on smoking',
                    "subSurvey": [
                    ]
                }
            ]
        }
    ]
};

export default surveyList2;
