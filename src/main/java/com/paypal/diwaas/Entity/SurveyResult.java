package com.paypal.diwaas.Entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "surveyresult")
public class SurveyResult {
	@Id
	private String id;
	private String patientid;
	private List<Track> tracks;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPatientid() {
		return patientid;
	}
	public void setPatientid(String patientid) {
		this.patientid = patientid;
	}
	public List<Track> getTracks() {
		return tracks;
	}
	public void setTracks(List<Track> tracks) {
		this.tracks = tracks;
	}
	
	
}
class QuestionSet
{
	private String question;
	private String answer;
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	
}

class Track
{
	private String trackid;
	private List<QuestionSet> survey;
	public String getTrackid() {
		return trackid;
	}
	public void setTrackid(String trackid) {
		this.trackid = trackid;
	}
	public List<QuestionSet> getSurvey() {
		return survey;
	}
	public void setSurvey(List<QuestionSet> survey) {
		this.survey = survey;
	}
	
	
}