package com.paypal.diwaas.ServiceImpl;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
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
	public JSONModel getLogin(Patient patient) {
		JSONModel jsonModel = null;
		Optional<Patient> loginPatient = patientDAO.findByIdAndPassword(patient.getName(), patient.getPassword());
		if (loginPatient == null) {
			loginPatient = patientDAO.findById(patient.getName());
			if (loginPatient.get() == null) {
				jsonModel = JSONModelHelper.processJSONModelForObject("200", "Please register Now", null);
			} else {
				jsonModel = JSONModelHelper.processJSONModelForObject("200", "Invalid Password", loginPatient.get());
				return jsonModel;
			}

		}
		jsonModel = JSONModelHelper.processJSONModelForObject("200", "Patient retrieved successfully", loginPatient.get());
		return jsonModel;
	}

	@Override
	public Patient createPatient(Patient patient) {
		DateFormat df = new SimpleDateFormat("dd/MM/yy HH:mm:ss");
	    Date dateobj = new Date();
	    String d = df.format(dateobj);
	    patient.setDate(d);
	    patient.setRegno(patient.getId());
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
