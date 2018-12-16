package com.paypal.diwaas.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.paypal.diwaas.Entity.User;
import com.paypal.diwaas.Service.UserService;
import com.paypal.diwaas.util.sideloading.JSONModel;
import com.paypal.diwaas.util.sideloading.JSONModelHelper;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@Controller
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	UserService userService;
	
//	@RequestMapping(value = "/forgetPassword", method = RequestMethod.POST)
//	public ResponseEntity<JSONModel>  forgetPassword(@RequestBody User user) {
//		ResponseEntity<JSONModel> resp = null;
//		JSONModel jsonModel = null;
//		try {
//			//String username = "arajakumar";
//			User newUser= userService.forgetPassword(user);
//			jsonModel = JSONModelHelper.processJSONModelForObject("200", "User retrieved", newUser);
//			resp = ResponseEntity.status(HttpStatus.OK).body(jsonModel);
//		} catch (Exception e) {
//			jsonModel = JSONModelHelper.processJSONModelForObject("500", "INVALID REQUEST", e.getMessage());
//			resp = ResponseEntity.status(HttpStatus.BAD_REQUEST).body(jsonModel);
//		}
//		return resp;
//	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<JSONModel>  login(@RequestBody User user) {
		//get User 
		ResponseEntity<JSONModel> resp = null;
		JSONModel jsonModel = null;
		try {
			resp= userService.getLoginUser(user);
		} catch (Exception e) {
			jsonModel = JSONModelHelper.processJSONModelForObject("500", "INVALID REQUEST", e.getMessage());
			resp = ResponseEntity.status(HttpStatus.BAD_REQUEST).body(jsonModel);
		}
		return resp;
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<JSONModel>  register(@RequestBody User user) {
		//create User
		ResponseEntity<JSONModel> resp = null;
		JSONModel jsonModel = null;
		try {
			//String username = "arajakumar";
			User newUser= userService.createUser(user);
			jsonModel = JSONModelHelper.processJSONModelForObject("200", "User created successfully", newUser);
			resp = ResponseEntity.status(HttpStatus.OK).body(jsonModel);
		} catch (Exception e) {
			jsonModel = JSONModelHelper.processJSONModelForObject("500", "INVALID REQUEST", e.getMessage());
			resp = ResponseEntity.status(HttpStatus.BAD_REQUEST).body(jsonModel);
		}
		return resp;
	}

}
