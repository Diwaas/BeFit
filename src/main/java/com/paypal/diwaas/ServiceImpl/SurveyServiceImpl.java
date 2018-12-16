package com.paypal.diwaas.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paypal.diwaas.Entity.Survey;
import com.paypal.diwaas.Entity.SurveyResult;
import com.paypal.diwaas.Service.SurveyService;
import com.paypal.diwaas.dao.SurveyDAO;
import com.paypal.diwaas.dao.SurveyResultDAO;

@Service
public class SurveyServiceImpl implements SurveyService{
	
	@Autowired
	SurveyDAO surveyDAO;
	
	@Autowired
	SurveyResultDAO surveyresultdao;
	
	public List<Survey> fetchTheSurvey() {
		return surveyDAO.findAll();
	}

	@Override
	public void saveSurvey(Survey survey) {
		surveyDAO.save(survey);
	}

	@Override
	public void submitSurvey(SurveyResult sr) {
		surveyresultdao.save(sr);
		
	}

	@Override
	public List<SurveyResult> getSurveyResult(String id) {
		List<SurveyResult> surveyList = surveyresultdao.findByPatientid(id);
		return surveyList;
	}
	
}
