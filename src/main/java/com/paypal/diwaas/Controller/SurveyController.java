package com.paypal.diwaas.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.paypal.diwaas.Entity.User;
import com.paypal.diwaas.Service.UserService;
import com.paypal.diwaas.util.sideloading.JSONModel;
import com.paypal.diwaas.util.sideloading.JSONModelHelper;

@RestController
@Controller
@RequestMapping("/survey")
public class SurveyController {
	
	@Autowired
	UserService userService;
	
	@RequestMapping(value = "/takeASurvey", method = RequestMethod.GET)
	public ResponseEntity<JSONModel>  fetchSurveyQuestions() {
		//get User 
		ResponseEntity<JSONModel> resp = null;
		JSONModel jsonModel = null;
		try {
			//String username = "arajakumar";
			jsonModel= userService.getLoginUser(user);
			resp = ResponseEntity.status(HttpStatus.OK).body(jsonModel);
		} catch (Exception e) {
			jsonModel = JSONModelHelper.processJSONModelForObject("500", "INVALID REQUEST", e.getMessage());
			resp = ResponseEntity.status(HttpStatus.BAD_REQUEST).body(jsonModel);
		}
		return resp;
	}
	
}
