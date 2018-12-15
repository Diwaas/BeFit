package com.paypal.diwaas.Entity;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "patienthistory")
public class PatientHistory {
	@Id
	private String id;
	private int patientid;
	private String cheifcomplaints;
	private String presentillness;
	private String reviewofsystems;
	private String headache;
	private String dizziness;
	private String appetite;
	private String chestpain;
	private String abdominalpain;
	private String menstrualcycle;
	private String dm;
	private String htn;
	private String heartdisease;
	private String thyroid;
	private String asthma;
	private String surgeries;
	private String allergies;
	private String obstetrichistory;
	private String grav;
	private String para;
	private String abortion;
	private String live;
	private String fatherdm;
	private String motherdm;
	private String sibilingsdm;
	private String fatherhtm;
	private String motherhtm;
	private String sibilingshtm;
	private String fatherheartdisease;
	private String motherheartdisease;
	private String sibilingsheartdisease;
	private String fatherkidneydisease;
	private String motherkidneydisease;
	private String sibilingskidneydisease;
	private String fatherasthma;
	private String motherasthma;
	private String sibilingsasthma;
	private String otherfamhistoryfather;
	private String otherfamhistorymother;
	private String otherfamhistorysibilings;
	private String medications;
	private String bp;
	private String pulse;
	private String heent;
	private String neck;
	private String respsystem;
	private String heart;
	private String abdomen;
	private String extremities;
	private String gentalia;
	private String breast;
	private String feet;
	private String impressions;
	private String reccomendations;


	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getPatientid() {
		return patientid;
	}

	public void setPatientid(int patientid) {
		this.patientid = patientid;
	}

	public String getCheifcomplaints() {
		return cheifcomplaints;
	}

	public void setCheifcomplaints(String cheifcomplaints) {
		this.cheifcomplaints = cheifcomplaints;
	}

	public String getPresentillness() {
		return presentillness;
	}

	public void setPresentillness(String presentillness) {
		this.presentillness = presentillness;
	}

	public String getReviewofsystems() {
		return reviewofsystems;
	}

	public void setReviewofsystems(String reviewofsystems) {
		this.reviewofsystems = reviewofsystems;
	}

	public String getHeadache() {
		return headache;
	}

	public void setHeadache(String headache) {
		this.headache = headache;
	}

	public String getDizziness() {
		return dizziness;
	}

	public void setDizziness(String dizziness) {
		this.dizziness = dizziness;
	}

	public String getAppetite() {
		return appetite;
	}

	public void setAppetite(String appetite) {
		this.appetite = appetite;
	}

	public String getChestpain() {
		return chestpain;
	}

	public void setChestpain(String chestpain) {
		this.chestpain = chestpain;
	}

	public String getAbdominalpain() {
		return abdominalpain;
	}

	public void setAbdominalpain(String abdominalpain) {
		this.abdominalpain = abdominalpain;
	}

	public String getMenstrualcycle() {
		return menstrualcycle;
	}

	public void setMenstrualcycle(String menstrualcycle) {
		this.menstrualcycle = menstrualcycle;
	}

	public String getDm() {
		return dm;
	}

	public void setDm(String dm) {
		this.dm = dm;
	}

	public String getHtn() {
		return htn;
	}

	public void setHtn(String htn) {
		this.htn = htn;
	}

	public String getHeartdisease() {
		return heartdisease;
	}

	public void setHeartdisease(String heartdisease) {
		this.heartdisease = heartdisease;
	}

	public String getThyroid() {
		return thyroid;
	}

	public void setThyroid(String thyroid) {
		this.thyroid = thyroid;
	}

	public String getAsthma() {
		return asthma;
	}

	public void setAsthma(String asthma) {
		this.asthma = asthma;
	}

	public String getSurgeries() {
		return surgeries;
	}

	public void setSurgeries(String surgeries) {
		this.surgeries = surgeries;
	}

	public String getAllergies() {
		return allergies;
	}

	public void setAllergies(String allergies) {
		this.allergies = allergies;
	}

	public String getObstetrichistory() {
		return obstetrichistory;
	}

	public void setObstetrichistory(String obstetrichistory) {
		this.obstetrichistory = obstetrichistory;
	}

	public String getGrav() {
		return grav;
	}

	public void setGrav(String grav) {
		this.grav = grav;
	}

	public String getPara() {
		return para;
	}

	public void setPara(String para) {
		this.para = para;
	}

	public String getAbortion() {
		return abortion;
	}

	public void setAbortion(String abortion) {
		this.abortion = abortion;
	}

	public String getLive() {
		return live;
	}

	public void setLive(String live) {
		this.live = live;
	}

	public String getFatherdm() {
		return fatherdm;
	}

	public void setFatherdm(String fatherdm) {
		this.fatherdm = fatherdm;
	}

	public String getMotherdm() {
		return motherdm;
	}

	public void setMotherdm(String motherdm) {
		this.motherdm = motherdm;
	}

