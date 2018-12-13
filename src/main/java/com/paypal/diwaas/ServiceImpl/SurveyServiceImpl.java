package com.paypal.diwaas.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paypal.diwaas.Entity.Survey;
import com.paypal.diwaas.Service.SurveyService;
import com.paypal.diwaas.dao.SurveyDAO;

@Service
public class SurveyServiceImpl implements SurveyService{
	
	@Autowired
	SurveyDAO surveyDAO;
	
	public List<Survey> fetchTheSurvey() {
		return surveyDAO.findAll();
	}

	@Override
	public void saveSurvey(Survey survey) {
		surveyDAO.save(survey);
	}
	
}
