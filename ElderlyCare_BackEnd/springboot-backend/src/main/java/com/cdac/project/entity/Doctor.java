package com.cdac.project.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "emergency_doctor_service")
public class Doctor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private long ServiceId=2;
	
	@Column(name = "name")
	private String name;	
	
	@Column(name = "email_id")
	private String emailId;
	
	@Column(name = "phone_no")
	private String phoneNo;
	
	@Column(name = "experience")
	private String experience;
	
	public long getServiceId() {
		return ServiceId;
	}

	public void setServiceId(long serviceId) {
		ServiceId = serviceId;
	}

	@Column(name = "specialization")
	private String specialization;
	
	public Doctor() {
		
	}


	
	public long getId() {
		return id;
	}

	public Doctor(long id, long serviceId, String name, String emailId, String phoneNo, String experience,
		String specialization) {
	super();
	this.id = id;
	ServiceId = serviceId;
	this.name = name;
	this.emailId = emailId;
	this.phoneNo = phoneNo;
	this.experience = experience;
	this.specialization = specialization;
}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getExperience() {
		return experience;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}
  
	
}
