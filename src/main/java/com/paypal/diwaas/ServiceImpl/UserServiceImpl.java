package com.paypal.diwaas.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.paypal.diwaas.Entity.User;
import com.paypal.diwaas.Service.UserService;
import com.paypal.diwaas.dao.UserDAO;
import com.paypal.diwaas.util.sideloading.JSONModel;
import com.paypal.diwaas.util.sideloading.JSONModelHelper;
@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserDAO userDAO;

	@Override
	public ResponseEntity<JSONModel> getLoginUser(User user) {
		JSONModel jsonModel = null;
		ResponseEntity<JSONModel> resp = null;
		User loginUser = userDAO.findByEmailAndPassword(user.getEmail(), user.getPassword());
		if(loginUser == null){
			loginUser = userDAO.findByEmail(user.getEmail());
			if(loginUser == null){
				jsonModel = JSONModelHelper.processJSONModelForObject("500", "Please register Now", null);
				resp = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(jsonModel);
			}else{
				jsonModel = JSONModelHelper.processJSONModelForObject("500", "Invalid Password", loginUser);
				resp = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(jsonModel);
				return resp;
			}
			
		}
		jsonModel = JSONModelHelper.processJSONModelForObject("200", "User retrieved successfully", loginUser);
		resp = ResponseEntity.status(HttpStatus.OK).body(jsonModel);
		return resp;
	}

	@Override
	public User createUser(User user) {
		User newUser = userDAO.save(user);
		return newUser;
	}

//	@Override
//	public User getUserByQuestion(String question, String answer) {
//		// TODO Auto-generated method stub
//		User user = userDAO.findByQuestionAndAnswer(question, answer);
//		return user;
//	}

//	@Override
//	public User forgetPassword(User user) {
//		User email = userDAO.findByEmail(user.getEmail());
//		email.setPassword(user.getPassword());
//		userDAO.save(email);
//		return email;
//	}

}
