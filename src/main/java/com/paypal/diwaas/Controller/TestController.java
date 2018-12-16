package com.paypal.diwaas.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.paypal.diwaas.Entity.SequenceCounter;
import com.paypal.diwaas.Service.SequenceCounterService;
import com.paypal.diwaas.ServiceImpl.SequenceCounterServiceImpl;
import com.paypal.diwaas.dao.SequenceCounterDao;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@Controller
@RequestMapping("/test")
public class TestController {

	@Autowired
	SequenceCounterDao SequenceCounterDao;

	@Autowired
	SequenceCounterService sequenceCounterService;

	@RequestMapping(value = "/seq", method = RequestMethod.GET)
	public String testSeq() {

		StringBuilder sb = new StringBuilder();
		sb.append("nextPatientId:").append(sequenceCounterService.getNextPatientIdSequence() + "");
		sb.append("nextUserId:").append(sequenceCounterService.getNextUserIdSequence() + "");

		return sb.toString();
	}

	@RequestMapping(value = "/seq/del", method = RequestMethod.GET)
	public String testSeqDel() {

		SequenceCounterDao.deleteAll();
		return "success";
	}

	@RequestMapping(value = "/seq/user/{id}", method = RequestMethod.GET)
	public String testUserSeqSet(@PathVariable long id) {
		SequenceCounter counter = new SequenceCounter();
		counter.setName(SequenceCounterServiceImpl.USER_ID);
		counter.setSequence(id);
		SequenceCounterDao.insert(counter);
		return "success";
	}

	@RequestMapping(value = "/seq/patient/{id}", method = RequestMethod.GET)
	public String testPatientSeqSet(@PathVariable long id) {
		SequenceCounter counter = new SequenceCounter();
		counter.setName(SequenceCounterServiceImpl.PATIENT_ID);
		counter.setSequence(id);
		SequenceCounterDao.insert(counter);
		return "success";
	}

}
