package com.paypal.diwaas.dao;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.paypal.diwaas.Entity.Patient;

@Repository
@Transactional
public interface PatientDAO extends MongoRepository<Patient, String> {

//	Optional<Patient> findByIdAndPassword(String name, String password);

	Optional<Patient> findById(String name);
	
	void deleteById(String id);

	Optional<Patient> findByIdAndMobilenumber(String username, long mobilenumber);
	
}
