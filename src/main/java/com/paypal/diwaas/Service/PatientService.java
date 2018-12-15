package com.paypal.diwaas.Service;

import com.paypal.diwaas.Entity.Patient;
import com.paypal.diwaas.util.sideloading.JSONModel;

public interface PatientService {

	JSONModel getLogin(Patient patient);

	Patient createPatient(Patient patient);
}
