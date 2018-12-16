package com.paypal.diwaas.ServiceImpl;

import javax.inject.Inject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.CriteriaDefinition;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import com.paypal.diwaas.Entity.SequenceCounter;
import com.paypal.diwaas.Service.SequenceCounterService;
import com.paypal.diwaas.dao.SequenceCounterDao;

public class SequenceCounterServiceImpl implements SequenceCounterService{

	private final MongoTemplate mongoTemplate;
	
	@Inject
    public SequenceCounterServiceImpl(MongoTemplate mongoTemplate){
        this.mongoTemplate = mongoTemplate;
    }

	public static final String PATIENT_ID = "patient_id";
	public static final String USER_ID = "user_id";

	@Autowired
	SequenceCounterDao seqCounterDao;

	@Override
	public long getNextPatientIdSequence() {
		return increaseCounter(PATIENT_ID);
	}

	@Override
	public long getNextUserIdSequence() {
		return increaseCounter(USER_ID);
	}
	
	private long increaseCounter(String counterName){
        Query query = new Query(Criteria.where("name").is(counterName));
        Update update = new Update().inc("sequence", 1);
        SequenceCounter counter = mongoTemplate.findAndModify(query, update, SequenceCounter.class); // return old Counter object
        return counter.getSequence();
    }

}
