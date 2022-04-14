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
@Table(name = "user")
public class User {
	@Id
	private long id;
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "registrant_id")
	private String registrantId;
	
	@Column(name = "name")
	private String name;
	

	@Column(name = "totalcost")
	private String totalcost;
	
	public String getTotalcost() {
		return totalcost;
	}
	public void setTotalcost(String totalcost) {
		this.totalcost = totalcost;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Column(name = "subscription_id")
	private String subscriptionId;
	
	public String getSubscriptionId() {
		return subscriptionId;
	}
	public void setSubscriptionId(String subscriptionId) {
		this.subscriptionId = subscriptionId;
	}
	@Column(name = "address")
	private String address;
	
	@Column(name = "area")
	private String area;
	
	@Column(name = "email_id")
	private String emailId;
	@Column(name = "phone_no")
	private String phoneNo;
	@Column(name = "gender")
	private String gender;
	@Column(name = "age")
	private String age;
	public User() {
		super();
	}
	public User(long id, String registrantId, String address, String area, String emailId, String phoneNo,
			String gender, String age, String totalcost) {
		super();
		this.id = id;
		this.registrantId = registrantId;
		this.address = address;
		this.area = area;
		this.emailId = emailId;
		this.phoneNo = phoneNo;
		this.gender = gender;
		this.age = age;
		this.totalcost = totalcost;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getRegistrantId() {
		return registrantId;
	}
	public void setRegistrantId(String registrantId) {
		this.registrantId = registrantId;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
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
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	
	
	
	


}
