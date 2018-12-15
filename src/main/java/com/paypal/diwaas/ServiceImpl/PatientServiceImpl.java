package com.paypal.diwaas.ServiceImpl;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paypal.diwaas.Entity.Patient;
import com.paypal.diwaas.Service.PatientService;
import com.paypal.diwaas.dao.PatientDAO;
import com.paypal.diwaas.util.sideloading.JSONModel;
import com.paypal.diwaas.util.sideloading.JSONModelHelper;

@Service
public class PatientServiceImpl implements PatientService {

	@Autowired
	PatientDAO patientDAO;

	@Override
	public JSONModel getLogin(Patient patient) {
		JSONModel jsonModel = null;
		Patient loginPatient = patientDAO.findByNameAndPassword(patient.getName(), patient.getPassword());
		if (loginPatient == null) {
			loginPatient = patientDAO.findByName(patient.getName());
			if (loginPatient == null) {
				jsonModel = JSONModelHelper.processJSONModelForObject("200", "Please register Now", null);
			} else {
				jsonModel = JSONModelHelper.processJSONModelForObject("200", "Invalid Password", loginPatient);
				return jsonModel;
			}

		}
		jsonModel = JSONModelHelper.processJSONModelForObject("200", "Patient retrieved successfully", loginPatient);
		return jsonModel;
	}

	@Override
	public Patient createPatient(Patient patient) {
		DateFormat df = new SimpleDateFormat("dd/MM/yy HH:mm:ss");
	    Date dateobj = new Date();
	    String d = df.format(dateobj);
//	    System.out.println(d);
	    patient.setDate(d);
		Patient newPatient = patientDAO.save(patient);
		return newPatient;
	}
}
