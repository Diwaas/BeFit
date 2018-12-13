package com.paypal.diwaas.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.paypal.diwaas.Entity.*;

@Repository
@Transactional
public interface SurveyDAO extends MongoRepository<Survey, String> {
	public Survey findBySurveyId(String surveyId);
    public List<Survey> findAll();
}
