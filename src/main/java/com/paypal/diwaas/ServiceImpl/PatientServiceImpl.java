package com.paypal.diwaas.ServiceImpl;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.paypal.diwaas.Entity.Patient;
import com.paypal.diwaas.Entity.PatientHistory;
import com.paypal.diwaas.Service.PatientService;
import com.paypal.diwaas.dao.PatientDAO;
import com.paypal.diwaas.dao.PatientHistoryDAO;
import com.paypal.diwaas.util.sideloading.JSONModel;
import com.paypal.diwaas.util.sideloading.JSONModelHelper;

@Service
public class PatientServiceImpl implements PatientService {

	@Autowired
	PatientDAO patientDAO;
	
	@Autowired
	PatientHistoryDAO patientHistoryDAO;

	@Override
	public ResponseEntity<JSONModel> getLogin(Patient patient) {
		ResponseEntity<JSONModel> resp = null;
		JSONModel jsonModel = null;
		Optional<Patient> loginPatient = patientDAO.findByIdAndPassword(patient.getId(), patient.getPassword());
		if (loginPatient == null) {
			loginPatient = patientDAO.findById(patient.getId());
			if (loginPatient.get() == null) {
				jsonModel = JSONModelHelper.processJSONModelForObject("500", "Please register Now", null);
				resp = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(jsonModel);
			} else {
				jsonModel = JSONModelHelper.processJSONModelForObject("500", "Invalid Password", loginPatient.get());
				resp = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(jsonModel);
				return resp;
			}

		}
		jsonModel = JSONModelHelper.processJSONModelForObject("200", "Patient retrieved successfully", loginPatient.get());
		resp = ResponseEntity.status(HttpStatus.OK).body(jsonModel);
		return resp;
	}

	@Override
	public Patient createPatient(Patient patient) {
		DateFormat df = new SimpleDateFormat("dd/MM/yy HH:mm:ss");
	    Date dateobj = new Date();
	    String d = df.format(dateobj);
	    patient.setDate(d);
	    patient.setRegno(patient.getId());
	    patient.setUsername(patient.getId());
		Patient newPatient = patientDAO.save(patient);
		return newPatient;
	}
	
	@Override
	public PatientHistory addPatientHistory(PatientHistory patientHistory, String patientId) {
		patientHistory.setPatientid(patientId);
		PatientHistory newPatient = patientHistoryDAO.save(patientHistory);
		return newPatient;
	}

	@Override
	public List<Patient> getAllPatients() {
		// TODO Auto-generated method stub
		List<Patient> patients = patientDAO.findAll();
		return patients;
	}

	@Override
	public Patient getPatientsByID(String name) {
		Optional<Patient> patients = patientDAO.findById(name);
		return patients.get();
	}

}
