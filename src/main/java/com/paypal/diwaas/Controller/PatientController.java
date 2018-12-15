package com.paypal.diwaas.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.paypal.diwaas.Entity.Patient;
import com.paypal.diwaas.Entity.PatientHistory;
import com.paypal.diwaas.Service.PatientService;
import com.paypal.diwaas.util.sideloading.JSONModel;
import com.paypal.diwaas.util.sideloading.JSONModelHelper;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@Controller
@RequestMapping("/patient")
public class PatientController {

	@Autowired
	PatientService patientService;
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<JSONModel> login(@RequestBody Patient patient) {
		// get User
		ResponseEntity<JSONModel> resp = null;
		JSONModel jsonModel = null;
		try {
			jsonModel = patientService.getLogin(patient);
			resp = ResponseEntity.status(HttpStatus.OK).body(jsonModel);
		} catch (Exception e) {
			jsonModel = JSONModelHelper.processJSONModelForObject("500", "INVALID REQUEST", e.getMessage());
			resp = ResponseEntity.status(HttpStatus.BAD_REQUEST).body(jsonModel);
		}
		return resp;
	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<JSONModel> register(@RequestBody Patient patient) {
		// create User
		ResponseEntity<JSONModel> resp = null;
		JSONModel jsonModel = null;
		try {
			// String username = "arajakumar";
			Patient newPatient = patientService.createPatient(patient);
			jsonModel = JSONModelHelper.processJSONModelForObject("200", "Patient login created successfully", newPatient);
			resp = ResponseEntity.status(HttpStatus.OK).body(jsonModel);
		} catch (Exception e) {
			jsonModel = JSONModelHelper.processJSONModelForObject("500", "INVALID REQUEST", e.getMessage());
			resp = ResponseEntity.status(HttpStatus.BAD_REQUEST).body(jsonModel);
		}
		return resp;
	}

	@RequestMapping(value = "/addPatientHistory/{patientId}", method = RequestMethod.POST)
	public ResponseEntity<JSONModel> getPatientHistory(@PathVariable(value = "patientId") String patientId, @RequestBody PatientHistory patientHistory) {
		// create User
		System.out.println("fvdavadfva");
		ResponseEntity<JSONModel> resp = null;
		JSONModel jsonModel = null;
		try {
			// String username = "arajakumar";
			PatientHistory patientHis = patientService.addPatientHistory(patientHistory, patientId);
			jsonModel = JSONModelHelper.processJSONModelForObject("200", "Patient history added successfully", patientHis);
			resp = ResponseEntity.status(HttpStatus.OK).body(jsonModel);
		} catch (Exception e) {
			jsonModel = JSONModelHelper.processJSONModelForObject("500", "INVALID REQUEST", e.getMessage());
			resp = ResponseEntity.status(HttpStatus.BAD_REQUEST).body(jsonModel);
		}
		return resp;
	}
}
