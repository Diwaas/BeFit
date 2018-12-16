package com.paypal.diwaas.dao;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.paypal.diwaas.Entity.Patient;
import com.paypal.diwaas.Entity.SequenceCounter;

@Repository
@Transactional
public interface SequenceCounterDao extends MongoRepository<SequenceCounter, String> {

//	Optional<SequenceCounter> findByName(String name);
	SequenceCounter findByName(String name);
}
