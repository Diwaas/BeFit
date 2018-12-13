package com.paypal.diwaas.Service;

import java.util.List;

import com.paypal.diwaas.Entity.Survey;

public interface SurveyService {
	
	public List<Survey> fetchTheSurvey();
	public void saveSurvey(Survey survey);
}