	public String getSibilingsdm() {
		return sibilingsdm;
	}

	public void setSibilingsdm(String sibilingsdm) {
		this.sibilingsdm = sibilingsdm;
	}

	public String getFatherhtm() {
		return fatherhtm;
	}

	public void setFatherhtm(String fatherhtm) {
		this.fatherhtm = fatherhtm;
	}

	public String getMotherhtm() {
		return motherhtm;
	}

	public void setMotherhtm(String motherhtm) {
		this.motherhtm = motherhtm;
	}

	public String getSibilingshtm() {
		return sibilingshtm;
	}

	public void setSibilingshtm(String sibilingshtm) {
		this.sibilingshtm = sibilingshtm;
	}

	public String getFatherheartdisease() {
		return fatherheartdisease;
	}

	public void setFatherheartdisease(String fatherheartdisease) {
		this.fatherheartdisease = fatherheartdisease;
	}

	public String getMotherheartdisease() {
		return motherheartdisease;
	}

	public void setMotherheartdisease(String motherheartdisease) {
		this.motherheartdisease = motherheartdisease;
	}

	public String getSibilingsheartdisease() {
		return sibilingsheartdisease;
	}

	public void setSibilingsheartdisease(String sibilingsheartdisease) {
		this.sibilingsheartdisease = sibilingsheartdisease;
	}

	public String getFatherkidneydisease() {
		return fatherkidneydisease;
	}

	public void setFatherkidneydisease(String fatherkidneydisease) {
		this.fatherkidneydisease = fatherkidneydisease;
	}

	public String getMotherkidneydisease() {
		return motherkidneydisease;
	}

	public void setMotherkidneydisease(String motherkidneydisease) {
		this.motherkidneydisease = motherkidneydisease;
	}

	public String getSibilingskidneydisease() {
		return sibilingskidneydisease;
	}

	public void setSibilingskidneydisease(String sibilingskidneydisease) {
		this.sibilingskidneydisease = sibilingskidneydisease;
	}

	public String getFatherasthma() {
		return fatherasthma;
	}

	public void setFatherasthma(String fatherasthma) {
		this.fatherasthma = fatherasthma;
	}

	public String getMotherasthma() {
		return motherasthma;
	}

	public void setMotherasthma(String motherasthma) {
		this.motherasthma = motherasthma;
	}

	public String getSibilingsasthma() {
		return sibilingsasthma;
	}

	public void setSibilingsasthma(String sibilingsasthma) {
		this.sibilingsasthma = sibilingsasthma;
	}

	public String getOtherfamhistoryfather() {
		return otherfamhistoryfather;
	}

	public void setOtherfamhistoryfather(String otherfamhistoryfather) {
		this.otherfamhistoryfather = otherfamhistoryfather;
	}

	public String getOtherfamhistorymother() {
		return otherfamhistorymother;
	}

	public void setOtherfamhistorymother(String otherfamhistorymother) {
		this.otherfamhistorymother = otherfamhistorymother;
	}

	public String getOtherfamhistorysibilings() {
		return otherfamhistorysibilings;
	}

	public void setOtherfamhistorysibilings(String otherfamhistorysibilings) {
		this.otherfamhistorysibilings = otherfamhistorysibilings;
	}

	public String getMedications() {
		return medications;
	}

	public void setMedications(String medications) {
		this.medications = medications;
	}

	public String getBp() {
		return bp;
	}

	public void setBp(String bp) {
		this.bp = bp;
	}

	public String getPulse() {
		return pulse;
	}

	public void setPulse(String pulse) {
		this.pulse = pulse;
	}

	public String getHeent() {
		return heent;
	}

	public void setHeent(String heent) {
		this.heent = heent;
	}

	public String getNeck() {
		return neck;
	}

	public void setNeck(String neck) {
		this.neck = neck;
	}

	public String getRespsystem() {
		return respsystem;
	}

	public void setRespsystem(String respsystem) {
		this.respsystem = respsystem;
	}

	public String getHeart() {
		return heart;
	}

	public void setHeart(String heart) {
		this.heart = heart;
	}

	public String getAbdomen() {
		return abdomen;
	}

	public void setAbdomen(String abdomen) {
		this.abdomen = abdomen;
	}

	public String getExtremities() {
		return extremities;
	}

	public void setExtremities(String extremities) {
		this.extremities = extremities;
	}

	public String getGentalia() {
		return gentalia;
	}

	public void setGentalia(String gentalia) {
		this.gentalia = gentalia;
	}

	public String getBreast() {
		return breast;
	}

	public void setBreast(String breast) {
		this.breast = breast;
	}

	public String getFeet() {
		return feet;
	}

	public void setFeet(String feet) {
		this.feet = feet;
	}

	public String getImpressions() {
		return impressions;
	}

	public void setImpressions(String impressions) {
		this.impressions = impressions;
	}

	public String getReccomendations() {
		return reccomendations;
	}

	public void setReccomendations(String reccomendations) {
		this.reccomendations = reccomendations;
	}

}
