package com.paypal.diwaas.dao;

import javax.transaction.Transactional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.paypal.diwaas.Entity.User;
@Repository
@Transactional
public interface UserDAO extends MongoRepository<User, String>{

	User findByNameAndPassword(String email, String password);

	User findByName(String email);

//	User findByQuestionAndAnswer(String question, String answer);


}
