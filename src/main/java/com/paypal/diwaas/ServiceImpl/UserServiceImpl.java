package com.paypal.diwaas.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
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
	public JSONModel getLoginUser(User user) {
		JSONModel jsonModel = null;
		User loginUser = userDAO.findByNameAndPassword(user.getName(), user.getPassword());
		if(loginUser == null){
			loginUser = userDAO.findByName(user.getName());
			if(loginUser == null){
				jsonModel = JSONModelHelper.processJSONModelForObject("200", "Please register Now", null);
			}else{
				jsonModel = JSONModelHelper.processJSONModelForObject("200", "Invalid Password", loginUser);
				return jsonModel;
			}
			
		}
		jsonModel = JSONModelHelper.processJSONModelForObject("200", "User retrieved successfully", loginUser);
		return jsonModel;
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
