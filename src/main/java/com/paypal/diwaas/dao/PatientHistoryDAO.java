package com.paypal.diwaas.dao;

import javax.transaction.Transactional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.paypal.diwaas.Entity.PatientHistory;

@Repository
@Transactional
public interface PatientHistoryDAO extends MongoRepository<PatientHistory, String> {

	PatientHistory findByPatientid(int patientid);
}
