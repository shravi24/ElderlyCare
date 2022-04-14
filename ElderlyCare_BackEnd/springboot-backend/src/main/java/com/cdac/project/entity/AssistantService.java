package com.cdac.project.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "assistant_service")
public class AssistantService {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
//	@OneToOne(fetch = FetchType.LAZY)
//	    @JoinColumn(name = "id")
//	    private Service service;
	
//	@Column(name = "service_id")

   private Integer serviceId = 1;
	


	@Column(name = "profile_photo")
	private String profilePhoto;

	@Column(name = "name")
	private String name;

	@Column(name = "email_id")
	private String emailId;

	@Column(name = "phone_no")
	private String phoneNo;

	@Column(name = "experience")
	private String experience;

	public AssistantService() {
		super();
	}

	public AssistantService(long id, Integer serviceId, String profilePhoto, String name, String emailId,
			String phoneNo, String experience) {
		super();
		this.id = id;
		this.serviceId = serviceId;
		this.profilePhoto = profilePhoto;
		this.name = name;
		this.emailId = emailId;
		this.phoneNo = phoneNo;
		this.experience = experience;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Integer getServiceId() {
		return serviceId;
	}

	public void setServiceId(Integer serviceId) {
		this.serviceId = serviceId;
	}

	public String getProfilePhoto() {
		return profilePhoto;
	}

	public void setProfilePhoto(String profilePhoto) {
		this.profilePhoto = profilePhoto;
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

}
