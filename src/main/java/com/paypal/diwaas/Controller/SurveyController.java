package com.paypal.diwaas.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.paypal.diwaas.Entity.Survey;
import com.paypal.diwaas.Entity.User;
import com.paypal.diwaas.Service.SurveyService;
import com.paypal.diwaas.Service.UserService;
import com.paypal.diwaas.util.sideloading.JSONModel;
import com.paypal.diwaas.util.sideloading.JSONModelHelper;

@RestController
@Controller
@RequestMapping("/survey")
public class SurveyController {
	
	@Autowired
	SurveyService surveyService;
	
	@RequestMapping(value = "/takeASurvey", method = RequestMethod.GET)
	public ResponseEntity<JSONModel>  fetchSurveyQuestions() {
		ResponseEntity<JSONModel> resp = null;
		JSONModel jsonModel = null;
		try
		{
			List<Survey> surveys = surveyService.fetchTheSurvey();
			jsonModel = JSONModelHelper.processJSONModelForObject("200", "Survey Fetch success", surveys);
			resp = ResponseEntity.status(HttpStatus.OK).body(jsonModel);
		}
		catch(Exception e)
		{

			jsonModel = JSONModelHelper.processJSONModelForObject("500", "NO SURVEY FOUND", e.getMessage());
			resp = ResponseEntity.status(HttpStatus.BAD_REQUEST).body(jsonModel);
		
		}
		return resp;
	}
			
	@RequestMapping(value = "/saveASurvey", method = RequestMethod.POST)
	public ResponseEntity<JSONModel>  saveTheSurvey(@RequestBody Survey survey) {
		ResponseEntity<JSONModel> resp = null;
		JSONModel jsonModel = null;
		try
		{
			surveyService.saveSurvey(survey);
			jsonModel = JSONModelHelper.processJSONModelForObject("200", "Survey Save success", "");
			resp = ResponseEntity.status(HttpStatus.OK).body(jsonModel);
		}
		catch(Exception e)
		{

			jsonModel = JSONModelHelper.processJSONModelForObject("500", "SURVEY SAVE FAILED", e.getMessage());
			resp = ResponseEntity.status(HttpStatus.BAD_REQUEST).body(jsonModel);
		
		}
		return resp;
	}
}
