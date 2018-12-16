package com.paypal.diwaas.Entity;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "patient")
public class Patient {
	@Id
	private String id;
	private String name;
	private String password;
	private String email;
	private long mobilenumber;
	private String dob;
	private String age;
	private String relation;
	private String relationname;
	private long whatsappnumber;
	private String bloodgroup;
	private String refferedby;
	private String reasonforconsultation;
	private String date;
	private String regno;
	private String sex;
	private float height;
	private float weight;
	private String address;
	private String education;
	private String natureofwork;
	private String chiefcomplaints;
	private String presentillness;
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
	private String grav;
	private String para;
	private String abortion;
	private String live;
	private String dmfather;
	private String dmmother;
	private String dmsibilings;
	private String htnfather;
	private String htnmother;
	private String htnsibilings;
	private String heartdiseasefather;
	private String heartdiseasemother;
	private String heartdiseasesibilings;
	private String kidneydiseasefather;
	private String kidneydiseasemother;
	private String kidneydiseasesibilings;
	private String asthmafather;
	private String asthmamother;
	private String asthmasibilings;
	private String othersfather;
	private String othersmother;
	private String otherssiblings;
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
	private String recommendations;
	private String labreports;

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getRelation() {
		return relation;
	}

	public void setRelation(String relation) {
		this.relation = relation;
	}

	public String getRelationname() {
		return relationname;
	}

	public void setRelationname(String relationname) {
		this.relationname = relationname;
	}

	public String getBloodgroup() {
		return bloodgroup;
	}

	public void setBloodgroup(String bloodgroup) {
		this.bloodgroup = bloodgroup;
	}

	public String getRefferedby() {
		return refferedby;
	}

	public void setRefferedby(String refferedby) {
		this.refferedby = refferedby;
	}

	public String getReasonforconsultation() {
		return reasonforconsultation;
	}

	public void setReasonforconsultation(String reasonforconsultation) {
		this.reasonforconsultation = reasonforconsultation;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getRegno() {
		return regno;
	}

	public void setRegno(String regno) {
		this.regno = regno;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public float getHeight() {
		return height;
	}

	public void setHeight(float height) {
		this.height = height;
	}

	public float getWeight() {
		return weight;
	}

	public void setWeight(float weight) {
		this.weight = weight;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEducation() {
		return education;
	}

	public void setEducation(String education) {
		this.education = education;
	}

	public String getNatureofwork() {
		return natureofwork;
	}

	public void setNatureofwork(String natureofwork) {
		this.natureofwork = natureofwork;
	}

	public long getMobilenumber() {
		return mobilenumber;
	}

	public void setMobilenumber(long mobilenumber) {
		this.mobilenumber = mobilenumber;
	}

	public long getWhatsappnumber() {
		return whatsappnumber;
	}

	public void setWhatsappnumber(long whatsappnumber) {
		this.whatsappnumber = whatsappnumber;
	}

	public String getChiefcomplaints() {
		return chiefcomplaints;
	}

	public void setChiefcomplaints(String chiefcomplaints) {
		this.chiefcomplaints = chiefcomplaints;
	}

	public String getPresentillness() {
		return presentillness;
	}

	public void setPresentillness(String presentillness) {
		this.presentillness = presentillness;
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

	public String getDmfather() {
		return dmfather;
	}

	public void setDmfather(String dmfather) {
		this.dmfather = dmfather;
	}

	public String getDmmother() {
		return dmmother;
	}

	public void setDmmother(String dmmother) {
		this.dmmother = dmmother;
	}

	public String getDmsibilings() {
		return dmsibilings;
	}

	public void setDmsibilings(String dmsibilings) {
		this.dmsibilings = dmsibilings;
	}

	public String getHtnfather() {
		return htnfather;
	}

	public void setHtnfather(String htnfather) {
		this.htnfather = htnfather;
	}

	public String getHtnmother() {
		return htnmother;
	}

	public void setHtnmother(String htnmother) {
		this.htnmother = htnmother;
	}

	public String getHtnsibilings() {
		return htnsibilings;
	}

	public void setHtnsibilings(String htnsibilings) {
		this.htnsibilings = htnsibilings;
	}

	public String getHeartdiseasefather() {
		return heartdiseasefather;
	}

	public void setHeartdiseasefather(String heartdiseasefather) {
		this.heartdiseasefather = heartdiseasefather;
	}

	public String getHeartdiseasemother() {
		return heartdiseasemother;
	}

	public void setHeartdiseasemother(String heartdiseasemother) {
		this.heartdiseasemother = heartdiseasemother;
	}

	public String getHeartdiseasesibilings() {
		return heartdiseasesibilings;
	}

	public void setHeartdiseasesibilings(String heartdiseasesibilings) {
		this.heartdiseasesibilings = heartdiseasesibilings;
	}

	public String getKidneydiseasefather() {
		return kidneydiseasefather;
	}

	public void setKidneydiseasefather(String kidneydiseasefather) {
		this.kidneydiseasefather = kidneydiseasefather;
	}

	public String getKidneydiseasemother() {
		return kidneydiseasemother;
	}

	public void setKidneydiseasemother(String kidneydiseasemother) {
		this.kidneydiseasemother = kidneydiseasemother;
	}

	public String getKidneydiseasesibilings() {
		return kidneydiseasesibilings;
	}

	public void setKidneydiseasesibilings(String kidneydiseasesibilings) {
		this.kidneydiseasesibilings = kidneydiseasesibilings;
	}

	public String getAsthmafather() {
		return asthmafather;
	}

	public void setAsthmafather(String asthmafather) {
		this.asthmafather = asthmafather;
	}

	public String getAsthmamother() {
		return asthmamother;
	}

	public void setAsthmamother(String asthmamother) {
		this.asthmamother = asthmamother;
	}

	public String getAsthmasibilings() {
		return asthmasibilings;
	}

	public void setAsthmasibilings(String asthmasibilings) {
		this.asthmasibilings = asthmasibilings;
	}

	public String getOthersfather() {
		return othersfather;
	}

	public void setOthersfather(String othersfather) {
		this.othersfather = othersfather;
	}

	public String getOthersmother() {
		return othersmother;
	}

	public void setOthersmother(String othersmother) {
		this.othersmother = othersmother;
	}

	public String getOtherssiblings() {
		return otherssiblings;
	}

	public void setOtherssiblings(String otherssiblings) {
		this.otherssiblings = otherssiblings;
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

	public String getRecommendations() {
		return recommendations;
	}

	public void setRecommendations(String recommendations) {
		this.recommendations = recommendations;
	}

	public String getLabreports() {
		return labreports;
	}

	public void setLabreports(String labreports) {
		this.labreports = labreports;
	}
	

}
