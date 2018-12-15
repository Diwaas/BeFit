package com.paypal.diwaas.Service;

import com.paypal.diwaas.Entity.User;
import com.paypal.diwaas.util.sideloading.JSONModel;

public interface UserService {

	JSONModel getLoginUser(User user);

	User createUser(User user);
//
//	User getUserByQuestion(String question, String answer);
//
//	User forgetPassword(User user);

}
