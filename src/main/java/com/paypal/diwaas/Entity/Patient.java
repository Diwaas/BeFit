package com.paypal.diwaas.Entity;

import java.util.Date;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "patient")
public class Patient {
	@Id
	private String id;
	private int seq;
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

}
