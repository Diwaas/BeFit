package com.paypal.diwaas.Service;

import java.util.List;

import com.paypal.diwaas.Entity.Survey;
import com.paypal.diwaas.Entity.SurveyResult;

public interface SurveyService {
	
	public List<Survey> fetchTheSurvey();
	public void saveSurvey(Survey survey);
	public void submitSurvey(SurveyResult sr);
	public List<SurveyResult> getSurveyResult(String id);
}
