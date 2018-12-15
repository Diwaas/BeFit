package com.paypal.diwaas.dao;

import javax.transaction.Transactional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.paypal.diwaas.Entity.Patient;

@Repository
@Transactional
public interface PatientDAO extends MongoRepository<Patient, String> {

	Patient findByNameAndPassword(String name, String password);

	Patient findByName(String name);
	
}
