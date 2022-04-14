package com.cdac.project.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "registrant")
public class Registrant {
	@Id
	private long id;
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "full_name")
	private String full_name;
	@Column(name = "phone_no")
	private String phoneNo;
	@Column(name = "email_id")
	private String emailId;

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	@Column(name = "user_name")
	private String user_name;
//	@Column(name = "profile_image")
//	private String profile_image;

	@Column(name = "gender")
	private String gender;
	@Column(name = "password")
	private String password;

	private String confirmPassword;

	public Registrant() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFull_name() {
		return full_name;
	}

	public void setFull_name(String full_name) {
		this.full_name = full_name;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}


	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	public Registrant(long id, String full_name, String phoneNo, String emailId, String user_name, String gender,
			String password, String confirmPassword) {
		super();
		this.id = id;
		this.full_name = full_name;
		this.phoneNo = phoneNo;
		this.emailId = emailId;
		this.user_name = user_name;
		this.gender = gender;
		this.password = password;
		this.confirmPassword = confirmPassword;
	}


//	@OneToMany(targetEntity = Offers.class, mappedBy = "user")
//	private List<Offers> offers;
//
//	@Column(nullable = false, columnDefinition = "TINYINT(1)")
//	private boolean confirmed_email;

}
